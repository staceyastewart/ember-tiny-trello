import Ember from 'ember';

export default Ember.Route.extend({
  // isShowingModal: false,
  model(){
    return [
      {
        id: 1,
        title: "Default Board",
        items: [
          {id: 1,
          title: "Most Important Task",
          description: "Hire Stacey!"}
      ]
      }
    ]
  }
});
