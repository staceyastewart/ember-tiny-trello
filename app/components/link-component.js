import Ember from 'ember';

export default Ember.Component.extend({
  isAdding: false,
  actions: {
    toggleIsAdding(){
      if(this.get("isAdding") === false){
        this.set('isAdding', true)
      } else {
        this.set('isAdding', false)
      }
    }
  }
});
