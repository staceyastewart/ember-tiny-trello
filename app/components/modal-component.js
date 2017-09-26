import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    closeModal(){
      this.set("modalOpen", false)
    },
    saveEditedItem(){
      // save item from form once edited
      // this.sendAction("rerenderModal")
    }
  }
});
