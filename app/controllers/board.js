import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    newList() {
      this.get("model").pushObject({
        title: this.get("text")
      })
    }
  }
});
