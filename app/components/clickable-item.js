import Ember from 'ember';

export default Ember.Component.extend({
  modalOpen: false,
  actions: {
    openModal() {
      this.toggleProperty("modalOpen")
    }
  }
});
