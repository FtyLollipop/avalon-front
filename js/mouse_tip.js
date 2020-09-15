function display_avatar_number_mouse_tip(div){
    let num=$(div).html();
    $("#mouse-tip").html(num+"号玩家");
    $("#mouse-tip").show();
}

function display_avatar_me_mouse_tip(div){
    $("#mouse-tip").html("您自己");
    $("#mouse-tip").show();
}

function display_avatar_leader_mouse_tip(div){
    $("#mouse-tip").html("该玩家是本轮任务首领");
    $("#mouse-tip").show();
}

function display_avatar_character_mouse_tip(div){
    $("#mouse-tip").html("该玩家可能是梅林或莫甘娜 该玩家是湖中仙女");
    $("#mouse-tip").show();
}

function hide_mouse_tip(div){
    $("#mouse-tip").hide();
    $("#mouse-tip").html("");
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
