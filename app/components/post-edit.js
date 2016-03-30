import Ember from 'ember';

export default Ember.Component.extend({
  editable: false,
  actions: {
    showEdit() {
      this.set('editable', true);
    },
    update() {
      var params = {
        title: this.get('title') ? this.get('title') : "",
        author: this.get('author') ? this.get('author') : "",
        body: this.get('body') ? this.get('body') : "",
        image: this.get('image') ? this.get('image') : ""
      }
      this.set('editable', false);               
      this.sendAction('edit', this.post, params);
    }
  }
});
