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


window.onload = function(){

var text;
var button = document.getElementById("setupQuestions1").value;

switch(button) {
    case "bankerMenuItem":
        
        console.log("Test");
        myFunction();
    
        break;
    case "carpenterMenuItem":
        text = "carpenterMenuItem";
        myFunction();
        break;
    case "farmerMenuItem":
        text = "farmerMenuItem";
        myFunction();
        break;
    case "differencesMenuItem":
        text = "differencesMenuItem";
        myFunction();
        break;
}

}




function myFunction() {
window.onload = function(){
var button = document.getElementById("bankerMenuItem");
button.onclick = function(){
	gameScreen(1);
  //do stuff
}
}
  }
/*



window.onload = function(){
var button1 = document.getElementById("carpenterMenuItem");
button1.onclick = function(){
	gameScreen(2);
  //do stuff
}  
}

window.onload = function(){
var button2 = document.getElementById("farmerMenuItem");
button2.onclick = function(){
	gameScreen(3);
  //do stuff
}  
}

window.onload = function(){
var button3 = document.getElementById("differencesMenuItem");
button3.onclick = function(){
	gameScreen(4);
  //do stuff
}  
}
         
}
 





document.body.addEventListener("keydown", function (event) {
    if (event.keyCode === 49) {
        gameScreen(1);
    }
});
*/
document.onkeypress = function (e) {
    if (e.keyCode === 32) {
        gameScreen(0);
        console.log("spacebar pressed");
    }
  }
  
