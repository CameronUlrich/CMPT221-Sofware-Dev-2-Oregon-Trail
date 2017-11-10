function gameScreen(screenNumber) {
var gameContainer = document.getElementById("gameContainer");
// make async call to server to get requested gameScreen html
fetch('/game/getNewGameScreen/' + screenNumber).then(function(response) {
if (response.status !== 200) {
console.log('problem with ajax call! ' + response.status + " msg: " +
response.value);
return;
}
response.text().then(function(data) {
// send the html returned back to the
//console.log("received back: " + data);
gameContainer.innerHTML = data;
})
});
}

gameScreen(0);


  


        
                 
 



                  document.onkeypress = function (e) {
    if (e.keyCode === 32) {
        window.location.replace("/mainmenu");
        console.log("spacebar pressed");
    }
  }
  
