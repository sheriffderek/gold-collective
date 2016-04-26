import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('landing', { path: '/' });
  this.route('about');
  this.route('contact');
  this.route('inspiration');
  this.route('style-guide');
});

export default Router;
