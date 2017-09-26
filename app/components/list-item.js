import Ember from 'ember';

export default Ember.Component.extend({
  modalOpen: false,
  actions: {
    openModal() {
      console.log("this")
      console.log(this)
      console.log(this.get("item"))
      this.set('modalOpen', true);
    }
  }
});
