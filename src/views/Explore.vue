<template>
  <div id="explore_main">

    <!-- where the map is ploted -->
    <div id="map" class="map"></div>

    <!-- layer tree -->
    <ExploreLayerTree v-bind:parentMap="map" v-if="showExploreLayerTree"/>

  </div>
</template>

<script>
import 'ol/ol.css'
import Map from 'ol/Map'
import View from 'ol/View'

import Overlay from 'ol/Overlay.js'
import { fromLonLat } from 'ol/proj.js'

// @ is an alias to /src
import { layerGroupBaseMap } from '@/assets/js/Explorer/Layer'
import ExploreLayerTree from '@/components/Explore/LayerTree.vue'

export default {
  name: 'Explore',

  data () {
    return {
      map: {},
      showExploreLayerTree: false
    }
  },
  methods: {
    initMap: function () {
      // eslint-disable-next-line
      this.map = new Map({
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

      console.log('\n\n this.map: ', this.map, '\n\n')

      var layerTree = new Overlay({
        element: document.getElementById('layer-tree'),
        position: fromLonLat([0, 0], 'EPSG:4326', 'EPSG:3857')
      })

      this.map.addOverlay(layerTree)

      this.showExploreLayerTree = true
      console.log('\n>>> Showing the layer tree \n')
    }
  },
  mounted: function () {
    this.initMap()
  },
  // mounted () {
  //   this.$nextTick(function () {
  //     initMap()
  //   })
  // }
  components: {
    ExploreLayerTree
  }
}
</script>

<style>
#map {
  height: calc(100vh - 60px); /* 100% of the viewport height - navbar height */
}
</style>
