var GameScreen = function () {
	// Set up the game canvas
	var gameScreen = document.getElementById('game-screen');	// Get the canvas
	var ctx = gameScreen.getContext('2d');						// Get the context
	var screenWidth = 600;										// Set the width of the screen
	var screenHeight = 400;										// Set the height of the screen
	var graphicObjects = [];									// List with all the objects that have graphics
	
	//
	// LOGIC
	//

	this.logic = function () {
		//
		console.log("I am the gamescreen");
	}

	//
	//	GRAPHIC
	//

	this.getHeight = function () {
		return screenHeight;
	}
	this.getWidth = function () {
		return screenWidth;
	}

	this.context = function () {
		return ctx;
	}
}