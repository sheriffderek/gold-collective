import Ember from 'ember';
import EmberLoadRemover from 'ember-load/components/ember-load-remover';
import layout from '../templates/components/ember-load-remover';

const { inject /*, Component, $*/ } = Ember;

export default EmberLoadRemover.extend({
  layout,
  'ember-load-config': inject.service(),
  didInsertElement() {
    this._super(...arguments);
    this.removeLoadingIndicator();
  },
  /**
   * remove the loading indicator. By default this
   * removes the first element with the '.ember-load-indicator'
   * found CSS class from the DOM
   * @public
   */
  removeLoadingIndicator() {
    let loadingIndicatorClass =
      this.get('ember-load-config.loadingIndicatorClass') ||
      'ember-load-indicator';

    Ember.$(`.${loadingIndicatorClass}`).fadeOut(300, function() {
      Ember.$(this).remove();
    });
  }
});




/*
import EmberLoadRemover from 'ember-load/components/ember-load-remover';

export default EmberLoadRemover.extend({
  removeLoadingIndicator() {
    // Perform default behavior
    this._super(...arguments);
    // Do something custom in addition to it
    console.log('Just so you know, your app has loaded. 🚀');
  }
});
*/