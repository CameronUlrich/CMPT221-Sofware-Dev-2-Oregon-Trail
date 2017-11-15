var exports = module.exports = {};
// Create an empty array to contain our screens
exports.startGameScreens = [];
exports.saveProfession = [];
exports.savePlayerName = [];
exports.saveStartMonth = [];
exports.getSettings = [];
// create a string that will contain the first screen HTML

function gameSettings(){
	this.playerNames = [];
	this.profession = "";
	this.startMoney = 0;
	this.startMonth = "";
}


var professions = '{ "Profession" : [' +
'{ "profession": }]}';

var playerNames = '{ "playerNames" : [' +
'{ "firstName": },' +
'{ "firstName": },' +
'{ "firstName": } ]}';

var settings = '{ "playerNames" : [' +
'{ "firstName": },' +
'{ "firstName": },' +
'{ "firstName": } ]}';

/*var startGame1 = "<a href=>Be a banker from Boston</a><br>"
			+ "<a href=>Be a carpenter from Ohio</a><br>"
			+ "<a href=>Be a farmer from Illinois</a><br>"
			+ "<a href=>Find out the differences between the choices</a><br>";
			exports.startGameScreens.push(startGame1);
*/



var startGame1 = "<p>Many kinds of people made the trip trip to Oregon.</p>"
+ "<p>You may:</p>"
+ "<ol id=\"setupQuestions1\" >"
+ "<li id=\"bankerMenuItem\">Be a banker from Boston</li>"
+ "<li id=\"carpenterMenuItem\">Be a carpenter from Ohio</li>"
+ "<li id=\"farmerMenuItem\">Be a farmer from Illinois</li>"
+ "<li id=\"differencesMenuItem\">Find out the differences between the choices</li>"
+ "</ol>"
+ "<div id=\"selectedOption\">What is your choice?</div>";
// add our screen to the exports so it is available
exports.startGameScreens.push(startGame1);




var startGame2 = 
+ "<ol id=\"GetProfession1\" >"
+ "<li id=\"WagonLeaderName\">What is the first name of the Wagon Leader?</li>"
+ "<input name=\"WagonLeaderNameInput\">What is the first name of the Wagon Leader?</li><br />"
+ "<button test=\"WagonLeaderNameButton\">Next</li>"
+ "</ol>"
// add our screen to the exports so it is available
exports.startGameScreens.push(startGame2);



var startGame3 = 
+ "<ol id=\"GetNames1\" >"
+ "<li id=\"WagonPartyNames\">What are the names of the other members of your party?</li><br />"
+ "<input name=\"WagonLeaderNameInput1\">What is the first name of the Wagon Leader?</li><br />"
+ "<input name=\"WagonLeaderNameInput2\">What is the second name of the Wagon Leader?</li><br />"
+ "<input name=\"WagonLeaderNameInput3\">What is the third name of the Wagon Leader?</li><br />"
+ "<input name=\"WagonLeaderNameInput4\">What is the fourth name of the Wagon Leader?</li>"
+ "</ol>"
// add our screen to the exports so it is available
exports.startGameScreens.push(startGame3);

var startGame4 = 
+ "<ol id=\"GetDifferences\" >"
+ "<li id=\"GetDifferencesText\">What are the names of the other members of your party?</li>"
+ "</ol>"
// add our screen to the exports so it is available
exports.startGameScreens.push(startGame4);


//var saveProfession1 = professions;
// add our screen to the exports so it is available
//exports.saveProfession.push(saveProfession1);

var savePlayerName1 = "<p>Many kinds of people made the trip trip to Oregon.</p>";
// add our screen to the exports so it is available
exports.savePlayerName.push(savePlayerName1);

var saveStartMonth1 = "<p>Many kinds of people made the trip trip to Oregon.</p>";
// add our screen to the exports so it is available
exports.saveStartMonth.push(saveStartMonth1);

var saveSettings1 = settings;
// add our screen to the exports so it is available
exports.getSettings.push(saveSettings1);

