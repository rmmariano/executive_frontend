<template>
    <!-- layer tree -->
    <div id="layer-tree">
      <b-card-group id="layer-menu" deck>
        <b-card title="Layers:" header-tag="header" footer-tag="footer">
          <!-- <h6 slot="header" class="mb-0">My header slot</h6> -->
          <b-card-text>

            <div v-for="layer in baseLayerList" v-bind:key="layer.id" class="custom-control custom-switch">
              <input type="radio"
                v-on:change="changeLayerVisibility($event, layer)"
                v-model="selectedRadioButton"
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
import TileLayer from 'ol/layer/Tile'
import XYZ from 'ol/source/XYZ'

import {
  baseLayerList,
  baseLayerGroup
} from '@/assets/js/Explorer/BaseLayer'

export default {
  name: 'LeftSideBarLayerTree',
  props: ['olmap'],
  data () {
    return {
      baseLayerList,
      baseLayerGroup,
      selectedRadioButton: ''
    }
  },
  methods: {
    initComponent: function () {
      // if there is some layer inside the list, so remove it
      if (this.baseLayerGroup.getLayers().getLength() > 0) {
        this.baseLayerGroup.getLayers().pop()
      }

      // plot on the map the default layer
      this.baseLayerList.forEach(layer => {
        if (layer.is_default) {
          // select the default radio button
          this.selectedRadioButton = layer.id
          // add the layer on the map
          this.baseLayerGroup.getLayers().push(
            new TileLayer({
              source: new XYZ({
                url: layer.source.url
              })
            })
          )
        }
      })

      // put on the list the default layer
      // if (this.default_radio_value === 'osm') {
      //   this.layerGroupBaseMap.getLayers().push(layerBaseOSM)
      // } else if (this.default_radio_value === 'google-sattelite') {
      //   this.layerGroupBaseMap.getLayers().push(layerBaseGoogleSatellite)
      // } else {
      //   console.log('\nInvalid default layer\n')
      // }

      // iterate on list of layers to show the default base layer on the map
      // this.layerGroupBaseMap.getLayers().forEach(layer => {
      //   // if the layer is equal to the default, so show it on the map, else it does not show
      //   if (layer.getProperties().id === this.default_radio_value) {
      //     layer.setVisible(true)
      //   } else {
      //     layer.setVisible(false)
      //   }
      // })
    },
    changeLayerVisibility: function (event, selectedLayer) {
      // if there is some layer inside the list, so remove it
      if (this.baseLayerGroup.getLayers().getLength() > 0) {
        this.baseLayerGroup.getLayers().pop()
      }

      // plot on the map the selected layer
      this.baseLayerList.forEach(layer => {
        if (selectedLayer.id === layer.id) {
          // select the radio button (PS: Vue does this automatically)
          // this.selectedRadioButton = layer.id
          // add the layer on the map
          this.baseLayerGroup.getLayers().push(
            new TileLayer({
              source: new XYZ({
                url: layer.source.url
              })
            })
          )
        }
      })

      // put on the list the selected layer
      // if (selectedLayer.id === 'osm') {
      //   this.layerGroupBaseMap.getLayers().push(layerBaseOSM)
      // } else if (selectedLayer.id === 'google-sattelite') {
      //   this.layerGroupBaseMap.getLayers().push(layerBaseGoogleSatellite)
      // } else {
      //   console.log('\nInvalid selected layer\n')
      // }

      // iterate on list of layers to show the default base layer on the map
      // this.layerGroupBaseMap.getLayers().forEach(layer => {
      //   // if the selected layer is equal to the current layer, so show it on the map, else it does not show
      //   if (selectedLayer.id === layer.getProperties().id) {
      //     layer.setVisible(true)
      //   } else {
      //     layer.setVisible(false)
      //   }
      // })
    }
  },
  created: function () {
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
