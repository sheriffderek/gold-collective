import Ember from 'ember';

export default Ember.Route.extend({

  activate() {
    this._super();
    window.scrollTo(0,0);
  },

  model() {
    // let reviews = this.store.findAll('review');
    // console.log(reviews);
    // return reviews;
    var data = Ember.RSVP.hash({
      press: this.store.peekRecord('page', 217),
      reviews: this.store.findAll('review'),
    });
    console.log(data);
    return data;
  },

});