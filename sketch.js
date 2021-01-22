var database,playerCount,gameState=0;
var form,player,game;
var allPlayers;

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(400,400);
  game=new Game();
  game.getState();
  game.start();
  
}

function draw(){
if(playerCount===4){
	game.update()
}
  if(gameState===1){
		clear();
		game.play();
  }
}


