import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let reviews = this.store.findAll('review');
    console.log(reviews);
    return reviews;
  },
});