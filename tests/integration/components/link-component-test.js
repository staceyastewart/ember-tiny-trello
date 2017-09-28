import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('link-component', 'Integration | Component | link component', {
  integration: true
});

test('it renders', function(assert) {
  this.on("newItem", function() {
    return
  })
  this.on("newList", function() {
    return
  })

  this.render(hbs`{{link-component newItem="newItem" linkTest="Add a list" newList=(action "newList")}}`);

  assert.equal(this.$().text().trim(), '');

});
