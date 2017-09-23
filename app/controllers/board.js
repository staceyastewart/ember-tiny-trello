import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    newList() {
      // alert(this.get("text"))
      this.get("model").pushObject({
        id: (this.get("model").length + 1),
        title: this.get("text"),
        items: []
      })
      this.set("text", "")
    },
    newItem() {
      alert(this.get("model").length)
      // alert(this.get("model")[0].items)
      this.get("model")[0].items.addObject(
        this.get("item")
      )
      this.set("item", "")
    }
  }
});
