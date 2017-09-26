import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    newList(input) {
      this.get("model").pushObject({
        id: (this.get("model").length + 1),
        title: input,
        items: []
      })
      this.set("text", "")
    },
    newItem(listId, item) {
      this.get("model")[listId-1].items.pushObject(
        {id: this.get("model")[listId-1].items.length-1,
        title: item,
        description: "Enter your long description for this task here."}
      )
    },
    deleteItem(listId, itemId){
      let itemToDeleteIndex
      // first, find location of this item in current array, then delete
      for (var i = 0; i < this.get("model")[listId-1].items.length; i++) {
        if (this.get("model")[listId-1].items[i].id === itemId){
          itemToDeleteIndex = i
        }
      }
      this.get("model")[listId-1].items.removeAt(itemToDeleteIndex)
    }
  }
});
