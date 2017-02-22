import Ember from 'ember';

export default Ember.Component.extend({
  isOpen: undefined,
  actions: {
    toggle() {
      this.toggleProperty('isOpen');
      console.log( this.get('isOpen') );
    }
  },
  init() {
    this.get('resizeService').on('didResize', (event) => {
      if ( window.innerWidth > 970 ) {
        this.set('isOpen', true);
      } else {
        this.set('isOpen', false)
      }
    }).trigger('didResize');
    this._super(...arguments);
  },
});
