window.onload=function(){
    setInterval(function(){
        screenHeight=window.innerHeight;
        screenWidth=window.innerWidth;
        if(screenHeight<screenWidth*0.75){
            $("#ui-box").css("height",screenHeight);
            $("#ui-box").css("width",Math.floor(screenHeight*(4/3)));
        }else{
            $("#ui-box").css("width",screenWidth);
            $("#ui-box").css("height",screenWidth*0.75);
        }

    },100);
};