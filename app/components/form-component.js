import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    sendDataToController() {
      console.log(this.get("text"))
      console.log(this.get("listId"))
      console.log(this.get("itemId"))
      if(this.get("listId")){
          // adding item to list
          this.attrs.newItem(this.get("listId"), this.get("text"))
      } else {
        // adding a list
        this.sendAction("newList", this.get("text"));
      }
        this.set("text", "")
        this.sendAction("toggleIsAdding")
    },
    editEachItem(){
      // break out edit functionality into its own function
    }
  }
});
