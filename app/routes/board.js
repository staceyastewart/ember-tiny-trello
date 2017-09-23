import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return [
      {
        id: 1,
        title: "Default Board",
        items: ["first task item"]
      }
    ]
  }
});
