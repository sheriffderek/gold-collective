import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'ul',
	classNames: ['image-slider', 'rslides'],

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
		const $slider = this.$();
		$slider.css('opacity', 0);
		Ember.run.later( function() {
			$slider.animate({ // $todo switch for greensock
				opacity: 1
			}, 700, function() {
				//
			});
		}, 300);
	},
});