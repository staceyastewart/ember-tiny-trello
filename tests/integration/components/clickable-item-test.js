import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

let item = Ember.Object.create({
      id: 1,
      title: "Title",
      description: "Long description"
})

moduleForComponent('clickable-item', 'Integration | Component | clickable item', {
  integration: true
});

test("it renders", function(assert) {
  this.set("thing", item)
  this.set("list", "1")
  this.set("modalOpen", "true")
  // Handle any actions with this.on('myAction', function(val) { ... });
  this.on("myAction", function() {
    return
  })
  this.render(hbs`{{clickable-item item=thing listId=list deleteItem=myAction modalOpen=modalOpen}}`);
  assert.equal(this.$(".item-title").text().trim(), 'Title');
});
