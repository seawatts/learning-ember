import DS from "ember-data";

export default DS.RESTAdapter.extend({
  namespace: '2010-04-01/Accounts/ACc138b38a6678f544e688c3b2ef0bb6cc',
  pathForType: function() {
    return 'Messages';
  },
  buildURL: function() {
    return this._super.apply(this, arguments) + ".json";
  },
  headers: {
    Authorization: 'Basic QUNjMTM4YjM4YTY2NzhmNTQ0ZTY4OGMzYjJlZjBiYjZjYzpjODkxODU2NWJjZDc3MDI5NDE3OTk0ZTYzYzczOWViMg=='
  }
});
