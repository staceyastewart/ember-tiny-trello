import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    newList() {
      // alert(this.get("text"))
      this.get("model").pushObject({
        title: this.get("text")
      })
      this.set("text", "")
    }
  }
});
