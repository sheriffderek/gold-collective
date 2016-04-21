import Ember from 'ember';

export default Ember.Route.extend({

	model() {
		let postsData = this.store.findAll('post');
		console.log(postsData);
		return postsData;
	}

});
