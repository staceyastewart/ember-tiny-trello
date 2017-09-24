import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    sendDataToController(listId, item) {
      this.get("newItem")(listId, item)
      // this.sendAction('newItem', listId, item);
      // this.set("item", "")
    }
  }
});
