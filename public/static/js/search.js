/* PROVIDERS AND DROPDOWNS */

var checkedProviders = {}

$.each(providers, function (key, data) {
    $.ajax({
        url: data.url,
        async: false,
        success: function (response) {
            checkedProviders[key] = data;
            $('#providersCheck').append(`<div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="${data.url}" id="${key}" checked>
                                    <label class="form-check-label" for="defaultCheck1">${key}
                                    </label></div>`);
            $("#" + key).click(function () {
                if ($(this).is(":checked")) {
                    checkedProviders[key] = data;
                } else {
                    delete checkedProviders[key];
                }
            });
            if (data.type == 'opensearch') {
                fillSearchDropdowns(response)
            };
        },
        error: function (response) {
            $('#providersCheck').append(`<div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="${data.url}" id="${key}" disabled>
                                    <label class="form-check-label" for="defaultCheck1">${key}
                                    </label></div>`);
            toastr.warning('Cannot connect with provider ' + key + '.', 'Warning:')
        },
        complete: function (response) {
            if (key == Object.keys(providers)[Object.keys(providers).length - 1]) {
                if (Object.keys(checkedProviders).length == 0) {
                    toastr.error('Cannot connect with any provider', 'Error:')
                }
            }
        }
    });
});

function fillSearchDropdowns(xml) {
    $(xml).find('OpenSearchDescription').each(function () {
        $(this).find('Url').each(function () {
            $(this).find('Parameter').each(function () {
                var name = $(this).attr("name")
                if (name == "dataset") {
                    $(this).find("Option").each(function () {
                        var value = $(this).attr("value");
                        $('<option />', { value: value, text: value }).appendTo($('#collectionIdSelect'));
                    })
                } else if (name == "band") {
                    $(this).find("Option").each(function () {
                        var value = $(this).attr("value");
                        $('<option />', { value: value, text: value }).appendTo($('#bandSelect'));
                    })
                } else if (name == "radiometricProcessing") {
                    $(this).find("Option").each(function () {
                        var value = $(this).attr("value");
                        $('<option />', { value: value, text: value }).appendTo($('#radiometricProcessingSelect'));
                    })
                } else if (name == "type") {
                    $(this).find("Option").each(function () {
                        var value = $(this).attr("value");
                        $('<option />', { value: value, text: value }).appendTo($('#typeSelect'));
                    })
                }
            })
        })
    })
    $(".custom-select option").each(function () {
        var $option = $(this);
        $option.siblings()
            .filter(function () { return $(this).val() == $option.val() })
            .remove()
    })
}

/* SEARCH */

$(function () {
    $('#searchForm').on('submit', function (event) {
        event.preventDefault();
        var loader = new Loader($('#searchSubmit'))
        $('#accordion-results').empty();
        $.ajax({
            url: host_url + 'query',
            type: 'get',
            data: $(this).serialize() + '&providers=' + JSON.stringify(checkedProviders),
            dataType: "json",
            success: function (data) {
                map.removeLayer(geojsonLayer);
                geojsonLayer = L.geoJson(data, {
                    onEachFeature: onEachFeature,
                    pane: 'geojson'
                }).addTo(map);
                $.each(data.providers, function (key, data) {
                    if (data.totalResults == 0) {
                        toastr.info('No results available for provider ' + data.provider + '.', 'Info:')
                    } else {
                        $('#accordion-results').append(`<div class="card">
                                                            <div class="card-header card-collapse" id="heading${data.provider}" data-toggle="collapse" data-target="#collapse${data.provider}">
                                                                <h5>${data.provider} <span class="badge badge-primary badge-right">${data.totalResults}</span></h5>
                                                            </div>
                                                            <div id="collapse${data.provider}" class="collapse show">
                                                                <div id="resultList${data.provider}"></div>
                                                            </div>
                                                        </div>`);
                    }
                });
                $.each(data.features, function (key, feature) {
                    var prop = feature.properties;
                    var card = `<div class="margin-tb">
                                            <div class="card">
                                                <div class="row"> 
                                                    <div class="col-4">
                                                        <img class="w-100" src="${prop.icon}" >
                                                    </div>
                                                    <div class="col-8 nopadding-left">
                                                        <div class="card-body nopadding-left">
                                                            <p class="card-title"><b>${prop.title}</b></p>
                                                            <div class="btn-group">
                                                                <button type="button" class="btn btn-light quicklook" value="${prop.title}" id=${prop.title}_ql data-toggle="tooltip" data-placement="top" title="Show quicklook"><span class="fa fa-eye-slash"></span></button>
                                                                <button type="button" class="btn btn-light centralize" value="${prop.title}" id=${prop.title}_center data-toggle="tooltip" data-placement="top" title="Centralize to quicklook"><span class="fa fa-dot-circle-o"></span></button>
                                                                <button type="button" class="btn btn-light info" value="${prop.title}" id=${prop.title}_info data-toggle="tooltip" data-placement="top" title="Show info card"><span class="fa fa-info"></span></button>
                                                                <a role="button" class="btn btn-light" id=${prop.title} data-toggle="modal" data-target="#modal" target="_blank" data-toggle="tooltip" data-placement="top" title="Show download list"><span class="fa fa-download"></span></a
                                                            </div>
                                                            </br>
                                                            <div class="btn-group">
                                                                <button type="button" class="btn btn-success gcps" name="L8" value="${prop.title}" id=${prop.title}_gcps data-toggle="tooltip" data-placement="top" title="Extract control points from Landsat"><span class="fa fa-map-marker"></span></button>
                                                                <button type="button" class="btn btn-info gcps" name="S2" value="${prop.title}" id=${prop.title}_gcps2 data-toggle="tooltip" data-placement="top" title="Extract control points from Sentinel"><span class="fa fa-map-marker"></span></button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>`;
                    $('#resultList' + prop.provider).append(card);
                    $('#' + prop.title).click(prop.enclosure, function (object) {
                        $('#modalBody').empty();
                        var itemsList = $('<div/>').addClass('list-group');
                        $.each(object.data, function (index, value) {
                            var color = "#FFFFFF"
                            switch (value.band) {
                                case 'blue':
                                    color = "#A9D0F5"
                                    break;
                                case 'green':
                                    color = "#CCE5CC"
                                    break;
                                case 'red':
                                    color = "#FFCCCC"
                                    break;
                            }
                            var item = `<a href="${value.url}" class="list-group-item list-group-item-action flex-column align-items-start" style="background-color: ${color}">
                                                    <div class="d-flex w-100 justify-content-between">
                                                    <h5 class="mb-1">${prop.title}</h5>
                                                    <small class="text-muted">${value.type}</small>
                                                        </div>
                                                        <p class="mb-1">${value.band}</p>
                                                    <div class="d-flex w-100 justify-content-between">
                                                        <small class="text-muted">Radiometric Processing ${value.radiometric_processing}</small>
                                                    <i class="fa fa-download"></i>
                                                    </div>
                                                </a>`;
                            itemsList.append(item);
                        });
                        $('#modalBody').append(itemsList);
                        $("[data-toggle='popover'").popover();
                    });
                });
            },
            error: function (data) {
                toastr.error('Cannot search images from providers.', 'Error:')
            },
            complete: function () {
                loader.stop()
            }
        });
    });
});

$(document).on('click', '.quicklook', function () {
    var layer = geojsonLayer.getLayer($(this).attr('value'));
    layer.fireEvent('click');
    layer.bringToFront();
});

$(document).on('click', '.info', function () {
    geojsonLayer.getLayer($(this).attr('value')).openPopup();
});

$(document).on('click', '.centralize', function () {
    map.fitBounds(geojsonLayer.getLayer($(this).attr('value')).getBounds());
});

$(document).on('click', '.gcps', function () {
    var layer = geojsonLayer.getLayer($(this).attr('value'));
    var satellite = $(this).attr('name')
    var loader = new Loader($(this))
    $.ajax({
        type: "GET",
        url: host_url + 'getgcps',
        data: {
            west: layer.getBounds().getWest(),
            south: layer.getBounds().getSouth(),
            east: layer.getBounds().getEast(),
            north: layer.getBounds().getNorth(),
            count: $('#count').val(),
            satellite: satellite
        },
        dataType: "json",
        success: function (data) {
            map.removeLayer(geojsonGcpsLayer);
            if (satellite == 'L8') {
                color = 'green'
                toastr.info('Total extracted points from Landsat:' + data.count.toString(), '[' + moment().format('hh:mm:ss') + ']')
            } else {
                color = 'blue'
                toastr.info('Total extracted points from Sentinel:' + data.count.toString(), '[' + moment().format('hh:mm:ss') + ']')
            }
            geojsonGcpsLayer = L.geoJson(data, {
                onEachFeature: onEachFeature,
                pane: 'geojson',
                pointToLayer: function (feature, latlng) {
                    var myIcon = L.icon({
                        iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-' + color + '.png',
                        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
                        iconSize: [25, 41],
                        iconAnchor: [12, 41],
                        popupAnchor: [1, -34],
                        shadowSize: [41, 41]
                    });
                    return L.marker(latlng, { icon: myIcon });
                }
            }).addTo(map).bringToFront()
        },
        error: function (data) {
            toastr.error('Cannot extract control points from scene.', 'Error:')
        },
        complete: function () {
            loader.stop()
        }
    });
});

/* GCPS */

$('#getgcps').click(function () {
    var loader = new Loader($(this))
    var data = $('#searchForm').serializeArray().reduce(function (obj, item) {
        obj[item.name] = item.value;
        return obj;
    }, {});
    $.ajax({
        type: "GET",
        url: host_url + 'getgcps',
        data: {
            west: data['west'],
            south: data['south'],
            east: data['east'],
            north: data['north'],
            count: data['count'],
            satellite: $("#satellitePoints").val()
        },
        dataType: "json",
        success: function (data) {
            map.removeLayer(geojsonGcpsLayer);
            geojsonGcpsLayer = L.geoJson(data, {
                onEachFeature: onEachFeature,
                pane: 'geojson',
                pointToLayer: function (feature, latlng) {
                    if (feature.properties.satellite == 'L8') {
                        color = 'green'
                    } else {
                        color = 'blue'
                    }
                    var myIcon = L.icon({
                        iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-' + color + '.png',
                        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
                        iconSize: [25, 41],
                        iconAnchor: [12, 41],
                        popupAnchor: [1, -34],
                        shadowSize: [41, 41]
                    });
                    return L.marker(latlng, { icon: myIcon });
                }
            }).addTo(map).bringToFront()
            toastr.info('Total extracted points:' + data.count.toString(), '[' + moment().format('hh:mm:ss') + ']')
        },
        error: function (data) {
            toastr.error('Cannot extract control points.', 'Error:')
        },
        complete: function () {
            loader.stop()
        }
    });
});

/* WRSS */

$('#getwrss').click(function () {
    var loader = new Loader($(this))
    $.ajax({
        type: "GET",
        url: host_url + 'getwrss',
        data: $('#searchForm').serialize() + '&satellite=' + $("#satellitePoints").val(),
        dataType: "json",
        success: function (data) {
            map.removeLayer(geojsonWrssLayer);
            geojsonWrssLayer = L.geoJson(data, {
                onEachFeature: onEachFeature,
                pane: 'geojson'
            }).addTo(map);
        },
        error: function (data) {
            toastr.error('Cannot extract WRSs.', 'Error:')
        },
        complete: function () {
            loader.stop()
        }
    });
});