import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    sendDataToController() {
      console.log("form controller")
      console.log(this.get("text"))
      console.log(this.get("listId"))
      if(this.get("listId")){
        this.attrs.newItem(this.get("listId"), this.get("text"))
      } else {
        this.sendAction("newList", this.get("text"));
      }
      this.set("text", "")
      // this.sendAction("toggleIsAdding")
    }
  }
});
