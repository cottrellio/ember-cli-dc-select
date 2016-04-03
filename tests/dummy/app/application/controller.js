import Ember from 'ember';

export default Ember.Controller.extend({

  selectedOption: null,

  options: Ember.A([
    {
      label: 'Test 1',
      value: 1
    },
    {
      label: 'Test 2',
      value: 2
    },
    {
      label: 'Test 3',
      value: 3
    }
  ]),

  actions: {

    selectionDidChange(value) {
      let selected = this.get('options').findBy('value', +value);
      this.set('selectedOption', selected);
    }

  }

});