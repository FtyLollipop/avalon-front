$(document).ready(function(){
    draw_avatar();

    $(window).on("resize",adapt_ui());
});

function adapt_ui(){
    screenHeight=window.innerHeight;
    screenWidth=window.innerWidth;
    if(screenHeight<screenWidth*0.75){
        $("#ui-box").css("height",screenHeight);
        $("#ui-box").css("width",Math.floor(screenHeight*(4/3)));
    }else{
        $("#ui-box").css("width",screenWidth);
        $("#ui-box").css("height",screenWidth*0.75);
    }
}


$(document).mousemove(function (e) {
    let xPos = parseInt(e.clientX+10);
    let yPos = parseInt(e.clientY+10);
    if(screenHeight*0.6<yPos&&screenWidth*0.6<xPos){
        $("#mouse-tip").addClass("mouse-tip-xy-pos");
        yPos-=12;
        xPos-=12;
    } else{
        $("#mouse-tip").removeClass("mouse-tip-xy-pos");
        if(screenHeight*0.6<yPos){
            $("#mouse-tip").addClass("mouse-tip-y-pos");
            yPos-=12;
        } else{
            $("#mouse-tip").removeClass("mouse-tip-y-pos");
        }

        if(screenWidth*0.6<xPos){
            $("#mouse-tip").addClass("mouse-tip-x-pos");
            xPos-=12;
        } else{
            $("#mouse-tip").removeClass("mouse-tip-x-pos");
        }
    }

    $("#mouse-tip").css("left", xPos+"px");
    $("#mouse-tip").css("top", yPos+"px");
});
