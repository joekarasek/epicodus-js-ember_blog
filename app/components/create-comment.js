import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save() {
      if (this.get('author')==='' || this.get('body')==='') {
        alert('Please fill in all fields.');
      } else {
        var params = {
          author: this.get('author'),
          body: this.get('body'),
          post: this.get('post')
        };
        this.sendAction('submitCommment', params);
      }
    }
  }
});
