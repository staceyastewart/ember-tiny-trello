import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    newList(input) {
      console.log("hitting")
      this.get("model").pushObject({
        id: (this.get("model").length + 1),
        title: input,
        items: []
      })
      this.set("text", "")
    },
    newItem(listId, item) {
      this.get("model")[listId-1].items.addObject(
        item
      )
    },
    addInput(){
      console.log("HERE")
      this.get("model").pushObject({
        id: (this.get("model").length + 1),
        title: "User Added List",
        items: []
      })
    }
  }
});
