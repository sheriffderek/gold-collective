import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'section',
  classNames: ['container', 'content', 'about', 'editorial', 'fade-in'],

  didInsertElement() {
    const $thisComponent = this.$();
    // $thisComponent.velocity({
    //   opacity: 1,
    // }, {
    //   delay: 500,
    //   duration: 400,
    // });
  },
});