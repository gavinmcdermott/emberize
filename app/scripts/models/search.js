var attr = Ember.attr;

Ruby.Search = Ember.Model.extend({
    zoomLevel: attr(Number),
    beds: attr(Number),
    itemId: attr(Number),
    typeId: attr(Number),
    latitude: attr(Number),
    longitude: attr(Number)
});

Ruby.Search.reopenClass({
    find: function() {
        $.get('http://pro.livelovely.com/frontendtest/yolo', function(){
            console.log('hit it');
        })
        .done(function() { console.log('full success')})
    },
    toDict: function() {
        return {
            zoomLevel: '5'
        }
    }
});

Ruby.Listing = Ember.Model.extend({
    price: '125'
});

Ruby.Listing.reopenClass({
    find: function(searchObj) {
        console.log(searchObj);
    }
});
