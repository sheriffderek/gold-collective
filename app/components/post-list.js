import Ember from 'ember';

export default Ember.Component.extend({

	model() {
		let splashImageData = this.store.findAll('splashImage');
		console.log(splashImageData);
		return splashImageData;
	}

});
