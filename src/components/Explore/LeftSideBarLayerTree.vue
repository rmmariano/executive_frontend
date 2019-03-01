<template>
<!-- layer tree -->
    <div id="layer-tree">
      <b-card-group id="layer-menu" deck>
        <b-card title="Layers:" header-tag="header" footer-tag="footer">
          <!-- <h6 slot="header" class="mb-0">My header slot</h6> -->
          <b-card-text>

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

            <span>Escolhido: {{ selected_radio_value }}</span>


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
// import Overlay from 'ol/Overlay.js'
// import { fromLonLat } from 'ol/proj.js'

export default {
  props: ['parentMap'],
  data () {
    return {
      selected_radio_value: "radio-osm"
    }
  },
  methods: {
    changeBaseLayerOnMap: function (event) {
      console.log(">>> event: ", event);
      console.log(">>> event.target.value: ", event.target.value);
      console.log(">>> selected_radio_value: ", this.selected_radio_value)
    }
  }
}
</script>

<style>
#layer-menu{
  position: absolute;
  z-index: 1000;
}
</style>
