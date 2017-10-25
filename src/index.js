import { createJsonClient } from 'restify-clients';
import sanitize from './sanitize';
import spec from './spec';
let customFn = null;
let mapme = {
	get: 'get',
	delete: 'del',
	update: 'put'
};

Object.defineProperty(Array.prototype, 'peek', { // eslint-disable-line
	enumerable: false,
	writable: false,
	configurable: false,
	value: function (item) {
		let index = this.indexOf(item);
		/* istanbul ignore else */
		if (index > -1) {
			this.splice(index, 1);
			return true;
		}
		return false;
	}
});
function makerequest (method, path, hasparams, data) {
	if (hasparams && !data) {
		throw new Error(`this function requires some arguments. Check: https://developers.linode.com/v4/reference/endpoints${path.replace('v4/', '')}#${method}`);
	} else if (!hasparams && data) {
		throw new Error(`this function cannot have arguments. Check: https://developers.linode.com/v4/reference/endpoints${path.replace('v4/', '')}#${method}`);
	}
	return new Promise((resolve) => {
		let args = [path, data].filter(f => f);
		if (customFn) {
			return customFn(this, method, path, hasparams, data, resolve);
		} else {
			this[method](...args, response.bind(null, resolve));
		}
	});
}
function response (resolve, ...args) {
	resolve(args.pop());
}
function appendcustom (id, actions, target, route) {
	for (let custom of actions) {
		if (custom.indexOf(':') > -1) {
			let single = custom.includes('single');
			let singleId = single && id;
			if (singleId || !id) {
				let noargs = (single || custom.includes('noargs') || !singleId) && !custom.includes('hasargs');
				let nopath = custom.includes('nopath');
				let [rawcommand, method] = custom.split(':');
				let command = sanitize(rawcommand);
				let path = route;
				if (!nopath) {
					path += `/${rawcommand}`;
				}
				target[command] = makerequest.bind(this, method, path, !noargs);
			}
		}
	}
}
function createHandler (client, route, collection) {
	let simpleFnSet = collection.actions.filter(d => !d.includes(':')), complexFnSet = collection.actions.filter(d => d.includes(':'));
	let handler = (id) => {
		let res = {}, url = `${route}/${id}`;
		simpleFnSet.forEach(ac => {
			let method = mapme[ac];
			/* istanbul ignore else */
			if (method) {
				res[ac] = makerequest.bind(client, method, url, method === 'put');
				res[ac].url = url;
				res[ac].method = method;
			}
		});
		appendcustom.bind(client)(id, complexFnSet, res, url);
		for (const k in collection.collections) {
			res[sanitize(k)] = makeapi.bind(this)(`${route}/${id}/${k}`, collection.collections[k]);
		}
		return res;
	};
	for (const [mname, method, hasparams] of [['create', 'post', true], ['list', 'get', false]]) {
		if (simpleFnSet.peek(mname)) {
			handler[mname] = makerequest.bind(client, method, `${route}`, hasparams);
		}
	}
	return handler;
}
function makeapi (route, collection) {
	collection.actions = collection.actions || [];
	let client = this.client;
	let handler = createHandler.bind(this)(client, route, collection);
	if (collection.query) {
		let root = handler, send = route;
		for (const query of collection.query) {
			let current;
			root[query] = function (data) {
				send += `/${data}`;
				return current;
			};
			current = root[query];
			root = root[query];
		}
		root.get = () => makerequest.bind(client, 'get', send, false)();
	}
	if (collection.appendCollections) {
		for (const k in collection.collections) {
			handler[k] = makeapi.bind(this)(`${route}/${k}`, collection.collections[k]);
		}
	}
	appendcustom.bind(client)(null, collection.actions, handler, route);
	return handler;
}

export default class Linode {
	constructor (token, fn = null) {
		customFn = fn;
		Object.defineProperty(this, 'client', {
			enumerable: false,
			writable: false,
			configurable: false,
			value: createJsonClient({
				url: 'https://api.linode.com',
				headers: {
					Authorization: `Bearer ${token}`
				}
			})
		});
		for (const key in spec) {
			this[key] = makeapi.bind(this)('/v4/' + key, spec[key]);
		}
	}
}
