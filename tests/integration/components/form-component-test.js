import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

let items = Ember.Object.create({
      id: 1,
      title: "Title",
      description: "Long description"
})

moduleForComponent('form-component', 'Integration | Component | form component', {
  integration: true
});

test('it renders', function(assert) {
  this.set("item", items)
  this.set("listId", "1")
  // this.set("description", item.description)

  this.render(hbs`{{form-component text=item.description listId=listId itemId=item.id}}`);

  assert.equal(this.get("listId"), "1");
  assert.equal(this.get("item.id"), "1");
  assert.equal(this.get("item.description"), "Long description");
});
