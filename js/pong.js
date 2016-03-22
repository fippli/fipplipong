
var pong = function () {
	var gameState 	= new GameState();					// Class to handle which state the game is in
	var gameScreen 	= new GameScreen();					// Get the HMTL5 canvas
	var gameSnd 	= new GameSound();					// Game sounds
	var P1 			= new Player(gameScreen);			// Player object
	var P2			= new Player(gameScreen);
	var playerInput = new PlayerInput();				// Get the user interaction
	var background 	= new Background(gameScreen, P1, P2);		// Get the background object
	var ball		= new Ball(gameScreen, P1, P2);
	//var gameSound = new GameSound();					// Get the game sounds

	// Init player 1
	P1.setY((gameScreen.getHeight()-P1.getHeight())/2);
	// Init player 2
	P2.setX(gameScreen.getWidth()-P2.getWidth());
	P2.setY((gameScreen.getHeight()-P2.getHeight())/2);

	// The game loop:
	var gameLoop = function () {
		//
		// LOGIC
		//
		playerInput.getInput(gameState, P1, P2);					// Get if the key is pressed

		
		switch (gameState.getState()) {
			case "MENU":
				// Nothing so far
				break;
			case "MAIN":
				background.logic();									// Execute background logic
				P1.logic();
				P2.logic();
				ball.logic(gameSnd);
				
				break;
			case "GAMEOVER":
				// Nothing happens here so far ;)
				break;
		}
		

		//
		// GRAPHIC
		//
		
		switch (gameState.getState()) {
			case "MAIN":
				background.graphics(gameState);						// Animate background
				P1.graphics();										// Animate player 1
				P2.graphics();										// Animate player 2
				ball.graphics();

				break;

			case "GAMEOVER":
				background.graphics(gameState);	// Switch to gameover screen
				//gameSound.stopGameSound();							// Stop the gamesound
				break;
		}
		
		//
		//	Go for the next loop
		//
		
		if (gameState.getRun() === true) {
			requestAnimationFrame(gameLoop);			// Request to do this again ASAP
		} else {
			// Push the score to server


			//
			// RESET GAME
			//
			console.log("RESETTING");
			background.reset();							// Reset background values
			player.reset();								// Reset player values
			gameState.reset();							// Reset game state values
			bubbles.reset();							// Reset the bubbles
			sunlights.reset();							// Reset the sunlight values
			gameSound.reset();							// Reset the gamesound
			
			// Loop the game again
			requestAnimationFrame(gameLoop);			// Request to do this again ASAP
		}
		
		
	}

	gameLoop();
	//gameSnd.stopGameSound();

	// Get the score
	/*
	this.getScore = function () {
		return player.getPoints();
	}

	// Set the score
	this.setHighScore = function (value) {
		gameState.setHighScore(value);
	}
	*/
}

pong();





