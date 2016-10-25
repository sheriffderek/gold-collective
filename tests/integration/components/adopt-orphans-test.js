import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('adopt-orphans', 'Integration | Component | adopt orphans', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{adopt-orphans}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#adopt-orphans}}
      template block text
    {{/adopt-orphans}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
