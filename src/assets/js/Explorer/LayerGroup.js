import Group from 'ol/layer/Group'

const overlayGroupGeolocation = new Group({
  title: 'overlays_geolocation',
  layers: []
})

const overlayGroupRasters = new Group({
  title: 'overlays_rasters',
  layers: []
})

const overlayGroupExternal = new Group({
  title: 'overlays_external',
  layers: []
})

const overlayGroup = new Group({
  title: 'overlays',
  layers: []
})

export {
  overlayGroupGeolocation,
  overlayGroupRasters,
  overlayGroupExternal,
  overlayGroup
}
