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





/*

	       function saveProfession(profession)
	    {

		fetch('/game/saveProfession/' + profession).then(function(response)
		{

			if(response.status !== 200) 
			{

				console.log('problem with ajax call!' + response.status + " msg: " + 
					response.value);
				return;
			}
			response.text().then(function(data)

		}
	      };



gameContainer.addEventListener("click".function(e){
	var targetElement = event.target || event.arcElement;
	if(currentScreen == 0){
		if(targetElement.id == "bankerMenuItem"){
			saveProfession("banker");
			currentScreen++;
			gameScreen();
		}
		if(targetElement.id == "carpenterMenuItem"){
			saveProfession("carpenter");
			currentScreen++;
			gameScreen();
		}
		if(targetElement.id == "farmerMenuItem"){
			saveProfession("farmer");
			currentScreen++;
			gameScreen();
		}
	}
}

function savePlayerName(playerName){
	fetch('/game/savePlayerName/' + playerName).then(function(response){
		if(response.status !== 200) {
			console.log('problem with ajax call!' + response.status + " msg: " + 
				response.value);
			return;
		}
		response.text().then(function(data)
			
	}
};


gameContainer.addEventListener("click".function(e){
	var targetElement = event.target || event.arcElement;
	if(currentScreen == 1){
		if(e.target.id == "bankerMenuItem"){
			saveProfession("banker");
			currentScreen++;
			gameScreen();
		}
		if(e.target.id == "carpenterMenuItem"){
			saveProfession("carpenter");
			currentScreen++;
			gameScreen();
		}
		if(e.target.id == "farmerMenuItem"){
			saveProfession("farmer");
			currentScreen++;
			gameScreen();
		}
	}
});


*/
var setupQuestions1 = document.getElementById("setupQuestions1");
var bankerMenuItem = document.getElementById("bankerMenuItem");

window.onload = function(){
	
}
var currentScreen = 0;
var text;

document.getElementById("gameContainer").addEventListener("click", function(e){
		if(currentScreen == 0)
		{
			if(e.target.id == "bankerMenuItem"){
				gameScreen(1);
		        currentScreen++;
		        fetch('/game/saveProfession/' + "banker");
			}


			if(e.target.id == "carpenterMenuItem"){
				gameScreen(1);
		        currentScreen++;
		        fetch('/game/saveProfession/' + "carpenter");
			}

			if(e.target.id == "farmerMenuItem"){
				gameScreen(1);
		        currentScreen++;
		        fetch('/game/saveProfession/' + "farmer");
			}

			
			
		    }

		if(currentScreen == 1)
		{
			if(e.target.id == "WagonLeaderNameButton"){
				gameScreen(2);
		        currentScreen++;
		        fetch('/game/savePlayerName/' + '1/' + 'WagonLeaderNameInput');
			}

			

			
			
		    }

		if(currentScreen == 2)
		{
			if(e.target.id == "WagonPartyNameButton"){
				gameScreen(3);
		        currentScreen++;
		        fetch('/game/savePlayerName/' + '2/' + 'WagonPartyNameInput1');
		        fetch('/game/savePlayerName/' + '3/' + 'WagonPartyNameInput2');
		        fetch('/game/savePlayerName/' + '4/' + 'WagonPartyNameInput3');
		        fetch('/game/savePlayerName/' + '5/' + 'WagonPartyNameInput4');
			}

			

			
			
		    }
		if(currentScreen == 3)
		{
			if(e.target.id == "marchItem"){
				gameScreen(4);
		        currentScreen++;
		        fetch('/game/saveStartMonth/' + "march");
			}

			if(e.target.id == "aprilItem"){
				gameScreen(4);
		        currentScreen++;
		        fetch('/game/saveStartMonth/' + "april");
			}

			if(e.target.id == "mayItem"){
				gameScreen(4);
		        currentScreen++;
		        fetch('/game/saveStartMonth/' + "may");
			}

			if(e.target.id == "juneItem"){
				gameScreen(4);
		        currentScreen++;
		        fetch('/game/saveStartMonth/' + "june");
			}

			if(e.target.id == "julyItem"){
				gameScreen(4);
		        currentScreen++;
		        fetch('/game/saveStartMonth/' + "july");
			}

			
			
		    }

		});





			
			document.body.addEventListener("keydown", function (event) {
		    if (event.keyCode === 49)  {
		    	if(currentScreen == 0){
		        gameScreen(1);
		        currentScreen++;
		        fetch('/game/saveProfession/' + "banker");
		    }


		    }
		});

			document.body.addEventListener("keydown", function (event) {
		    if (event.keyCode === 50) {
		    	if(currentScreen == 0){
		        gameScreen(1);
		        currentScreen++;
		        fetch('/game/saveProfession/' + "carpenter");
		    }
		}
		});

			document.body.addEventListener("keydown", function (event) {
		    if (event.keyCode === 51) {
		    	if(currentScreen == 0){
		        gameScreen(1);
		        currentScreen++;
		        fetch('/game/saveProfession/' + "farmer");
		    }
		}
		});

			

		


		
			
			document.body.addEventListener("keydown", function (event) {
		    if (event.keyCode === 49) {
		    	if(currentScreen == 3){
		        gameScreen(4);
		        currentScreen++;
		        fetch('/game/saveStartMonth/' + "march");
		        }

		    }
		});

			document.body.addEventListener("keydown", function (event) {
		    if (event.keyCode === 50) {
		    	if(currentScreen == 3){
		        gameScreen(4);
		        currentScreen++;
		        fetch('/game/saveStartMonth/' + "april");
		    }
		}
		});

			document.body.addEventListener("keydown", function (event) {
		    if (event.keyCode === 51) {
		    	if(currentScreen == 3){
		        gameScreen(4);
		        currentScreen++;
		        fetch('/game/saveStartMonth/' + "may");
		    }
		}
		});

			document.body.addEventListener("keydown", function (event) {
		    if (event.keyCode === 52) {
		    	if(currentScreen == 3){
		        gameScreen(4);
		        currentScreen++;
		        fetch('/game/saveStartMonth/' + "june");
		    }
		}
		});

			document.body.addEventListener("keydown", function (event) {
		    if (event.keyCode === 53) {
		    	if(currentScreen == 3){
		        gameScreen(4);
		        currentScreen++;
		        fetch('/game/saveStartMonth/' + "july");
		    }
		}
		});

			

		
/*
			document.body.addEventListener("keydown", function (event) {
		    if (event.keyCode === 50) {
		        gameScreen(1);
		        currentScreen++;
		    }
		});

			document.body.addEventListener("keydown", function (event) {
		    if (event.keyCode === 51) {
		        gameScreen(1);
		        currentScreen++;
		    }
		});

			document.body.addEventListener("keydown", function (event) {
		    if (event.keyCode === 52) {
		        gameScreen(1);
		        currentScreen++;
		    }
		});

		}

		if(currentScreen == 1)
		{
			
			document.body.addEventListener("keydown", function (event) {
		    if (event.keyCode === 49) {
		        gameScreen(1);
		        currentScreen = gameScreen(1);


		    }
		});

			document.body.addEventListener("keydown", function (event) {
		    if (event.keyCode === 50) {
		        gameScreen(1);
		        currentScreen = gameScreen(1);
		    }
		});

			document.body.addEventListener("keydown", function (event) {
		    if (event.keyCode === 51) {
		        gameScreen(1);
		        currentScreen = gameScreen(1);
		    }
		});

			document.body.addEventListener("keydown", function (event) {
		    if (event.keyCode === 52) {
		        gameScreen(1);
		        currentScreen = gameScreen(1);
		    }
		});

		}

*/

/*switch(button) {
    case bankerMenuItem:
        text = "bankerMenuItem";

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
*/










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
 




document.getElementById("gameContainer").onclick = function() {myFunction()};

function myFunction() {
    document.getElementById("bankerMenuItem").innerHTML = gameScreen(1);
}
document.body.addEventListener("keydown", function (event) {
    if (event.keyCode === 49) {
        gameScreen(2);
    }
});
*/
document.onkeypress = function (e) {
    if (e.keyCode === 32) {
        gameScreen(0);
        console.log("spacebar pressed");
    }
  }
  
