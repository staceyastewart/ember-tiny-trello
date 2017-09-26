import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    newList(input) {
      console.log("hitting new list")
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
    editItem(listId, id, title, description){
      console.log("edit function")
      console.log(this.get("model"))
      console.log(this.get("model")[listId-1])
      console.log(this.get("model")[listId-1].items[id-1])
      console.log(listId)
      this.get("model")[listId-1].items[id-1] = {
        id: id,
        title: title,
        description: description
      }
      console.log(this.get("model")[listId-1].items[id-1])
    }
  }
});
