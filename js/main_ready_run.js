$(document).ready(function(){
    adapt_ui();
    $(window).on("resize",adapt_ui);
    bind_profile_controller();
    bind_create_room_controller();
})
