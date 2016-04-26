import Ember from 'ember';

export default Ember.Route.extend({

	model() {
		let pageData = this.store.peekRecord('page', 41);
		console.log(pageData);
		return pageData;
	}
	
});
