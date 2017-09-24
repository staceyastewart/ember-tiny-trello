import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    sendDataToController() {
      console.log("form controller")
      console.log(this.get("text"))
      let input = this.get("text")
      this.sendAction("newList", "hello");
      // this.set("text", "")
      // this.send("toggleIsAdding")
    }
  }
});
