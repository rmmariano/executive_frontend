<template>
    <!-- layer tree -->
    <div id="layer-tree">
      <b-card-group id="layer-menu" deck>
        <b-card title="Layers:" header-tag="header" footer-tag="footer">
          <!-- <h6 slot="header" class="mb-0">My header slot</h6> -->
          <b-card-text>

            <!-- original -->
            <!--
            <div class="custom-control custom-switch">
              <input type="radio" v-on:change="changeBaseLayerOnMap($event)" name="radio-group-base-layers" 
                  v-model="selected_radio_value" value="radio-osm" id="radio-osm" class="custom-control-input">
              <label class="custom-control-label" for="radio-osm">OpenStreetMap</label>
            </div>
            <div class="custom-control custom-switch">
              <input type="radio" v-on:change="changeBaseLayerOnMap($event)" name="radio-group-base-layers" 
                  v-model="selected_radio_value" value="radio-google-sattelite" id="radio-google-sattelite" class="custom-control-input">
              <label class="custom-control-label" for="radio-google-sattelite">Google Satellite</label>
            </div>
            -->

            <!-- 
            <div v-for="layer in layers" class="custom-control custom-switch">
              <input type="radio" v-on:change="changeBaseLayerOnMap($event)" name="radio-group-base-layers" 
                  v-model="selected_radio_value" value="radio-{{ layer.id }}" id="radio-{{ layer.id }}" class="custom-control-input">
              <label class="custom-control-label" for="radio-{{ layer.id }}"> {{ layer.name }} </label>
            </div>
            -->

            <div v-for="layer in layers" class="custom-control custom-switch">
              <input type="radio" 
                  v-on:change="changeLayerVisibility($event, layer)"
                  v-model="default_radio_value" 
                  v-bind:value="layer.id"
                  v-bind:id="layer.id"
                  name="radio-group-base-layers" 
                  class="custom-control-input">
              <label v-bind:for="layer.id" class="custom-control-label" >
                {{ layer.name }} 
              </label>
            </div>

            <!-- <span>Escolhido: {{ default_radio_value }}</span> -->

            <!-- como estava -->
            <!-- <div class="custom-control custom-switch">
              <input type="checkbox" v-on:change="changeBaseLayerOnMap($event)" id="checkbox-osm" class="custom-control-input" checked="">
              <label class="custom-control-label" for="checkbox-osm">OpenStreetMap</label>
            </div>
            <div class="custom-control custom-switch">
              <input type="checkbox" v-on:change="changeBaseLayerOnMap($event)" id="checkbox-google-sattelite" class="custom-control-input">
              <label class="custom-control-label" for="checkbox-google-sattelite">Google Satellite</label>
            </div> -->
            <!-- <div class="custom-control custom-switch">
              <input type="checkbox" v-on:change="changeBaseLayerOnMap($event)" id="checkbox-google-sattelite" class="custom-control-input" disabled>
              <label class="custom-control-label" for="checkbox-google-sattelite">Other map</label>
            </div> -->

            <!-- Group of default radios - option 1 -->
            <!-- <div class="custom-control custom-radio">
              <input type="radio" class="custom-control-input" name="radio-group-base-layers" id="radio-osm" checked>
              <label class="custom-control-label" for="radio-osm">OpenStreetMap</label>
            </div>
            <div class="custom-control custom-radio">
              <input type="radio" class="custom-control-input" name="radio-group-base-layers" id="radio-google-satellite">
              <label class="custom-control-label" for="radio-google-satellite">Google Satellite</label>
            </div>
            <div class="custom-control custom-radio">
              <input type="radio" class="custom-control-input" name="radio-group-base-layers" id="radio-other-map" disabled>
              <label class="custom-control-label" for="radio-other-map">Other map</label>
            </div> -->

            <!-- <div class="btn-group btn-group-toggle" data-toggle="buttons">
              <label class="btn btn-secondary active">
                <input type="radio" name="options" id="radio-osm" autocomplete="off" checked> OpenStreetMap
              </label>
              <label class="btn btn-secondary">
                <input type="radio" name="options" id="radio-google-satellite" autocomplete="off"> Google Satellite
              </label>
              <label class="btn btn-secondary">
                <input type="radio" name="options" id="radio-other-map" autocomplete="off" disabled> Other map
              </label>
            </div> -->
            
            <!-- <ul>
              <li>
                <div class="btn-group btn-group-toggle" data-toggle="buttons">
                  <label class="btn btn-secondary active">
                    <input type="radio" name="options" id="radio-osm" autocomplete="off" checked> OpenStreetMap
                  </label>
                </div>
              </li>
              <li>
                <div class="btn-group btn-group-toggle" data-toggle="buttons">
                  <label class="btn btn-secondary">
                    <input type="radio" name="options" id="radio-google-satellite" autocomplete="off"> Google Satellite
                  </label>                  
                </div>
              </li>
              <li>
                <div class="btn-group btn-group-toggle" data-toggle="buttons">
                  <label class="btn btn-secondary">
                    <input type="radio" name="options" id="radio-other-map" autocomplete="off" disabled> Other map
                  </label>
                </div>
              </li>
            </ul> -->

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
