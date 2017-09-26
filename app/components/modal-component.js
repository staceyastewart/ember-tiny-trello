import Ember from 'ember';

export default Ember.Component.extend({
  modalOpen: false,
  actions: {
    closeModal(){
      this.set("modalOpen", false)
    },
    saveEditedItem(){
      // save item from form once edited
      // this.sendAction("rerenderModal")
    },
    confirmDelete() {
      const confirmationOfDelete = confirm('Are you sure you want to delete this item?');
      if (confirmationOfDelete) {
        this.sendAction("deleteItem", this.get("listId"), this.get("item.id"))
        this.send('closeModal');
      }
    }
  }
});
