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
