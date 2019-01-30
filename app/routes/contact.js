import Ember from 'ember';

export default Ember.Route.extend({

	activate() {
    	this._super();
    	window.scrollTo(0,0);
  	},

	// model() {
	// 	let pageData = this.store.peekRecord('page', 43);
	// 	console.log(pageData);
	// 	return pageData;
	// },

  model() {
    var x = Ember.RSVP.hash({
      contact: this.store.peekRecord('page', 43),
      reviews: this.store.findAll('review'),
    });
    console.log(x);
    return x;
  },

  setupController(controller, models) {
    // controller.set('posts', models.posts);
    // controller.set('tags', models.tags);
    // controller.set('categories', models.categories);
    // controller.set('weather', models.weather);
    // or, more concisely:
    controller.setProperties(models);
  }

});
