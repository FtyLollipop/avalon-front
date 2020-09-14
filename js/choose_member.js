function choose_member(str,clickable_players,num){
    inform("请选择玩家");
    let avatars=$(".avatar");
    let chosen;
    let chosen_num=0;
    for(let i=0;i<10;i++)
        chosen[i]=0;

    for(let i in clickable_players){
        avatar_clickable(avatars[i],function click_func(){
            if(chosen[i]===0){
                avatars[i].addClass("avatar-chosen");
                chosen[i]=1;
                if(++chosen_num===num)
                    for(let i in clickable_players)
                        if(chosen_num[i]===0)
                            avatar_not_clickable(avatars[i]);
            } else{
                avatars[i].removeClass("avatar-chosen");
                chosen[i]=0;
                if(num===chosen_num--)
                    for(let i in clickable_players)
                        if(chosen_num[i]===1)
                            avatar_clickable(avatars[i],click_func());
            }
        })
    }

    inform_confirm(function(){
        for(let i in clickable_players){

        }
    });
}
