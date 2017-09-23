import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    sendDataToController(listId, item) {
      // alert(listId)
      // alert(item)
      console.log(listId)
      console.log(item)
      this.sendAction('newItem', listId, item);
    }
  }
});
