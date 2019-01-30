import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'ul',
  classNames: ['image-list'],

  didInsertElement() {
    this.$().flickity({
      imagesLoaded: true,
      wrapAround: true,
      autoPlay: 5500,
    });
    // this.$().find('.image').css( 'width',  $(window).width() );
    // this.$().find('.image').css( 'height', $(window).height() );
    // this.$().css( 'width', $(window).width() );
    // this.$().css( 'height', $(window).height() );
  },

  willDestroyElement() {
    this.$().flickity('destroy');
  },

});
