import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    newList() {
      this.get("model").pushObject({
        id: (this.get("model").length + 1),
        title: this.get("text"),
        items: []
      })
      this.set("text", "")
    },
    newItem(listId, item) {
      // alert(listId)
      // alert(this.get("item"))
      // alert(this.get("item"))
      // alert("hitting")
      this.get("model")[listId-1].items.addObject(
        item
        // this.get("item")
      )
      this.set("item", "")
    }
  }
});
