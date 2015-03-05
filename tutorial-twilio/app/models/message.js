import DS from 'ember-data';
export default DS.Model.extend({
  body: DS.attr('string'),
  date_sent: DS.attr('string'),
  from: DS.attr('string'),
  to: DS.attr('string'),
  status: DS.attr('string')
});
