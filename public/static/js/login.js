$('#login').on('submit', "#login-form",function (event) {
    $.ajax({
        type: 'POST',
        url: '/login',
        data: $(this).serialize(),
        success: function (d) {
            $.ajax({
                type: 'GET',
                url: '/profile',
                success : function(data) {
                    $('#login').html(data);
                },
                error : function(data)
                {
                    toastr.error("Please insert a valid username or email and password.");
                }
            });
        }
    });
    event.preventDefault();
});

$("#login").on('click', '#logout', function(){
    $.ajax({
        type: 'GET',
        url: '/logout',
        success: function (d) {
            $.ajax({
                type: 'GET',
                url: '/login',
                success : function(data) {
                    $('#login').html(data);
                },
                error : function(data)
                {
                    toastr.error(data.responseJSON.message);
                }
            });
        }
    });
});