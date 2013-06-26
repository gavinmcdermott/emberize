Ruby.SearchController = Ember.ObjectController.extend({
    model: function() {
        return Ruby.Search.find();
    }
});