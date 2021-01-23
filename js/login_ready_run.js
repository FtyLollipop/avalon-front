$(document).ready(function () {
    adapt_ui();
    $(window).on("resize", adapt_ui);
    bind_login_controller();
    bind_login_box_animation();

    if ($.cookie("token") !== undefined) {
        $.ajax({
            type: "post",
            url: apiUrl + "/verifyToken",
            data: {
                token: $.cookie("token")
            },
            dataType: "json",
            success: function (data) {
                console.log(data);
                if (data.status === "true")
                    window.location.replace("main.html");
                else {
                    $.cookie("token","",{expires:-1});
                }
            }
        })
    }
})
