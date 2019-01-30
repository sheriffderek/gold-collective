import Ember from 'ember';

export default Ember.Route.extend({

	activate() {
    	this._super();
    	window.scrollTo(0,0);
  	},

	model() {
		let pageData = this.store.peekRecord('page', 41);
		console.log(pageData);
		return pageData;
	},

});
