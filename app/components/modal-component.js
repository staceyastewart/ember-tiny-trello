import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    openModal() {
      this.set('modalOpen', true);
    },
    closeModal(){
      this.set("modalOpen", false)
    },
    toggleModal() {
      this.toggleProperty('modalOpen');
    }
  }
});
