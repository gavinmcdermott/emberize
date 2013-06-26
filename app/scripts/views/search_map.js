Ruby.SearchMapView = Ember.View.extend({
    tagName: 'section',
    classNames: ['map'],
    attributeBindings: ['style'],

    map: null,
    latitudeBinding: '37.0',
    longitudeBinding: '-122.0',

    didInsertElement: function() {
        var mapStyle = [
                  {
                        featureType: "poi",
                        elementType: "labels",
                        stylers: [
                          { visibility: "off" }
                        ]
                  },
                       {
                        featureType: "landscape",
                        elementType: "labels",
                        stylers: [
                          { visibility: "off" }
                        ]
                  }
                ];


        var mapOptions = {





            zoom: 12,
            center: new google.maps.LatLng("37.0", "-122.0"),
            minZoom : 12,
            maxZoom : 19,
            panControl:false,
            mapTypeControlOptions: {
                mapTypeIds: ['mystyle']
            },
            mapTypeId: 'mystyle',
            mapTypeControl:false,
            streetViewControl: false,
            keyboardShortcuts: false



        };
        var map = new google.maps.Map(this.$().get(0),mapOptions);
        map.mapTypes.set('mystyle', new google.maps.StyledMapType(mapStyle, { name: 'Map' }));
        this.set('map',map); //save for future updations
//        this.$().css({ width: $(window).width(), height: $(window).height() });
    }

//    reRenderMap : function(){
//        var newLoc = new google.maps.LatLng(this.get('latitude'), this.get('longitude'));
//        this.get('map').setCenter(newLoc);
//        var marker = new google.maps.Marker({
//            position: new google.maps.LatLng(this.get('latitude'), this.get('longitude')),
//            map: this.get('map')
//        });
//    }.observes('latitude','longitude')
});