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
        description: "enter your description"}
      )
    }
  }
});
