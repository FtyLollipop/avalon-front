function bind_profile_controller(){
    $("#avatar").css("background","url('https://www.gravatar.com/avatar/"+$.md5(CurrentPlayer.username)+"?s=300&d=mp')").css("background-size","contain");
    $("#display-name").html(CurrentPlayer.display_name);

    $("#edit-button").on("click",function(){
        $("#edit-button").hide();
        $("#save-button").show();
        $("#display-name").hide();
        $("#display-name-input").val(CurrentPlayer.display_name).show();
        show_cancel_edit_button();
        $("#avatar").css("cursor","pointer").attr("title","您的头像与同邮箱下的Gravatar头像同步").on("click",function(){window.open("https://gravatar.com/")});
    });

    $("#save-button").on("click",function(){
        $("#save-button").hide();
        $("#edit-button").show();
        $("#display-name-input").hide();
        $("#display-name").show();
        hide_cancel_edit_button()
        $("#avatar").css("cursor","auto").removeAttr("title").unbind("click");
    });
}

function show_cancel_edit_button(){
    $("#profile-box-inner").css({"width":$("#profile-box-inner").css("width")});
    $("#profile-box").stop().animate({"width":"50%"},200,"swing",function(){
        $("#profile-box-inner").css({"width":"100%"});
    });
}

function hide_cancel_edit_button(){
    $("#profile-box-inner").css({"width":$("#profile-box-inner").css("width")});
    $("#profile-box").stop().animate({"width":"40%"},200,"swing",function(){
        $("#profile-box-inner").css({"width":"125%"});
    });
}
