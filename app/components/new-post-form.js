import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save() {
      if (this.get('title')=='' || this.get('author')=='' || this.get('body')=='') {
        alert('Please fill in all fields (except image).');
      } else {
        var params = {
          title: this.get('title'),
          author: this.get('author'),
          body: this.get('body'),
          image: this.get('image') ? this.get('image') : ""
        };
        this.sendAction('submitPost', params);
      }
    }
  }
});
