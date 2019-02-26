import Group from 'ol/layer/Group'
import TileLayer from 'ol/layer/Tile'
import XYZ from 'ol/source/XYZ'

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

const layerBaseOSM = new TileLayer({
  source: new XYZ({
    url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
  })
})

const layerBaseGoogleSatellite = new TileLayer({
  source: new XYZ({
    url: 'http://mt1.google.com/vt/lyrs=s&hl=pl&&x={x}&y={y}&z={z}'
  })
})

const layerGroupBaseMap = new Group({
  title: 'layerGroupBaseMap',
  layers: [layerBaseGoogleSatellite, layerBaseOSM]
})

export {
  layerBaseOSM,
  layerBaseGoogleSatellite,
  layerGroupBaseMap
}
