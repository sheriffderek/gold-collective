import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNames: ['component'],
  min: '20px', // defaults in case there is nothing passed in
  max: '40px',
  compressor: 1,
  didInsertElement() {
    const $thisComponent = this.$();
    $thisComponent.fitText( this.get('compressor'), {
      minFontSize: this.get('min'),
      maxFontSize: this.get('max')
    });
  }
});
