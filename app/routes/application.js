import Ember from 'ember';

export default Ember.Route.extend({

	model() {
		const pageData = this.store.findAll('page');
		// console.log(pageData);
		return pageData;
	},

});
