import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    sendDataToController() {
      console.log("form controller")
      console.log(this.get("text"))
      this.attrs.newList(this.get("text"))
      // let input = this.get("text")
      // this.sendAction("newList", input);
      this.set("text", "")
      // this.send("toggleIsAdding")
    }
  }
});
