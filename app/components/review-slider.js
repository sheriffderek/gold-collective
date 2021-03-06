import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'ul',
  classNames: ['review-list', 'flick'],

  didInsertElement() {
    this.$().flickity({
      imagesLoaded: true,
      wrapAround: true,
      autoPlay: 5500,
    });
  },

  willDestroyElement() {
    this.$().flickity('destroy');
  },

});
