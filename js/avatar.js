function display_name(span){
    console.log(1);
    $(span).parent().addClass("avatar-name-full-display");
}

function hide_name(span){
    $(span).parent().removeClass("avatar-name-full-display");
}

function draw_avatar(){
    let avatar_element='<div class="avatar">\n' +
        '<div class="avatar-icon"></div>\n' +
        '<div class="avatar-ok"></div>\n' +
        '<div class="avatar-wait"></div>\n' +
        '<div class="avatar-disconnected"></div>\n' +
        ' <div class="avatar-number" onmouseenter="display_avatar_number_mouse_tip(this)" onmouseleave="hide_mouse_tip(this)">1</div>\n' +
        '<div class="avatar-me" onmouseenter="display_avatar_me_mouse_tip(this)" onmouseleave="hide_mouse_tip(this)"></div>\n' +
        '<div class="avatar-leader" onmouseenter="display_avatar_leader_mouse_tip(this)" onmouseleave="hide_mouse_tip(this)"></div>\n' +
        '<div class="avatar-character" onmouseenter="display_avatar_character_mouse_tip(this)" onmouseleave="hide_mouse_tip(this)"></div>\n' +
        '<div class="avatar-name"><span onmouseenter="display_name(this)" onmouseleave="hide_name(this)">无</span></div>\n' +
        '</div>';
    let avatar_str;
    for(let i=0;i<5;i++)
        avatar_str+=avatar_element;
    $(".avatars")[0].innerHTML=avatar_str;
    $(".avatars")[1].innerHTML=avatar_str;
}

function avatar_clickable(avatar,func){
    avatar.addClass("avatar-clickable");
    avatar.on("click",func());
}

function avatar_not_clickable(avatar){
    avatar.removeClass("avatar-clickable");
    avatar.unbind("click");
}
