Ruby.SearchMapView = Ember.View.extend({
    tagName: 'section',
    classNames: ['map'],

    map: null,
    latitudeBinding: 'controller.content.geometry.lat',
    longitudeBinding: 'controller.content.geometry.lng',

    didInsertElement: function() {
            var mapOptions = {
                center: new google.maps.LatLng(0, 0),
                zoom: 16,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                mapTypeControl: false
            };
            var map = new google.maps.Map(this.$().get(0),mapOptions);
            this.set('map',map); //save for future updations
            this.$().css({ width: "550px", height: "400px" });
    },

    reRenderMap : function(){
        var newLoc = new google.maps.LatLng(this.get('latitude'), this.get('longitude'));
        this.get('map').setCenter(newLoc);
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(this.get('latitude'), this.get('longitude')),
            map: this.get('map')
        });
    }.observes('latitude','longitude')
});