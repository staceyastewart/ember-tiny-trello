import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    newList() {
      alert(this.get("text"))
    }
  }
});
