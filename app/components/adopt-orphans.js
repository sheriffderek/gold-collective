import Ember from 'ember';

const $ = Ember.$; // $revisit

export default Ember.Component.extend({
  tagName: 'div',
  classNames: 'adopt-orphans',
  didInsertElement() {
    this.$('h1,h2,h3,li,p').each(function() {
      $(this).html($(this).html().replace(/\s([^\s<]+)\s*$/,'&nbsp;$1'));
    });
  }
});
