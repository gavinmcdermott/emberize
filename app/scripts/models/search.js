var attr = Ember.attr;

Ruby.Search = Ember.Model.extend({
    zoomLevel: attr(Number),
    beds: attr(Number),
    itemId: attr(Number),
    typeId: attr(Number),
    latitude: attr(Number),
    longitude: attr(Number)
});