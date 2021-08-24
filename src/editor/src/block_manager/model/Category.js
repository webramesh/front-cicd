import Backbone from 'backbone';

export default Backbone.Model.extend({
  defaults: {
    id: '',
    label: '',
    open: false,
    attributes: {}
  }
});
