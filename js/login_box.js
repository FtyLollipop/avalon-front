function bind_login_controller(){
    $("#login-button").on("click",function(){
        $.ajax({
            type:"post",
            url:apiUrl+"/login",
            data:{
                userName:$("#login-user-name").val(),
                userPassword:$.md5($("#login-password").val()),
                captchaCode: $("#login-captcha-box").attr("code"),
                captchaResult:$("#login-captcha").val()
            },
            dataType:"json",
            success:function(data){
                if(data.status==="true"){
                    $("#login-tip").html("登录成功");
                    $.cookie("token",data.content);
                    window.location.replace("main.html");
                }else{
                    $("#login-tip").html(data.content);
                }
                console.log(data);
            }
        })
    })

    $("#register-button").on("click",function(){
        let userName=$("#register-user-name").val();
        let userPassword=$("#register-password").val();
        let confirmPassword=$("#register-confirm-password").val();
        let captchaCode=$("#register-captcha-box").attr("code");
        let captchaResult=$("#register-captcha").val();
        if(userPassword!==confirmPassword){
            $("#register-tip").html("两次输入的密码不相同");
            return;
        }
        if($("#register-user-agreement-box").hasClass("checked")===false){
            $("#register-tip").html("请先阅读并同意用户协议。。。。。。。。。。。。。。。。。。。");
            return;
        }
        $.ajax({
            type:"post",
            url:apiUrl+"/register",
            data:{
                userName:userName,
                userPassword:$.md5(userPassword),
                captchaCode: captchaCode,
                captchaResult:captchaResult
            },
            dataType:"json",
            success:function(data){
                console.log(data);
                if(data.status==="true"){
                    $("#register-user-name").val("");
                    $("#register-password").val("");
                    $("#register-confirm-passwordpassword").val("");
                    $("#register-captcha-box").attr("code","");
                    $("#register-captcha-img").css("background-image","");
                    $("#register-captcha").val("");
                    alert("注册成功，请登录");
                    $("#switch-to-login").click();
                }else{
                    $("#register-tip").html(data.content);
                }
            }
        })
    })
}

function bind_login_box_animation(){
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

    $("#login-button").on("mouseenter",function(){
        $(this).stop().animate({"border-radius":"0.3em"},300);
    })

    $("#login-button").on("mouseout",function(){
        $(this).stop().animate({"border-radius":"1.2em"},300);
    })

    $("#register-button").on("mouseenter",function(){
        $(this).stop().animate({"border-radius":"0.3em"},300);
    })

    $("#register-button").on("mouseout",function(){
        $(this).stop().animate({"border-radius":"1.2em"},300);
    })

    $("#register-user-agreement-checkbox").on("click",function(){
        if($("#register-user-agreement-box").hasClass("checked"))
            $("#register-user-agreement-checkbox").stop().animate({"opacity":0.3},50,"swing",function(){
                $("#register-user-agreement-box").removeClass("checked");
            });
        else{
            $("#register-user-agreement-box").addClass("checked");
            $("#register-user-agreement-checkbox").stop().animate({"opacity":1},100);
        }

    })

    $("#register").hide();

    $("#switch-to-register").on("click",function (){
        $("#register").show();
        $("#login-box-slider").css("height",$("#login-box-slider").css("height"));
        $("#login-box").stop().animate({"height":"65%"},300);
        $("#login-box-slider").stop().animate({"left":"-100%"},300,"swing",function(){
            $("#login").hide();
            $("#login-box-slider").css("height","100%");
        });
    })

    $("#switch-to-login").on("click",function (){
        $("#login").show();
        $("#login-box-slider").css("height",$("#login-box-slider").css("height"));
        $("#login-box").stop().animate({"height":"50%"},300);
        $("#login-box-slider").stop().animate({"left":"0"},300,"swing",function(){
            $("#register").hide();
            $("#login-box-slider").css("height","130%");
        });
    })

    $("#user-agreements").on("click",function(){
        window.open("user_agreements.html");
    })
}

let loginTipThread
function login_tip_set(val,str){
    clearTimeout(loginTipThread);
}

let registerTipThread
function register_tip_set(val,str){

}
