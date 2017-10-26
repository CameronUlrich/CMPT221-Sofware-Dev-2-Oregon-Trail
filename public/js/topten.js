 document.onkeypress = function (e) {
    if (e.keyCode === 32) {
        window.location.replace("/mainmenu");
        console.log("spacebar pressed");
    }
  }
var name = new Array("Cameron", "Buddy", "Ron", "Kuz", "Mike", "Brendan", "Jacob", "Ben", "Campbell", "Matt");
          var score = new Array(11, 2301, 230, 100, 30, 24, 15, 14, 1, 0);
          score.sort(function(a, b){return b - a});
          var date = new Array("10/18/2017", "10/18/2017", "10/18/2017", "10/18/2017", "10/18/2017", "10/18/2017", "10/18/2017", "10/18/2017", "10/18/2017", "10/18/2017");