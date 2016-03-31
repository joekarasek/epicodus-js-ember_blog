import Ember from 'ember';

export default Ember.Component.extend({
  editComment: false,
  actions: {
    deleteComment(comment) {
      this.sendAction('deleteComment', comment);
    },
    showUpdateForm() {
      this.set('editComment', true);
    },
    update(comment) {
      var post = comment.get('post');
      var params = {
        author: this.get('commentAuthor'),
        body: this.get('body'),
        post: post
      };
      this.set('editComment', false);
      this.sendAction('updateComment', params, comment);
    }
  }
});
