import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deleteComment(comment) {
      this.sendAction('deleteComment', comment);
    },
    updateComment(params, comment) {
      this.sendAction('updateComment', params, comment);
    }
  }
});
