import Ember from 'ember';
import DS from 'ember-data';
import PostModel from "ember-wordpress/models/post";

export default PostModel.extend({
  quote: DS.attr('string'), // $todo - this is not really working as we want
  source: DS.attr('string'),
});