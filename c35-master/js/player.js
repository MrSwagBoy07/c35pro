class Player {
    constructor(){

    }
    getcount(){
        var countref=database.ref('playerCount');
        countref.on("value",function(data){
         playerCount=data.val();
        }) 
    }
    updatecount(count){
        database.ref('/').update({
            playerCount:count
        })
    }
    update(name){
        var playerIndex="player"+playerCount
        database.ref(playerIndex).set({
        name:name
        })
    }
}