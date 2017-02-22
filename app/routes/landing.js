import Ember from 'ember';

export default Ember.Route.extend({

	model() {
		let postsData = this.store.findAll('splashImage');
		console.log(postsData);
		return postsData;
	},

});