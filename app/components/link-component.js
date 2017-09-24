import Ember from 'ember';

export default Ember.Component.extend({
  isAdding: false,
  actions: {
    sendDataToController() {
      let input = this.get("text")
      this.sendAction('newList', input);
      this.set("text", "")
      this.send("toggleIsAdding")
    },
    toggleIsAdding(){
      if(this.get("isAdding") === false){
        this.set('isAdding', true)
      } else {
        this.set('isAdding', false)
      }
    }
  }
});
