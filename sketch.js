var gameState=0;
var playerCount;
var Database;
var form, player, game;

function setup(){
    database=firebase.database()
    game=new Game()
    game.getState()
    game.start()
    createCanvas (400,400)
}

function draw(){
    
}

