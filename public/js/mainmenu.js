// music
var audio = new Audio('/music/MotivationalCinematicBackgroundMusicRoyaltyFree.mp3');

function checkSound() {
    
    var currentSound = sessionStorage.getItem('soundStatus');
    
    console.log(currentSound);
    if (currentSound == "true") {
        // start music
        audio.play();
    } else {
        // Stop the music
        audio.pause();
    }
    
}
checkSound();

function toggleSound() {
    var currentSound = sessionStorage.getItem('soundStatus');
    if(currentSound == "true") {
        currentSound = "false";
    }
    else {
        currentSound = "true";
    }
    console.log(currentSound);
    sessionStorage.setItem('soundStatus', currentSound)

    var myElement = document.getElementById("soundMenuItem");
    myElement.innerHTML = "Turn Sound " + (currentSound ? "Off" : "On &nbsp;&nbsp;"); 
    
    //(window["isSoundOn"]) ? isSoundOn = true : isSoundOn = false;
    checkSound();

}


document.body.addEventListener("keydown", function (event) {
    if (event.keyCode === 49) {
        window.location.replace("/game");
    }
});

document.body.addEventListener("keydown", function (event) {
    if (event.keyCode === 50) {
        window.location.replace("/topten");
    }
});
  

 document.body.addEventListener("keydown", function (event) {
    if (event.keyCode === 52) {
        checkSound()
        toggleSound();
    }
});


  
