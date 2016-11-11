import Ember from 'ember';


export default Ember.Component.extend({
  classNames: ['blast-focus'],
  didInsertElement() {
    this.$().find('.blast-focus').blast({
      delimiter: 'word'
    });
  }
});
