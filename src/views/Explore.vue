<template>
  <div id="explore_main">
    <!-- where the map is ploted -->
    <div id="map" class="map"></div>
  </div>
</template>

<script>
import 'ol/ol.css'
import Map from 'ol/Map'
import View from 'ol/View'
import TileLayer from 'ol/layer/Tile'
import XYZ from 'ol/source/XYZ'

export default {
  name: 'Explore',

  data () {
    return {
      // clipped: false,
      // drawer: true,
      // fixed: false,
      // items: [{
      //   icon: 'bubble_chart',
      //   title: 'Inspire'
      // }],
      // miniVariant: false,
      // right: true,
      // rightDrawer: false,
      // title: 'Vuetify.js'
    }
  },
  // method () {
  // },
  mounted () {
    this.$nextTick(function () {
      initMap()
    })
  }
}

function initMap () {
  // eslint-disable-next-line
  var map = new Map({
    target: 'map',
    layers: [
      new TileLayer({
        source: new XYZ({
          url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        })
      })
    ],
    view: new View({
      center: [0, 0],
      zoom: 5
    })
  })
};
</script>

<style>
#map {
  height: calc(100vh - 60px); /* 100% of the viewport height - navbar height */
}
</style>
