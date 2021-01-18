$(document).ready(function(){
    draw_avatar();
    adapt_ui();
    console.log($($(".leader")[0]).height());
    console.log($($(".leader")[0]).width());
    $(window).on("resize",adapt_ui);
});
