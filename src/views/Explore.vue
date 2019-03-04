<template>
  <div id="explore_main">

    <explore-left-side-bar v-bind:olmap="olmap"/>

    <!-- where the map is ploted -->
    <div id="map" class="olMap"></div>

  </div>
</template>

<script>
import $ from 'jquery'

import 'ol/ol.css'
import Map from 'ol/Map'
import View from 'ol/View'
import Overlay from 'ol/Overlay.js'
import { fromLonLat } from 'ol/proj.js'

// @ is an alias to /src
import { layerGroupBaseMap } from '@/assets/js/Explorer/BaseLayer'
import ExploreLeftSideBar from '@/components/Explore/LeftSideBar.vue'

export default {
  name: 'Explore',
  data () {
    return {
        olmap: {}
    }
  },
  methods: {
    initComponent: function () {
      // eslint-disable-next-line
      this.olmap = new Map({
        target: 'map',
        layers: [
          layerGroupBaseMap
        ],
        view: new View({
          projection: 'EPSG:4326',
          center: [0, 0],
          zoom: 5
        })
      })
    }
  },
  mounted: function () {
    this.initComponent()
  },
  // mounted () {
  //   this.$nextTick(function () {
  //     initMap()
  //   })
  // }
  components: {
    ExploreLeftSideBar
  }
}
</script>

<style>
/* these CSS are mine */
#map {
  /*height: calc(100vh - 60px); / * 100% of the viewport height - navbar height */
  height: 100%;
  width: 100%;
  margin: 0;
}
</style>
