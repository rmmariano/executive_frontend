/* ACTIVITIES */
// http://bootstrap-table.wenzhixin.net.cn/documentation/#localizations

var $table = $('#table');

$table.bootstrapTable({
    url: maestro_url + 'inspect',
    rowStyle: "rowStyle",
    sortName: "app",
    sortOrder: "asc",
    search: "true",
    searchOnEnterKey: "true",
    showRefresh: "true",
    minimumCountColumns: "2",
    pagination: "true",
    showPaginationSwitch: "true",
    sidePagination: "server",
    silentSort: "true",
    toolbar: "#toolbar",
    clickToSelect: "true",
    buttonsClass: "light",
    columns: [{
        field: 'state',
        checkbox: 'true'
    },{
        field: 'id',
        title: 'ID',
        sortable: 'true'
    },{
        field: 'username',
        title: 'Username',
        sortable: 'true'
    },{
        field: 'app',
        title: 'App',
        sortable: 'true'
    }, {
        field: 'status',
        title: 'Status',
        sortable: 'true'
    }, {
        field: 'drd',
        title: 'DRD',
        sortable: 'true'
    }, {
        field: 'start',
        title: 'Start',
        sortable: 'true'
    }, {
        field: 'end',
        title: 'End',
        sortable: 'true'
    }, {
        field: 'elapsed',
        title: 'Elapsed',
        sortable: 'true'
    }, {
        field: 'message',
        title: 'Message',
        sortable: 'true'
    }, {
        field: 'retcode',
        title: 'Retcode',
        sortable: 'true'
    }, {
        field: 'workorder',
        title: 'Workorder',
        sortable: 'true'
    }]
});

function detailFormatter(index, row) {
    const html = [];
    $.each(row, (key, value) => {
        html.push(`<p><b>${key}:</b> ${value}</p>`);
    });
    return html.join('');
}

function rowStyle(row, index) {
    switch (row.status) {
        case 'DONE':
            color = 'table-success'
            break;
        case 'DOING':
            color = 'table-info'
            break;
        case 'NOTDONE':
            color = 'table-warning'
            break;
        case 'ERROR':
            color = 'table-danger'
            break;
        default:
            color = 'table-active'
            break;
    }
    return {
        classes: color
    };
}


$('#restartBtn').on('click', function (event) {
    var selected = $table.bootstrapTable('getSelections');
    var ids = selected.map(value => value.id);

       $.ajax({
        type: 'GET',
        url: host_url + "maestro/restart",
        data: 'ids=' + ids.toString(),
        success: function (data) {
            toastr.info(data.responseJSON.message);
        },
        error: function (data) {
            toastr.error(data.responseJSON.message);
        }
        });
});