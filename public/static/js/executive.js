
/* EXECUTIVE */


$('#jstreeContainer').jstree({
    'core': {
        check_callback: false
    },
    'checkbox': {
        three_state: true,
        cascade: 'up',
              whole_node : false,
              tie_selection : false
    },
     "types": {
        "default": {
            "icon": "fa fa-folder"
        },
        "file": {
            "icon": "fa fa-file-image-o"
        }
    },
    'plugins': ["checkbox", "types"]
});

$('#execForm').on('submit', function (event) {
    var loader = new Loader($('#execSubmit'))
    var drds = []
    var selectedDrds = $('#jstreeContainer').jstree("get_checked", true)
    $.each(selectedDrds, function (key, node) {
        if (node.original.type == "file") {
            drds.push(node.original.path + '/' + node.text)
        }
    });
    $.ajax({
        type: 'GET',
        url: host_url + 'maestro/start',
        data: 'drds=' + drds,
        success: function (data) {
            toastr.info(data.msg)
        },
        error: function (data) {
            toastr.error(data.responseJSON.message)
        },
        complete: function () {
            loader.stop()
        }
    });
    event.preventDefault();
});

$("#showdrds").click(function () {
    var loader = new Loader($(this))
    let satList = $("#satellite input:checkbox:checked").map(function(){
      return $(this).attr('id');
    }).get();
    let instList = $("#instrument input:checkbox:checked").map(function(){
      return $(this).attr('id');
    }).get();
    $.ajax({
        type: 'GET',
        url: maestro_url + 'drds',
        data: $("#execForm").serialize() + '&sat=' + satList + '&inst=' + instList,
        dataType: "json",
        crossDomain: true,
        success: function (data) {
            if (data.drds == '') {
                toastr.error('No DRDs available', 'Error:')
            } else {
                $('#collapseTree').collapse("show");
                $('#jstreeContainer').jstree(true).settings.core.data = data.drds;
                $('#jstreeContainer').jstree(true).refresh();

            }
        },
        error: function (data) {
            toastr.error('Cannot connect with maestro to get DRDs.', 'Error:')
        },
        complete: function () {
            loader.stop()
        }
    });
});

$