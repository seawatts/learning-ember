import Ember from 'ember';
//import _ from 'lodash';

export default Ember.Route.extend({
  model: function() {
    return this.store.find('message');
  }
});
