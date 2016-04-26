import Ember from 'ember';

export default Ember.Route.extend({

	model() {
		let pageData = this.store.findAll('page');
		console.log(pageData);
		return pageData;
	}

});
