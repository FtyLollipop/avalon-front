function login(){
    console.log($("#login-user-name").val());
    $.ajax({
        type:"post",
        url:apiUrl+"/login",
        data:{
            userName:$("#login-user-name").val(),
            userPassword:$("#login-password").val()
        },
        dataType:"json",
        success:function(data){
            alert(data.username+"登录成功");
            console.log(data);
        }
    })
}

function register(){
    $.ajax({
        type:"post",
        url:apiUrl+"/register",
        data:{
            userName:$("#register-user-name").val(),
            userPassword:$("#register-password").val()
        },
        dataType:"json",
        success:function(data){
            alert(data.username+"注册成功");
            console.log(data);
        }
    })
}
