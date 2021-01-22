        class Game{
            constructor(){

            }
        getState(){
            var getStateRef=database.ref('gameState')
            getStateRef.on("value",function(data){
            gameState =data.val();
            })

        }
        update(state){
            database.ref('/').update({
                gameState:state
            })
        }
        async start(){
            if(gameState===0){
                player=new Player();
                var playerCountRef=await database.ref('playerCount').once("value");
                if(playerCountRef.exists()){
                playerCount=playerCountRef.val();
                player.getCount()

                }
        
                form=new Form();
                form.display();
            }
        }
        play(){
            form.hide();
            textSize(30);
            text("Game start",120,100);
            player.getPlayerInfo();
            if(allPlayers!==undefined){
            var displayP=130;
    
            for(var plr in allPlayers){
            if(plr==="player"+player.index){
                fill("red")
            }
            else{
                fill("black")
            }

            displayP+=20;
            textSize(15);
            text(allPlayers[plr].name+":"+allPlayers[plr].distance,120,displayP);

            }
    
            }
            }











        }