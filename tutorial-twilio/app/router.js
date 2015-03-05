import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource("messages", function() {
    this.resource("message", {path: ":message_id"})
  });


  this.resource("healthcheck", function() {});
  this.resource("cars", function() {});
});

export default Router;
