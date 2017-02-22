import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'ul',
	classNames: ['image-slider', 'rslides'],
	sortedReviews: Ember.computed.sort('images', 'sortDefinition'),
	sortDefinition: ['slug'],

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