import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('landing', { path: '/' });
  this.route('about');
  this.route('contact');
  this.route('inspiration');
  this.route('style-guide');
  this.route('secret-about');
  this.route('faqs');
  this.route('investment');
  this.route('reviews');
  this.route('posts', function() {
    this.route('post', {path: ':post_slug'});
  });
});

export default Router;
