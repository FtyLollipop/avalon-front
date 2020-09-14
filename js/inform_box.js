function inform(str){
    $("#inform-text").html(str);
}

function inform_vote(mode,func_1,func_2){
    if(mode===1){
        $("#vote-agree").html("同意");
        $("#vote-against").html("反对");
    }else{
        $("#vote-agree").html("成功");
        $("#vote-against").html("失败");
    }

    $("#inform-box").addClass("inform-vote");
    $("#vote-agree").off().on("click",func_1());
    $("#vote-against").off().on("click",func_2());
    $("#inform-box").removeClass("inform-vote");
}

function inform_confirm(func){
    $("#inform-box").addClass("inform-confirm");
    func();
}

function inform_confirm_clickable(func){
    $("#confirm-button").on("click",function(){
        func();
        $("#confirm-box").removeClass("inform-confirm");
    }).stop().addClass("confirm-clickable").animate({"background-color":"#ffc765","box-shadow":"2px 2px 2px 2px #9b7248"},50);
}

function inform_confirm_not_clickable(){
    $("#confirm-button").off().stop().removeClass("confirm-clickable").animate({"background-color":"#a7a199","box-shadow":"2px 2px 2px 2px #85796c"},50);
}
