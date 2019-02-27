<template>
  <div id="explore_main">

    <!-- layer tree -->
    <!-- <ExploreLayerTree v-if="showExploreLayerTree" v-bind:parentMap="map"/> -->
    


    <!--  -->

    <!-- <div class="alert alert-primary" role="alert">
      Um simples alerta primary. Olha só!
    </div> -->

    <!--  -->

    <!-- <div>
      <b-button v-b-toggle.collapse1 variant="primary">Toggle Collapse</b-button>
      <b-collapse id="collapse1" class="mt-2">
        <b-card>

          <p class="card-text">Collapse contents Here</p>

          <b-button v-b-toggle.collapse1_inner size="sm">Toggle Inner Collapse</b-button>
          <b-collapse id="collapse1_inner" class="mt-2">
            <b-card>Hello!</b-card>
          </b-collapse>

        </b-card>
      </b-collapse>
    </div> -->

    <!-- <div>
      <b-card no-body>
        <b-tabs pills card vertical>
          <b-tab title="Tab 1" active>Tab Contents 1</b-tab>
          <b-tab title="Tab 2">Tab Contents 2</b-tab>
          <b-tab title="Tab 3">Tab Contents 3</b-tab>
        </b-tabs>
      </b-card>
    </div> -->

    <!--  -->

    <!-- <div id="left-vertical-menu">
      <b-nav vertical class="w-25">
        <b-nav-item active>Active</b-nav-item>
        <b-nav-item>Link</b-nav-item>
        <b-nav-item>Another Link</b-nav-item>
        <b-nav-item disabled>Disabled</b-nav-item>
      </b-nav>
    </div> -->

    <!--  -->

    <div id="layer-tree2">

      <!-- layer tree -->
      <b-card-group id="id1" deck>
        <b-card title="Layers:" header-tag="header" footer-tag="footer">
          <!-- <h6 slot="header" class="mb-0">My header slot</h6> -->
          <b-card-text>

            <div class="custom-control custom-switch">
              <input type="checkbox" class="custom-control-input" id="customSwitches">
              <label class="custom-control-label" for="customSwitches">OpenStreetMap</label>
            </div>
            <div class="custom-control custom-switch">
              <input type="checkbox" class="custom-control-input" id="customSwitches1" checked="">
              <label class="custom-control-label" for="customSwitches1">Google Satellite</label>
            </div>

            </b-card-text>
          <!-- <b-button href="#" variant="primary">Go somewhere</b-button> -->
          <!-- <em slot="footer"> my footer Slot</em> -->
        </b-card>
      </b-card-group>

    </div>

    <!-- where the map is ploted -->
    <div id="map" class="map"></div>

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
// import ExploreLayerTree from '@/components/Explore/LayerTree.vue'

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

      // console.log('\n\n this.map: ', this.map, '\n\n')

      // var layerTree = new Overlay({
      //   element: document.getElementById('layer-tree'),
      //   position: fromLonLat([0, 0], 'EPSG:4326', 'EPSG:3857')
      // })

      // this.map.addOverlay(layerTree)

      // this.showExploreLayerTree = true
      // console.log('\n>>> Showing the layer tree \n')
    }
  },
  mounted: function () {
    this.initMap()
  }
  // mounted () {
  //   this.$nextTick(function () {
  //     initMap()
  //   })
  // }
  // components: {
  //   ExploreLayerTree
  // }
}
</script>

<style>
#map {
  height: calc(100vh - 60px); /* 100% of the viewport height - navbar height */
}

#left-vertical-menu{
  width: 100px;
  /* position: absolute; */
}

#id1{
  position: absolute;
}

#layer-tree2 {
  width: 200px;
  position: relative;
  /* overflow: auto; */
}
</style>
