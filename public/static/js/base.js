var geojsonLayer = 0;
var geojsonGcpsLayer = 0;
var geojsonWrssLayer = 0;
var imgsArray = []

/* DEFAULT */

toastr.options = {
    "closeButton": true,
    "debug": false,
    "newestOnTop": true,
    "progressBar": false,
    "positionClass": "toast-top-right-padding",
    "preventDuplicates": true,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "5000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
}

toastr.options.onShown = function () {
    toastrTittle = $(".toast-title").text();
    toastrMessage = $(".toast-message").text();
    $('#notifyList').prepend(`<div class="alert alert-secondary alert-dismissible fade show" role="alert">
                                    <strong>${toastrTittle}</strong> ${toastrMessage}
                                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>`);
}

$(document).ready(function () {

    // Empty dropdown options
    option = `<option value="" selected="selected"></option>`
    $(option).appendTo($('#bandSelect'));
    $(option).appendTo($('#collectionIdSelect'));
    $(option).appendTo($('#radiometricProcessingSelect'));
    $(option).appendTo($('#typeSelect'));

    // Datepickers filter
    $('input').filter('.datepicker-start').each(function () {
        $(this).datepicker($.extend({
            onSelect: function () {
                var minDate = $(this).datepicker('getDate');
                minDate.setDate(minDate.getDate());
                $("#endPicker" + $(this).data().bind).datepicker("option", "minDate", minDate);
            }
        }, { dateFormat: "yy-mm-dd" }));
    });
    $('input').filter('.datepicker-end').each(function () {
        $(this).datepicker($.extend({
            onSelect: function () {
                var maxDate = $(this).datepicker('getDate');
                maxDate.setDate(maxDate.getDate());
                $("#startPicker" + $(this).data().bind).datepicker("option", "maxDate", maxDate);
            }
        }, { dateFormat: "yy-mm-dd" }));
    });
});

/* MAP */

var map = L.map('map').setView([-15.22, -53.23], 5);

//var openStreetMapDefault = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//    maxZoom: 18,
//    attribution: 'Map data &copy; OpenStreetMap contributors'
//});
//
//var openTopoMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
//    maxZoom: 17,
//    attribution: 'Map data: &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
//});

var googleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
    maxZoom: 20,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
});
//
//var googleHybrid = L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}', {
//    maxZoom: 20,
//    subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
//});
//
//var googleStreets = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
//    maxZoom: 20,
//    subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
//});
//
//var googleTerrain = L.tileLayer('http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}', {
//    maxZoom: 20,
//    subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
//});

var baseLayers = {
//    'OpenStreetMap': openStreetMapDefault,
//    'OpenTopoMap': openTopoMap,
    'Google-Satellite': googleSat,
//    'Google-Hybrid': googleHybrid,
//    'Google-Streets': googleStreets,
//    'Google-Terrain': googleTerrain,
}

baseLayers['Google-Satellite'].addTo(map);

var options = {
    sortLayers: true,
    collapsed: true
}

L.control.layers(baseLayers, null, options).addTo(map);

map.zoomControl.setPosition('topright');
map.createPane('bbox').style.zIndex = 320;
map.createPane('geojson').style.zIndex = 350;

var drawnItems = new L.LayerGroup().addTo(map);

var drawControl = new L.Control.Draw({
    draw: {
        polygon: false,
        marker: false,
        circlemarker: false,
        polyline: false,
        circle: false,
        rectangle: {
            shapeOptions: {
                color: '#000',
                opacity: .2,
                fillOpacity: 0.1
            }
        }
    },
    edit: false,
    position: 'topright'
});

map.addControl(drawControl);

map.on('draw:drawstart', function (e) {
    drawnItems.clearLayers();
});

map.on('draw:created', function (e) {
    var layer = e.layer;
    layer.options.pane = 'bbox'
    drawnItems.addLayer(layer);
    $('#bboxw').val(layer.getBounds().getWest());
    $('#bboxs').val(layer.getBounds().getSouth());
    $('#bboxe').val(layer.getBounds().getEast());
    $('#bboxn').val(layer.getBounds().getNorth());
});

/* SIDEBARS */

var sidebar = $('#sidebar').sidebar();

var tableSidebar = L.control.sidebar('sidebar-right', { position: 'right' }).addTo(map);

/* MAP BUTTONS */

L.easyButton({
    id: 'showAll',
    position: 'topright',
    states: [{
        stateName: 'show-all',
        title: 'Show all quicklooks',
        icon: 'fa-eye',
        onClick: function (button, map) {
            if (imgsArray.length != 0) {
                $.each(imgsArray, function (key, layer) {
                    if (!layer._quicklook) {
                        layer.fireEvent('click');
                        button.state('hide-all');
                    }
                });
            } else {
                toastr.warning('No layers available to show', 'Warning:')
            }
        }
    }, {
        stateName: 'hide-all',
        icon: 'fa-eye-slash',
        title: 'Hide all quicklooks',
        onClick: function (button, map) {
            $.each(imgsArray, function (key, layer) {
                if (layer._quicklook) {
                    layer.fireEvent('click');
                    button.state('show-all');
                }
            });
        },
    }]
}).addTo(map);

L.easyButton({
    id: 'removeAll',
    position: 'topright',
    leafletClasses: true,
    states: [{
        stateName: 'remove',
        title: 'remove layers',
        icon: 'fa-trash',
        onClick: function (button, map) {
            button.state('add');
            map.removeLayer(geojsonGcpsLayer);
            map.removeLayer(geojsonWrssLayer);
            map.removeLayer(geojsonLayer);
            $('#accordion-results').empty();
        }
    }]
}).addTo(map);

L.easyButton({
    id: 'showTable',
    position: 'topright',
    leafletClasses: true,
    states: [{
        stateName: 'shown',
        title: 'Show table',
        icon: 'fa-table',
        onClick: function (button, map) {
            tableSidebar.show();
            button.state('hidden');
        }
    }, {
        stateName: 'hidden',
        title: 'Hide table',
        icon: 'fa-times',
        onClick: function (button, map) {
            tableSidebar.hide();
            button.state('shown');
        },
    }]
}).addTo(map);

/* FEATURES */

function onEachFeature(feature, layer) {
    layer._leaflet_id = feature.properties.title;
    layer._properties = feature.properties;
    html = `<b>${layer._leaflet_id}</b><br>
            <table class="table">
            <tbody>`
    if (feature.properties.type == 'IMAGES') {
        imgsArray.push(layer)
        html += `<tr>
            <th scope="row">Date</th>
            <td>${feature.properties.date}</td>
          </tr>
          <tr>
            <th scope="row">Path</th>
            <td>${feature.properties.path}</td>
          </tr>
          <tr>
            <th scope="row">Row</th>
            <td>${feature.properties.row}</td>
          </tr>
          <tr>
            <th scope="row">Satellite</th>
            <td>${feature.properties.satellite}</td>
          </tr>
          <tr>
            <th scope="row">Sensor</th>
            <td>${feature.properties.sensor}</td>
          </tr>
          <tr>
            <th scope="row">Cloud Coverage</th>
            <td>${feature.properties.cloud}</td>
          </tr>
          <tr>
            <th scope="row">Provider</th>
            <td>${feature.properties.provider}</td>
          </tr>`
    } else if (feature.properties.type == 'GCPS') {
        html += `<tr>
                    <th scope="row">Satellite</th>
                    <td>${feature.properties.satellite}</td>
                </tr>
                <tr>
                    <th scope="row">Sensor</th>
                    <td>${feature.properties.sensor}</td>
                </tr>`
    } else {
        $.each(feature.properties, function (key, value) {
            prop = `<tr>
                        <th scope="row">${key.substr(0, 1).toUpperCase() + key.substr(1)}</th>
                        <td>${value}</td>
                    </tr>`
            html += prop
        });
    }

    html += `</tbody>
      </table>`
    layer.bindPopup(html)

    if (feature.properties.type != 'GCPS') {
        layer.setStyle({ fillOpacity: 0.01, opacity: 0.8 });
    }

    if (feature.properties.type != 'WRSS') {
        layer.on('click', function (e) {
            layer.closePopup();
            $('#' + feature.properties.title + '_ql').find('span').toggleClass('fa-eye-slash fa-eye');
            if (layer._quicklook) {
                map.removeLayer(layer._quicklook);
                layer._quicklook = null;
            } else {
                var imgUrl = feature.properties.icon;
                if (imgUrl == '') {
                    imgUrl = 'static/img/noimage.jpg'
                }
                var anchor = [[feature.properties.tl_latitude, feature.properties.tl_longitude],
                [feature.properties.tr_latitude, feature.properties.tr_longitude],
                [feature.properties.br_latitude, feature.properties.br_longitude],
                [feature.properties.bl_latitude, feature.properties.bl_longitude]]
                layer._quicklook = L.imageTransform(imgUrl, anchor).addTo(map)
            }
        });
    }

    layer.on('contextmenu', function (e) {
        layer.openPopup();
    });
    layer.on('remove', function (e) {
        if (layer._quicklook) {
            map.removeLayer(layer._quicklook);
            layer._quicklook = null;
        }
    });
}