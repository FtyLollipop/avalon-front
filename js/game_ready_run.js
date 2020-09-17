$(document).ready(function(){
    draw_avatar();

    adapt_ui();
    $(window).on("resize",adapt_ui);
});
