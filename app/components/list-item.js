import Ember from 'ember';

export default Ember.Component.extend({
  // isShowingModal: false,
  modalOpen: false,
  actions: {
    openModal() {
      this.set('modalOpen', true);
    }
  }
});
