import Ember from 'ember';

export default Ember.Controller.extend({

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

});