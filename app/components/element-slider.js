import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'ul',
	classNames: ['image-slider', 'rslides'],
	sortedReviews: Ember.computed.sort('images', 'sortDefinition'),
	sortDefinition: ['slug'],
	browserWindow: Ember.inject.service('window-watcher'),
	browser: {
		small: null,
		medium: null,
		large: null,
		portrait: null,
		landscape: null,
	},
	init() {

		this._super(...arguments);

		if ( Ember.$(window).width() > 900 ) {
			this.set('browser.small', false);
			this.set('browser.medium', false);
			this.set('browser.large', true);
		} else if ( Ember.$(window).width() > 600 ) {
			this.set('browser.small', false);
			this.set('browser.medium', true);
			this.set('browser.large', false);
		} else {
			this.set('browser.small', true);
			this.set('browser.medium', false);
			this.set('browser.large', false);
		}

		if ( Ember.$(window).width() > Ember.$(window).height() ) {
			this.set('browser.portrait', false);
			this.set('browser.landscape', true);
		} else {
			this.set('browser.landscape', false);
			this.set('browser.portrait', true);
		}

		console.log(this.browser);
		console.log( `Browser is small? ${this.browser.small}`);
		console.log( `Browser is medium? ${this.browser.medium}`);
		console.log(this.browser.smallPortrait);
	},
	didInsertElement() {

		Ember.$('.rslides').responsiveSlides({
			auto: true,
			speed: 1000,
			timeout: 5500,
			before: function() {},
			after: function() {},
			pager: false
		});

	},
	didRender() {
		Ember.$('.rslides').animate({
			opacity: 1
		}, 700);
	},
});
