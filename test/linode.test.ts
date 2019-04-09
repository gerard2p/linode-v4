import * as Mocha from 'mocha';
import { expect, assert } from 'chai';
import { Filter, Account, AccountSettings, AuthorizedApp, Backup, CreditCard, Device, Devices, Disk, DiskRequest, Domain, DomainRecord, ErrorObject, Event, Grant, GrantsResponse, ImagePrivate, ImagePublic, Invoice, InvoiceItem, IPAddress, IPAddressPrivate, IPAddressV6LinkLocal, IPAddressV6Slaac, IPv6Pool, IPv6Range, Kernel, Linode, LinodeBase, LinodeConfig, LinodeRequest, LinodeStats, LinodeType, LongviewClient, LongviewSubscription, ManagedContact, ManagedCredential, ManagedIssue, ManagedLinodeSettings, ManagedService, NodeBalancer, NodeBalancerConfig, NodeBalancerNode, NodeBalancerStats, Notification, OAuthClient, PaginationEnvelope, Payment, PaymentRequest, PayPal, PayPalExecute, PersonalAccessToken, Profile, Region, RescueDevices, StackScript, SupportTicket, SupportTicketReply, SupportTicketRequest, Transfer, Tag, User, UserDefinedField, TrustedDevice, SSHKey, SSHKeyRequest, Volume, AuthorizedAppFilter, DiskFilter, DiskRequestFilter, DomainFilter, ImagePrivateFilter, ImagePublicFilter, IPAddressFilter, IPAddressPrivateFilter, IPAddressV6LinkLocalFilter, IPAddressV6SlaacFilter, KernelFilter, LinodeFilter, LinodeBaseFilter, LinodeConfigFilter, LinodeTypeFilter, LongviewClientFilter, ManagedContactFilter, NodeBalancerFilter, OAuthClientFilter, PersonalAccessTokenFilter, StackScriptFilter, SupportTicketFilter, UserFilter, VolumeFilter } from '../src/interfaces';
import { Linodev4 } from '../src/';
const server = new Linodev4('personal-key-secured', {method:'options'}, async (data) => data );
describe('/linode', () => {
	it('instances', async ()=>{
		expect(await server.linode.instances.list()).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/linode/instances","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.linode.instances.list(1)).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/linode/instances","query":"?page=1","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.linode.instances.list(1, 50)).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/linode/instances","query":"?page=1&page_size=50","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.linode.instances.list({} as Filter<LinodeFilter>)).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/linode/instances","headers":{"Authorization":"Bearer personal-key-secured","X-Filter":{}}});
		expect(await server.linode.instances.list(2, {} as Filter<LinodeFilter>)).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/linode/instances","query":"?page=2","headers":{"Authorization":"Bearer personal-key-secured","X-Filter":{}}});
		expect(await server.linode.instances.list(2, 5, {} as Filter<LinodeFilter>)).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/linode/instances","query":"?page=2&page_size=5","headers":{"Authorization":"Bearer personal-key-secured","X-Filter":{}}});
		expect(await server.linode.instances.create({} as any)).to.deep.equal({"verb":"post","route":"https://api.linode.com/v4/linode/instances","body":{},"headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.linode.instances(1).get()).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/linode/instances/1","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.linode.instances(1).update({} as Linode)).to.deep.equal({"verb":"put","route":"https://api.linode.com/v4/linode/instances/1","body":{},"headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.linode.instances(1).delete()).to.deep.equal({"verb":"delete","route":"https://api.linode.com/v4/linode/instances/1","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.linode.instances(1).boot({} as any)).to.deep.equal({"verb":"post","route":"https://api.linode.com/v4/linode/instances/1/boot","body":{},"headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.linode.instances(1).clone({} as any)).to.deep.equal({"verb":"post","route":"https://api.linode.com/v4/linode/instances/1/clone","body":{},"headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.linode.instances(1).migrate()).to.deep.equal({"verb":"post","route":"https://api.linode.com/v4/linode/instances/1/migrate","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.linode.instances(1).mutate()).to.deep.equal({"verb":"post","route":"https://api.linode.com/v4/linode/instances/1/mutate","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.linode.instances(1).reboot({} as any)).to.deep.equal({"verb":"post","route":"https://api.linode.com/v4/linode/instances/1/reboot","body":{},"headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.linode.instances(1).rebuild({} as any)).to.deep.equal({"verb":"post","route":"https://api.linode.com/v4/linode/instances/1/rebuild","body":{},"headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.linode.instances(1).rescue({} as any)).to.deep.equal({"verb":"post","route":"https://api.linode.com/v4/linode/instances/1/rescue","body":{},"headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.linode.instances(1).resize({} as any)).to.deep.equal({"verb":"post","route":"https://api.linode.com/v4/linode/instances/1/resize","body":{},"headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.linode.instances(1).shutdown()).to.deep.equal({"verb":"post","route":"https://api.linode.com/v4/linode/instances/1/shutdown","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.linode.instances(1).backups.get()).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/linode/instances/1/backups","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.linode.instances(1).backups.create({} as any)).to.deep.equal({"verb":"post","route":"https://api.linode.com/v4/linode/instances/1/backups","body":{},"headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.linode.instances(1).backups.cancel()).to.deep.equal({"verb":"post","route":"https://api.linode.com/v4/linode/instances/1/backups/cancel","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.linode.instances(1).backups.enable()).to.deep.equal({"verb":"post","route":"https://api.linode.com/v4/linode/instances/1/backups/enable","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.linode.instances(1).backups(1).get()).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/linode/instances/1/backups/1","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.linode.instances(1).backups(1).restore({} as any)).to.deep.equal({"verb":"post","route":"https://api.linode.com/v4/linode/instances/1/backups/1/restore","body":{},"headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.linode.instances(1).configs.list()).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/linode/instances/1/configs","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.linode.instances(1).configs.list(1)).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/linode/instances/1/configs","query":"?page=1","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.linode.instances(1).configs.list(1, 50)).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/linode/instances/1/configs","query":"?page=1&page_size=50","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.linode.instances(1).configs.list({} as Filter<LinodeConfigFilter>)).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/linode/instances/1/configs","headers":{"Authorization":"Bearer personal-key-secured","X-Filter":{}}});
		expect(await server.linode.instances(1).configs.list(2, {} as Filter<LinodeConfigFilter>)).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/linode/instances/1/configs","query":"?page=2","headers":{"Authorization":"Bearer personal-key-secured","X-Filter":{}}});
		expect(await server.linode.instances(1).configs.list(2, 5, {} as Filter<LinodeConfigFilter>)).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/linode/instances/1/configs","query":"?page=2&page_size=5","headers":{"Authorization":"Bearer personal-key-secured","X-Filter":{}}});
		expect(await server.linode.instances(1).configs.create({} as LinodeConfig)).to.deep.equal({"verb":"post","route":"https://api.linode.com/v4/linode/instances/1/configs","body":{},"headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.linode.instances(1).configs(1).get()).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/linode/instances/1/configs/1","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.linode.instances(1).configs(1).update({} as LinodeConfig)).to.deep.equal({"verb":"put","route":"https://api.linode.com/v4/linode/instances/1/configs/1","body":{},"headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.linode.instances(1).configs(1).delete()).to.deep.equal({"verb":"delete","route":"https://api.linode.com/v4/linode/instances/1/configs/1","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.linode.instances(1).disks.list()).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/linode/instances/1/disks","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.linode.instances(1).disks.list(1)).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/linode/instances/1/disks","query":"?page=1","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.linode.instances(1).disks.list(1, 50)).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/linode/instances/1/disks","query":"?page=1&page_size=50","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.linode.instances(1).disks.list({} as Filter<DiskFilter>)).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/linode/instances/1/disks","headers":{"Authorization":"Bearer personal-key-secured","X-Filter":{}}});
		expect(await server.linode.instances(1).disks.list(2, {} as Filter<DiskFilter>)).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/linode/instances/1/disks","query":"?page=2","headers":{"Authorization":"Bearer personal-key-secured","X-Filter":{}}});
		expect(await server.linode.instances(1).disks.list(2, 5, {} as Filter<DiskFilter>)).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/linode/instances/1/disks","query":"?page=2&page_size=5","headers":{"Authorization":"Bearer personal-key-secured","X-Filter":{}}});
		expect(await server.linode.instances(1).disks.create({} as DiskRequest)).to.deep.equal({"verb":"post","route":"https://api.linode.com/v4/linode/instances/1/disks","body":{},"headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.linode.instances(1).disks(1).get()).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/linode/instances/1/disks/1","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.linode.instances(1).disks(1).update({} as Disk)).to.deep.equal({"verb":"put","route":"https://api.linode.com/v4/linode/instances/1/disks/1","body":{},"headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.linode.instances(1).disks(1).delete()).to.deep.equal({"verb":"delete","route":"https://api.linode.com/v4/linode/instances/1/disks/1","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.linode.instances(1).disks(1).clone()).to.deep.equal({"verb":"post","route":"https://api.linode.com/v4/linode/instances/1/disks/1/clone","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.linode.instances(1).disks(1).password({} as any)).to.deep.equal({"verb":"post","route":"https://api.linode.com/v4/linode/instances/1/disks/1/password","body":{},"headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.linode.instances(1).disks(1).resize({} as any)).to.deep.equal({"verb":"post","route":"https://api.linode.com/v4/linode/instances/1/disks/1/resize","body":{},"headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.linode.instances(1).ips.get()).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/linode/instances/1/ips","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.linode.instances(1).ips.create({} as any)).to.deep.equal({"verb":"post","route":"https://api.linode.com/v4/linode/instances/1/ips","body":{},"headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.linode.instances(1).ips('address').get()).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/linode/instances/1/ips/address","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.linode.instances(1).ips('address').update({} as any)).to.deep.equal({"verb":"put","route":"https://api.linode.com/v4/linode/instances/1/ips/address","body":{},"headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.linode.instances(1).ips('address').delete()).to.deep.equal({"verb":"delete","route":"https://api.linode.com/v4/linode/instances/1/ips/address","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.linode.instances(1).stats.get()).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/linode/instances/1/stats","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.linode.instances(1).stats.stats(1, 1)).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/linode/instances/1/stats/1/1","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.linode.instances(1).volumes.list()).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/linode/instances/1/volumes","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.linode.instances(1).volumes.list(1)).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/linode/instances/1/volumes","query":"?page=1","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.linode.instances(1).volumes.list(1, 50)).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/linode/instances/1/volumes","query":"?page=1&page_size=50","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.linode.instances(1).volumes.list({} as Filter<VolumeFilter>)).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/linode/instances/1/volumes","headers":{"Authorization":"Bearer personal-key-secured","X-Filter":{}}});
		expect(await server.linode.instances(1).volumes.list(2, {} as Filter<VolumeFilter>)).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/linode/instances/1/volumes","query":"?page=2","headers":{"Authorization":"Bearer personal-key-secured","X-Filter":{}}});
		expect(await server.linode.instances(1).volumes.list(2, 5, {} as Filter<VolumeFilter>)).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/linode/instances/1/volumes","query":"?page=2&page_size=5","headers":{"Authorization":"Bearer personal-key-secured","X-Filter":{}}});
	});
	it('kernels', async ()=>{
		expect(await server.linode.kernels.list()).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/linode/kernels","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.linode.kernels.list(1)).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/linode/kernels","query":"?page=1","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.linode.kernels.list(1, 50)).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/linode/kernels","query":"?page=1&page_size=50","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.linode.kernels.list({} as Filter<KernelFilter>)).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/linode/kernels","headers":{"Authorization":"Bearer personal-key-secured","X-Filter":{}}});
		expect(await server.linode.kernels.list(2, {} as Filter<KernelFilter>)).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/linode/kernels","query":"?page=2","headers":{"Authorization":"Bearer personal-key-secured","X-Filter":{}}});
		expect(await server.linode.kernels.list(2, 5, {} as Filter<KernelFilter>)).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/linode/kernels","query":"?page=2&page_size=5","headers":{"Authorization":"Bearer personal-key-secured","X-Filter":{}}});
		expect(await server.linode.kernels('kernelId').get()).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/linode/kernels/kernelId","headers":{"Authorization":"Bearer personal-key-secured"}});
	});
	it('stackscripts', async ()=>{
		expect(await server.linode.stackscripts.list()).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/linode/stackscripts","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.linode.stackscripts.list(1)).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/linode/stackscripts","query":"?page=1","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.linode.stackscripts.list(1, 50)).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/linode/stackscripts","query":"?page=1&page_size=50","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.linode.stackscripts.list({} as Filter<StackScriptFilter>)).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/linode/stackscripts","headers":{"Authorization":"Bearer personal-key-secured","X-Filter":{}}});
		expect(await server.linode.stackscripts.list(2, {} as Filter<StackScriptFilter>)).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/linode/stackscripts","query":"?page=2","headers":{"Authorization":"Bearer personal-key-secured","X-Filter":{}}});
		expect(await server.linode.stackscripts.list(2, 5, {} as Filter<StackScriptFilter>)).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/linode/stackscripts","query":"?page=2&page_size=5","headers":{"Authorization":"Bearer personal-key-secured","X-Filter":{}}});
		expect(await server.linode.stackscripts.create({} as any)).to.deep.equal({"verb":"post","route":"https://api.linode.com/v4/linode/stackscripts","body":{},"headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.linode.stackscripts('stackscriptId').get()).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/linode/stackscripts/stackscriptId","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.linode.stackscripts('stackscriptId').update({} as StackScript)).to.deep.equal({"verb":"put","route":"https://api.linode.com/v4/linode/stackscripts/stackscriptId","body":{},"headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.linode.stackscripts('stackscriptId').delete()).to.deep.equal({"verb":"delete","route":"https://api.linode.com/v4/linode/stackscripts/stackscriptId","headers":{"Authorization":"Bearer personal-key-secured"}});
	});
	it('types', async ()=>{
		expect(await server.linode.types.list()).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/linode/types","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.linode.types.list(1)).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/linode/types","query":"?page=1","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.linode.types.list(1, 50)).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/linode/types","query":"?page=1&page_size=50","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.linode.types.list({} as Filter<LinodeTypeFilter>)).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/linode/types","headers":{"Authorization":"Bearer personal-key-secured","X-Filter":{}}});
		expect(await server.linode.types.list(2, {} as Filter<LinodeTypeFilter>)).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/linode/types","query":"?page=2","headers":{"Authorization":"Bearer personal-key-secured","X-Filter":{}}});
		expect(await server.linode.types.list(2, 5, {} as Filter<LinodeTypeFilter>)).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/linode/types","query":"?page=2&page_size=5","headers":{"Authorization":"Bearer personal-key-secured","X-Filter":{}}});
		expect(await server.linode.types('typeId').get()).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/linode/types/typeId","headers":{"Authorization":"Bearer personal-key-secured"}});
	});
});
