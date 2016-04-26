import Ember from 'ember';

export default Ember.Route.extend({

	model() {
		let postsData = this.store.findAll('splashImage');
		console.log(postsData);
		return postsData;
	    // return Ember.RSVP.hash({
	    //   landing: this.store.find('page', 70),
	    //   splashImages: this.store.findAll('splashImage')
	    // });
	}

});
