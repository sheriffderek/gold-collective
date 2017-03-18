import Ember from 'ember';
import DS from 'ember-data';
import PostModel from "ember-wordpress/models/post";

export default PostModel.extend({
	better_featured_image: DS.attr(),
  title: DS.attr(),
  url: Ember.computed.alias('better_featured_image.source_url'),
  backgroundStyle: Ember.computed('url', function() {
    const imageUrl = this.get('url');
    return Ember.String.htmlSafe(`background-image: url(${imageUrl})`);
  }),
});
