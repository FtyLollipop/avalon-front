$(document).ready(function(){
    adapt_ui();
    $(window).on("resize",adapt_ui);
    bind_login_controller();
    bind_login_box_animation();
})
