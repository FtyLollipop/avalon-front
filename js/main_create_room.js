function bind_create_room_controller(){
    $("#create-room-button").on("click",function(){
        $("#create-room-box").show();
        $("#create-room-cover").show();
    })

    $("#cancel-create-button").on("click",function(){
        $("#create-room-box").hide();
        $("#create-room-cover").hide();
    })
}
