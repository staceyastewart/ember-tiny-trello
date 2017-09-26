import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    sendDataToController() {
      console.log(this.get("text"))
      console.log(this.get("listId"))
      console.log(this.get("itemId"))
      // not hitting first if when the item is added to the page
      if(this.get("listId")){
        if(this.get("itemId")){
          // edit
          console.log("EDITING ITEM")
          // set if for title and for description
          this.sendAction("editItem", this.get("listId"), this.get("itemId"), this.get("text"), "description")
        } else {
          // adding item to list
          console.log("why are you trying to add a list")
          this.attrs.newItem(this.get("listId"), this.get("text"))
        }
      } else {
        // adding a list
        this.sendAction("newList", this.get("text"));
      }
      this.set("text", "")
      this.sendAction("toggleIsAdding")
    },
    editEachItem(){

    }
  }
});
