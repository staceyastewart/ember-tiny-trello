import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    sendDataToController() {
      if(this.get("text")){ //if the user entered data
        if(this.get("listId")){
          // adding item to list
          this.attrs.newItem(this.get("listId"), this.get("text"))
        } else {
          // adding a list
          this.sendAction("newList", this.get("text"));
        }
          this.set("text", "")
          this.sendAction("toggleIsAdding")
        } else { //user did not enter data
          alert("You did not enter any text!")
        }
      }
  }
});
