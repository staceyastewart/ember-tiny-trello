import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('form-component', 'Integration | Component | form component', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });
  this.set("value", "sample")
  this.set("listId", "1")
  this.set("itemId", "1")
  this.set("add", "true")

  this.render(hbs`{{form-component}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#form-component}}
      template block text
    {{/form-component}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
