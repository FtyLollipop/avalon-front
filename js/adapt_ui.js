function adapt_ui(){
    ScreenHeight=window.innerHeight;
    ScreenWidth=window.innerWidth;
    if(ScreenHeight<ScreenWidth*0.75){
        $(".ui-box").css("height",ScreenHeight);
        $(".ui-box").css("width",Math.floor(ScreenHeight*(4/3)));
    }else{
        $(".ui-box").css("width",ScreenWidth);
        $(".ui-box").css("height",ScreenWidth*0.75);
    }
}
