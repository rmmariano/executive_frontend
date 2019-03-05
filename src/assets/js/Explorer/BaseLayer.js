import Group from 'ol/layer/Group'

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

/*
     SINGLE LAYERS
*/
const baseLayerList = [
  {
    id: 'osm',
    name: 'OpenStreetMap',
    source: {
      url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
    },
    is_default: true
  },
  {
    id: 'google-sattelite',
    name: 'Google Satellite',
    source: {
      url: 'http://mt1.google.com/vt/lyrs=s&hl=pl&&x={x}&y={y}&z={z}'
    },
    is_default: false
  }
]

/*
     GROUP LAYERS
*/
const baseLayerGroup = new Group({
  title: 'layerGroupBaseMap',
  layers: []
})

export {
  baseLayerList,
  baseLayerGroup
}
