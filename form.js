class Form{
    constructor(){
     var input=createInput("name");
     var button=createButton('play');
     var greetings=createElement('h3');
    }
    hide(){
     this.input.hide();
     this.button.hide();
     this.greetings.hide();

    }
    display(){
        var title=createElement('h2')
        title.html("car racing game?");
        title.position(350,100);
       
        this.input.position(350,260);
        
        this.button.position(350,300);
        
        this.button.mousePressed(function(){
            this.input.hide();
            this.button.hide();
            player.name=this.input.value();
            playerCount+=1;
            player.index=playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greetings.html("hello whats up!"+player.name);
            this.greetings.position(350,260)
        })
    }
}