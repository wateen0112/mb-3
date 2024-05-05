<template>
  <div>


    <div class="location-picker tw-mt-5 tw-min-h-[200px] tw-rounded-2xl overflow-hidden tw-relative">
      <div v-if="!changable" class="tw-z-30 tw-absolute tw-w-full tw-h-full tw-bg-opacity-0 tw-bg-red-500 tw-top-0 tw-left-0"></div>
      <div class="map-container" ref="map"></div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    searchPlaceholder:{
      type: String,
      default:''
    },
    apiKey: {
      type: String,
      default: 'AIzaSyDigy7JFuzq8xNoKdQf8hsYWL3bi-QPfZA'
    },
    defaultLocation: {
      type: Object,
      default: () => ({ lat: 25.276987, lng: 55.296249 })
    },
    zoom: {
      type: Number,
      default: 5
    },
    countryCode : {
      type:String , 
      default :'uae'
    },
    withCoverageArea: {
      type: Boolean,
      default: false
    },
    changable: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      map: null,
      marker: null,
      searchTerm: '',
      autocomplete: null // Add this line
    };
  },
  mounted() {
 
    this.loadMap();
  

      // When the user selects an address from the dropdown, populate the address field and map
    
    // this.searchLocation()
  },
  methods: {
    loadMap() {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.async = true;
      script.defer = true;
      script.src = `https://maps.googleapis.com/maps/api/js?libraries=places&key=${this.apiKey}&callback=initMap`;
 
      window.initMap = this.initMap;
      document.head.appendChild(script);

   
    },
    initMap() {
      const latitude = parseFloat(this.defaultLocation.lat);
      const longitude = parseFloat(this.defaultLocation.lng);

      if (!isNaN(latitude) && !isNaN(longitude)) {
        this.map = new google.maps.Map(this.$refs.map, {
       
          zoom: this.zoom,
          disableDefaultUI: true
        });

        this.marker = new google.maps.Marker({
          position: { lat: latitude, lng: longitude },
          map: this.map
        });
        const geocoder = new google.maps.Geocoder();
      geocoder.geocode({ address: this.countryCode}, (results, status) => {
        if (status === 'OK' && results[0]) {
          this.map.setCenter(results[0].geometry.location);
          this.marker.setPosition(results[0].geometry.location);
          this.$emit("location-selected", results[0].geometry.location.toJSON());
        } else {
          console.error('Geocode was not successful for the following reason:', status);
        }
      });
      } else {
        console.error('Invalid latitude or longitude:', latitude, longitude);
      }

      if (this.changable) {
        this.map.addListener("click", (event) => {
          this.marker.setPosition(event.latLng);
          this.$emit("location-selected", event.latLng.toJSON());
        });
      }

    },
    searchLocation() {
      
      const geocoder = new google.maps.Geocoder();
      geocoder.geocode({ address: this.searchTerm }, (results, status) => {
        if (status === 'OK' && results[0]) {
          this.map.setCenter(results[0].geometry.location);
          this.marker.setPosition(results[0].geometry.location);
          this.$emit("location-selected", results[0].geometry.location.toJSON());
        } else {
          console.error('Geocode was not successful for the following reason:', status);
        }
      });
     
    }
  }
};
</script>

<style>
.location-picker {
  position: relative;
}

.map-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
