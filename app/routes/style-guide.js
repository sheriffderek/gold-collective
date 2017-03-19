import Ember from 'ember';

export default Ember.Route.extend({

	model() {
		let pageData = this.store.peekRecord('page', 274);
		console.log(pageData);
		return pageData;
	}

});