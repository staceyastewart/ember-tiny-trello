import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    closeModal(){
      this.set("modalOpen", false)
    },
    confirmDelete() {
      let confirmationOfDelete = confirm('Are you sure you want to delete this item?');
      if (confirmationOfDelete) {
        this.sendAction("deleteItem", this.get("listId"), this.get("item.id"))
        this.toggleProperty("modalOpen")
      }
    }
  }
});
