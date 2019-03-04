<template>
    <!-- layer tree -->
    <div id="layer-tree">
      <b-card-group id="layer-menu" deck>
        <b-card title="Layers:" header-tag="header" footer-tag="footer">
          <!-- <h6 slot="header" class="mb-0">My header slot</h6> -->
          <b-card-text>

            <div v-for="layer in layers" v-bind:key="layer.id" class="custom-control custom-switch">
              <input type="radio"
                v-on:change="changeLayerVisibility($event, layer)"
                v-model="default_radio_value"
                v-bind:value="layer.id"
                v-bind:id="layer.id"
                name="radio-group-base-layers"
                class="custom-control-input">
              <label v-bind:for="layer.id" class="custom-control-label">
                {{ layer.name }}
              </label>
            </div>

            </b-card-text>
          <!-- <b-button href="#" variant="primary">Go somewhere</b-button> -->
          <!-- <em slot="footer"> my footer Slot</em> -->
        </b-card>
      </b-card-group>
    </div>
</template>

<script>
import { layerGroupBaseMap } from '@/assets/js/Explorer/BaseLayer'

export default {
  name: 'LeftSideBarLayerTree',
  props: ['olmap'],
  data () {
    return {
      default_radio_value: 'osm',
      layerGroupBaseMap,
      layers: [
        {
          id: 'osm',
          name: 'OpenStreetMap'
        },
        {
          id: 'google-sattelite',
          name: 'Google Satellite'
        }
      ]
    }
  },
  methods: {
    initComponent: function () {
      // iterate on list of layers to show the default base layer on the map
      this.layerGroupBaseMap.getLayers().forEach(layer => {
        // if the layer is equal to the default, so show it on the map, else it does not show
        if (layer.getProperties().id === this.default_radio_value) {
          layer.setVisible(true)
        } else {
          layer.setVisible(false)
        }
      })
    },
    changeLayerVisibility: function (event, selectedLayer) {
      // iterate on list of layers to show the default base layer on the map
      this.layerGroupBaseMap.getLayers().forEach(layer => {
        // if the selected layer is equal to the current layer, so show it on the map, else it does not show
        if (selectedLayer.id === layer.getProperties().id) {
          layer.setVisible(true)
        } else {
          layer.setVisible(false)
        }
      })
    }
  },
  mounted: function () {
    this.initComponent()
  }
}
</script>

<style>
#layer-menu{
  position: absolute;
  z-index: 1000;
}
</style>
