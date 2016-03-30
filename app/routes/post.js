import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('post', params.post_id);
  },
  actions: {
    edit(post, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!=="") {
          post.set(key,params[key]);
        }
      });
      post.save();
      this.transitionTo('post');
    },
    delete(post) {
      if (confirm('Are you sure you want to delete this post?')) {
        post.destroyRecord();
      }
      this.transitionTo('index');
    }
  }
});