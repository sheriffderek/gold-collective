import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'section',
  classNames: ['container', 'about', 'editorial', 'fade-in'],

  didRender() {
    const $thisComponent = this.$();
    $thisComponent.velocity({
      opacity: 1,
    }, {
      delay: 500,
      duration: 400,
    });
  }
});
