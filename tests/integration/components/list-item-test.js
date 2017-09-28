import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

let item = Ember.Object.create({
      id: 1,
      title: "Title",
      description: "Long description"
})

moduleForComponent('list-item', 'Integration | Component | list item', {
  integration: true
});

test('it renders', function(assert) {
  this.set("items", item)
  this.set("listId", "1")
  this.on("deleteItem", function() {
    return
  })

  this.render(hbs`{{list-item items=items listId=listId deleteItem=(action "deleteItem")}}`);

  assert.equal(this.get("items.id"), "1");
  assert.equal(this.get("items.title"), "Title");
  assert.equal(this.get("items.description"), "Long description");
});
