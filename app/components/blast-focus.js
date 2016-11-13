import Ember from 'ember';


export default Ember.Component.extend({
  classNames: ['blast-focus'],
  didInsertElement() {
    this.$().children().blast({
      delimiter: 'word'
    });
  }
});
