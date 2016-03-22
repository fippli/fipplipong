var GameSound = function () {
	var music = new Audio(); // buffers automatically when created
	music.src = "res/snd/music.wav";
	music.volume = 0.2;
	
	music.addEventListener('ended', function () {
		this.currentTime = 0;
    	this.play();
	}, false);
	
	

	this.startGameSound = function () {
		music.play();
	}

	this.stopGameSound = function () {
		music.pause();
	}

	this.ballHitSnd = function () {
		var hitSound = new Audio();
		hitSound.src = "res/snd/ball_hit.wav";
		hitSound.volume = 1.0;
		hitSound.play();
	}

	//
	// Reset method
	//
	/*
	This method resets the game sound after a game over
	*/
	this.reset = function () {
		this.stopGameSound();
		music.currentTime = 0;
		this.startGameSound();
	}

	this.startGameSound();
}