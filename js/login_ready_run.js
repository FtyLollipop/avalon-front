$(document).ready(function(){
    adapt_ui();
    $(window).on("resize",adapt_ui);
    $(".login-input-box").on("focus",function(){
        $(this).css("box-shadow","0 0 0 1px #399AF2").stop().animate({"border-radius":"0.3em","opacity":"1"},300);
        if($(this).val()!=="")
            return;
        let font_size=parseFloat($(this).css("font-size"))*0.8;
        $(this).prev().css("color","#399AF2").stop().animate({"bottom":"50%","font-size":font_size+"px"},300,function(){
            $(this).css("font-size","2vmin");
        });
    })

    $(".login-input-box").on("blur",function(){
        $(this).css("box-shadow","0 0 0 1px gray").stop().animate({"border-radius":"1em","opacity":"0.5"},300);
        if($(this).val()!=="")
            return;
        let font_size=parseFloat($(this).css("font-size"));
        $(this).prev().css("color","gray").stop().animate({"bottom":"0","color":"gray","font-size":font_size+"px"},300,function(){
            $(this).css("font-size","2.5vmin");
        });
    })
})
