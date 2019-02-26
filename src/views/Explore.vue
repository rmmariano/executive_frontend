<template>
  <div id="explore_main">

    <ExploreLayerTree v-bind:parentMap="map" v-if="renderChild"/>

    <!-- where the map is ploted -->
    <div id="map" class="map"></div>

  </div>
</template>

<script>
import 'ol/ol.css'
import Map from 'ol/Map'
import View from 'ol/View'
import TileLayer from 'ol/layer/Tile'
import Group from 'ol/layer/Group'
import XYZ from 'ol/source/XYZ'

// @ is an alias to /src
import ExploreLayerTree from '@/components/Explore/LayerTree.vue'

export default {
  name: 'Explore',

  data () {
    return {
      map: {},
      renderChild: false
    }
  },
  methods: {
    initMap: function () {
      var layerOSM = new TileLayer({
        source: new XYZ({
          url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        })
      })

      var layerGoogleSatellite = new TileLayer({
        source: new XYZ({
          url: 'http://mt1.google.com/vt/lyrs=s&hl=pl&&x={x}&y={y}&z={z}'
        })
      })

      var layerGroupBaseMap = new Group({
        title: 'layerGroupBaseMap',
        layers: [layerGoogleSatellite, layerOSM]
      })

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

      this.renderChild = true

      // var googleLayerRoadNames=new ol.layer.Tile({
      //     title: "Google Road Names",
      //     source: new ol.source.TileImage({ url: 'http://mt1.google.com/vt/lyrs=h&x={x}&y={y}&z={z}' }),
      // })

      // var googleLayerRoadmap=new ol.layer.Tile({
      //     title: "Google Road Map",
      //     source: new ol.source.TileImage({ url: 'http://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}' }),
      // })

      // var googleLayerHybrid =new ol.layer.Tile({
      //     title: "Google Satellite & Roads",
      //     source: new ol.source.TileImage({ url: 'http://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}' }),
      // })

      // var googleLayerTerrain =new ol.layer.Tile({
      //     title: "Google Terrain",
      //     source: new ol.source.TileImage({ url: 'http://mt1.google.com/vt/lyrs=t&x={x}&y={y}&z={z}' }),
      // })

      // var googleLayerHybrid2 =new ol.layer.Tile({
      //     title: "Google Terrain & Roads",
      //     source: new ol.source.TileImage({ url: 'http://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}' }),
      // })

      // var googleLayerOnlyRoad=new ol.layer.Tile({
      //     title: "Google Road without Building",
      //     source: new ol.source.TileImage({ url: 'http://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}' }),
      // })
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
