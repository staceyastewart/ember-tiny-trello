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
      this.get("model")[listId-1].items.addObject(
        item
      )
    }
  }
});
