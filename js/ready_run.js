$(document).ready(function(){
    draw_avatar();

    $(window).on("resize",adapt_ui());
});

function adapt_ui(){
    ScreenHeight=window.innerHeight;
    ScreenWidth=window.innerWidth;
    if(ScreenHeight<ScreenWidth*0.75){
        $("#ui-box").css("height",ScreenHeight);
        $("#ui-box").css("width",Math.floor(ScreenHeight*(4/3)));
    }else{
        $("#ui-box").css("width",ScreenWidth);
        $("#ui-box").css("height",ScreenWidth*0.75);
    }
}


$(document).mousemove(function (e) {
    let xPos = parseInt(e.clientX+10);
    let yPos = parseInt(e.clientY+10);
    if(ScreenHeight*0.6<yPos&&ScreenWidth*0.6<xPos){
        $("#mouse-tip").addClass("mouse-tip-xy-pos");
        yPos-=12;
        xPos-=12;
    } else{
        $("#mouse-tip").removeClass("mouse-tip-xy-pos");
        if(ScreenHeight*0.6<yPos){
            $("#mouse-tip").addClass("mouse-tip-y-pos");
            yPos-=12;
        } else{
            $("#mouse-tip").removeClass("mouse-tip-y-pos");
        }

        if(ScreenWidth*0.6<xPos){
            $("#mouse-tip").addClass("mouse-tip-x-pos");
            xPos-=12;
        } else{
            $("#mouse-tip").removeClass("mouse-tip-x-pos");
        }
    }

    $("#mouse-tip").css("left", xPos+"px");
    $("#mouse-tip").css("top", yPos+"px");
});
