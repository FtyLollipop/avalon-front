function choose_member(str,clickable_players,num){
    inform("请选择玩家");
    let avatars=$(".avatar");   //所有玩家头像
    let chosen;                 //已选择的玩家数组（数组对应元素为1）
    let chosen_num=0;           //已选择玩家的数量
    for(let i=0;i<10;i++)   //初始化已选择玩家数组
        chosen[i]=0;

    for(let i;i<clickable_players.length;i++)   //玩家编号转数组下标
        clickable_players[i]++;

    for(let i in clickable_players){
        if(!clickable_players.hasOwnProperty(i)) continue;
        avatar_clickable(avatars[i],function click_func(){  //使对应玩家头像可点击
            if(chosen[i]===0){  //点击的玩家未被选择
                avatars[i].addClass("avatar-chosen");
                chosen[i]=1;
                if(++chosen_num===num){ //已选择足够的玩家数量
                    inform_confirm_clickable(function(){    //确定按钮可点击
                        let data_return;
                        for(let j=0;j<10;j++)
                            if(chosen[j]===1)
                                data_return=data_return.concat([j+1]);
                        ChosenPlayers=data_return;
                    });
                    for(let i in clickable_players){
                        if(!clickable_players.hasOwnProperty(i)) continue;
                        if(chosen_num[i]===0)
                            avatar_not_clickable(avatars[i]);
                    }
                }
            } else{ //点击的玩家已被选择
                avatars[i].removeClass("avatar-chosen");
                chosen[i]=0;
                if(num===chosen_num--){ //取消选择后数量刚好不足
                    inform_confirm_not_clickable();
                    for(let i in clickable_players){
                        if(!clickable_players.hasOwnProperty(i)) continue;
                        if(chosen_num[i]===1)
                            avatar_clickable(avatars[i],click_func());
                    }
                }
            }
        })
    }
}
