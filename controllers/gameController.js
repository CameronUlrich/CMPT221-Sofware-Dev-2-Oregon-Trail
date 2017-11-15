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
	this.startMoney = 1500;
	this.startMonth = "";
}
exports.getSettings.push(gameSettings);


var professions = '{ "Profession" : [' +
'{ "profession": }]}';

var playerNames = '{ "playerNames" : [' +
'{ "firstName": },' +
'{ "firstName": },' +
'{ "firstName": } ]}';

var startMoney = '{ "Start Money" : [' +
'{ "startMoney": }]}';

var startMonth = '{ "Start Month" : [' +
'{ "startMonth": }]}';

var settings = professions + playerNames + startMoney + startMonth;

/*var startGame1 = "<a href=>Be a banker from Boston</a><br>"
			+ "<a href=>Be a carpenter from Ohio</a><br>"
			+ "<a href=>Be a farmer from Illinois</a><br>"
			+ "<a href=>Find out the differences between the choices</a><br>";
			exports.startGameScreens.push(startGame1);
*/



var startGame1 = "<p>Many kinds of people made the trip trip to Oregon.</p>"
+ "<p>You may:</p>"
+ "<ol id=\"setupQuestions1\" >"
+ "<li id=\"bankerMenuItem\">Be a banker from Boston</li><br />"
+ "<li id=\"carpenterMenuItem\">Be a carpenter from Ohio</li><br />"
+ "<li id=\"farmerMenuItem\">Be a farmer from Illinois</li><br />"
+ "<li id=\"differencesMenuItem\">Find out the differences between the choices</li><br />"
+ "</ol>"
+ "<div id=\"selectedOption\">What is your choice?</div>";
// add our screen to the exports so it is available
exports.startGameScreens.push(startGame1);




var startGame2 = 
+ "<ol id=\"GetProfession1\" >"
+ "<li id=\"WagonLeaderName\">What is the first name of the Wagon Leader?</li><br />"
+ "<input id=\"WagonLeaderNameInput\">What is the first name of the Wagon Leader?</li><br />"
+ "<button id=\"WagonLeaderNameButton\">Next</li>"
+ "</ol>"
// add our screen to the exports so it is available
exports.startGameScreens.push(startGame2);



var startGame3 = 
+ "<ol id=\"GetNames1\" >"
+ "<li id=\"WagonPartyNames\">What are the names of the other members of your party?</li><br />"
+ "<input id=\"WagonPartyNameInput1\">What is the first name of the Wagon Leader?</li><br />"
+ "<input id=\"WagonPartyNameInput2\">What is the second name of the Wagon Leader?</li><br />"
+ "<input id=\"WagonPartyNameInput3\">What is the third name of the Wagon Leader?</li><br />"
+ "<input id=\"WagonPartyNameInput4\">What is the fourth name of the Wagon Leader?</li><br />"
+ "<button id=\"WagonPartyNameButton\">Next</li>"
+ "</ol>"
// add our screen to the exports so it is available
exports.startGameScreens.push(startGame3);

var startGame4 = 
+ "<ol id=\"GetMonth1\" >"
+ "<li id=\"GetMonthText\">The year is 1848. You are leaving from Missouri. When do you want to leave Missouri?</li>"
+ "<ol id=\"setupQuestionsMonth\" ><br />"
+ "<li id=\"marchItem\">March</li><br />"
+ "<li id=\"aprilItem\">April</li><br />"
+ "<li id=\"mayItem\">May</li><br />"
+ "<li id=\"juneItem\">June</li><br />"
+ "<li id=\"julyItem\">July</li><br />"
+ "</ol>"
+ "<div id=\"selectedOptionMonth\">What is your choice?</div>";

// add our screen to the exports so it is available
exports.startGameScreens.push(startGame4);


var startGame5 = "<p>Congratulations! You are ready to start your journey!</p>"
+ "<p>Here are your settings you set for this game:</p>"
+ "<ol id=\"playerSettings\" >"
+ "<li id=\"wagonLeaderNameSetting\">Wagon Leader: </li><br />"
+ "<li id=\"memberName1\">Member: </li><br />"
+ "<li id=\"memberName2\">Member: </li><br />"
+ "<li id=\"memberName3\">Member: </li><br />"
+ "<li id=\"memberName4\">Member: </li><br />"
+ "<li id=\"professionSetting\">Your Profession: </li><br />"
+ "<li id=\"bankSetting\">Current Bank account: 1500</li><br />"
+ "<li id=\"monthSetting\">Month leaving: </li><br />"
+ "</ol>"

exports.startGameScreens.push(startGame5);
var saveProfession1 = professions;
// add our screen to the exports so it is available
exports.saveProfession.push(saveProfession1);

var savePlayerName1 = "<p>Many kinds of people made the trip trip to Oregon.</p>";
// add our screen to the exports so it is available
exports.savePlayerName.push(savePlayerName1);

var saveStartMonth1 = "<p>Many kinds of people made the trip trip to Oregon.</p>";
// add our screen to the exports so it is available
exports.saveStartMonth.push(saveStartMonth1);

var saveSettings1 = settings;
// add our screen to the exports so it is available
exports.getSettings.push(saveSettings1);

