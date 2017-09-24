import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    sendDataToController() {
      this.sendAction('addInput');
    }
  }
});
