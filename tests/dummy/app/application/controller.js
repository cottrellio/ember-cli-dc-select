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
      isDisabled: false
    },
    {
      label: 'Test 2',
      value: 2,
      isDisabled: false
    },
    {
      label: 'Test 3',
      value: 3,
      isDisabled: true
    },
    {
      label: 'Test 4',
      value: 4,
      isDisabled: false
    },
    {
      label: 'Test 5',
      value: 5,
      isDisabled: false
    }
  ]),

  actions: {

    selectionDidChange(value) {
      let selected = this.get('options').findBy('value', +value);
      this.set('selectedOption', selected);
    }

  }

});