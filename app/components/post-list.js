import Ember from 'ember';

export default Ember.Component.extend({

	model() {
		let postsData = this.store.findAll('post');
		console.log(postsData);
		return postsData;
	}

});
