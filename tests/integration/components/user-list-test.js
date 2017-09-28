import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

let list = Ember.Object.create({
  id: 1,
  title: "Default Board",
  items: [
    {id: 1,
    title: "Most Important Task",
    description: "Hire Stacey!"}]
})

moduleForComponent('user-list', 'Integration | Component | user list', {
  integration: true
});

test('it renders', function(assert) {
  this.set("list", list)
  this.on("newItem", function() {
    return
  })
  this.on("deleteItem", function() {
    return
  })

  this.render(hbs`{{user-list title=list.title items=list.items listId=list.id newItem=(action "newItem") deleteItem=(action "deleteItem") }}`);

  assert.equal(this.$(".list-title").text().trim(), 'Default Board');
});
