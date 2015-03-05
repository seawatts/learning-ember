import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  primaryKey: 'sid',
  normalizePayload: function(payload) {
    return {
      'messages': payload.messages
    };
  }
});
