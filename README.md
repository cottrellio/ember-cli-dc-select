# Ember-cli-dc-select

A simple select component for Ember.

## Example Use

_controller.js_
```
selectedOption: {
  label: 'Test 2',
  value: 2
},

options: Ember.A([
  {
    label: 'Test 1',
    value: 1,
    disabled: false
  },
  {
    label: 'Test 2',
    value: 2,
    disabled: false
  },
  {
    label: 'Test 3',
    value: 3,
    disabled: true
  },
  {
    label: 'Test 4',
    value: 4,
    disabled: false
  },
  {
    label: 'Test 5',
    value: 5,
    disabled: false
  }
]),

actions: {

  selectionDidChange(value) {
    let selected = this.get('options').findBy('value', +value);
    this.set('selectedOption', selected);
  }

}
```

_template.hbs_
```
{{dc-select onChange=(action "selectionDidChange")
            selectedOption=(readonly selectedOption)
            options=(readonly options)}}
```