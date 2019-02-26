<template>
  <div id="layer-tree">

    <!-- layer tree -->
    <b-card-group deck>
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
</template>

<script>
import Overlay from 'ol/Overlay.js'
import { fromLonLat } from 'ol/proj.js'

export default {
  props: ['parentMap'],
  methods: {
    addLayerTreeOnMap: function () {
      var layerTree = new Overlay({
        element: document.getElementById('layer-tree'),
        stopEvent: false,
        // offset:[0,0],
        autoPan: true,
        position: fromLonLat([0, 0], 'EPSG:4326', 'EPSG:3857'),
        positioning: 'top-right',
        autoPanAnimation: {
          duration: 250
        }
      })

      this.parentMap.addOverlay(layerTree)

      console.log('\n\n this.parentMap: ', this.parentMap, '\n\n')

      // overlayGroup.getLayers().forEach(sublayer => {
      //   console.log('\n sublayer: ', sublayer, '\n')
      // })
    }
  },
  created: function () {
    this.addLayerTreeOnMap()
  }
}
</script>

<style>
#layer-tree {
  width: 200px;
  position: absolute;
  /* overflow: auto; */
}
</style>
