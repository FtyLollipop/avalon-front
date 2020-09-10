function display_name(span){
    console.log(1);
    $(span).parent().addClass("avatar-name-display");
}

function hide_name(span){
    $(span).parent().removeClass("avatar-name-display");
}

function draw_avatar(){
    let avatar_element='<div class="avatar">\n' +
        '<div class="avatar-icon"></div>\n' +
        '<div class="avatar-ok"></div>\n' +
        '<div class="avatar-wait"></div>\n' +
        '<div class="avatar-disconnected"></div>\n' +
        ' <div class="avatar-number">1</div>\n' +
        '<div class="avatar-me"></div>\n' +
        '<div class="avatar-leader"></div>\n' +
        '<div class="avatar-character"></div>\n' +
        '<div class="avatar-name"><span onmouseenter="display_name(this)" onmouseleave="hide_name(this)">无</span></div>\n' +
        '</div>';
    let avatar_str;
    for(let i=0;i<5;i++)
        avatar_str+=avatar_element;
    $(".avatars")[0].innerHTML=avatar_str;
    $(".avatars")[1].innerHTML=avatar_str;
}
