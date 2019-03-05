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
      for (var index in this.baseLayerList) {
        var layer = this.baseLayerList[index]

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
          // go out from the for it is found the default
          break
        }
      }
    },
    changeLayerVisibility: function (event, selectedLayer) {
      // if there is some layer inside the list, so remove it
      if (this.baseLayerGroup.getLayers().getLength() > 0) {
        this.baseLayerGroup.getLayers().pop()
      }

      // plot on the map the selected layer
      for (var index in this.baseLayerList) {
        var layer = this.baseLayerList[index]

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
          // go out from the for it is found the selected layer
          break
        }
      }
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
