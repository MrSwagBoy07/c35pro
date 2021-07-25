class Form {
    constructor(){

    }
   display(){
    var title=createElement('h4');
    title.html("multiplayer game");
    title.position(200,100);
    var input=createInput("name");
    var button=createButton('hit me');
    var greeting=createElement('h5');
    input.position(200,200);
    button.position(300,300);
    button.mousePressed(function(){
        input.hide();
        button.hide();
        var name=input.value();
        playerCount+=1;
        player.update(name);
        player.updatecount(playerCount);
        greeting.html("hello"+name);
        greeting.position(300,300);
    })
   } 
}