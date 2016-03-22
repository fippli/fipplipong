
var Ball = function (gameScreen, P1, P2) {
	var gameScreen = gameScreen;
	var x = gameScreen.getWidth()/2;
	var y = gameScreen.getHeight()/2;
	var r = 5;							// r is the radius of the ball
	var xSpeed = 5;
	var ySpeed = 0;
	var maxSpeed = 20;
	var color = "#eeeeee";
	var xDirection = 1;
	var yDirection = 0;

	
	var ctx = gameScreen.context();
	var P1 = P1;
	var P2 = P2;
	var arctool = new ArcadeTools();
	var ball = this;

	this.getX = function () {
		return x;
	}

	this.getY = function () {
		return y;
	}

	this.getHeight = function () {
		return r;
	}

	this.getWidth = function () {
		return r;
	};

	this.logic = function (gameSound) {
		checkIfPoint();
		checkPaddles(gameSound);
		checkRoof(gameSound);
		move();
	};

	var curveBall = function (P) {
		var center = P.getY() + P.getHeight()/2;
		ySpeed = (y-center)/10;	// Absolute value of the difference.
		yDirection = 1;
	}

	var checkPaddles = function (gameSound) {
		if (arctool.isBetweenHeight(ball, P1)) {
			if (x-r <= P1.getX() + P1.getWidth()) {
				xDirection *= -1;
				curveBall(P1);
				gameSound.ballHitSnd();		//Play the sound
				if (xSpeed < maxSpeed) {
					xSpeed += 1;
				}
			}
		}

		if (arctool.isBetweenHeight(ball, P2)) {
			if (x + r >= P2.getX()) {
				xDirection *= -1;
				curveBall(P2);
				gameSound.ballHitSnd();		//Play the sound
				if (xSpeed < maxSpeed) {
					xSpeed += 1;
				};
					
			};
		
		};
	};

	var checkIfPoint = function () {
		if (x+r < 0) {
			if (!P1.decreaseHeight()) {
				P2.addPoint();
				resetBall();
				P1.resetPaddle();
				P2.resetPaddle();
			};
			resetBall();
		};

		if (x-r > gameScreen.getWidth()) {
			if (!P2.decreaseHeight()) {
				P1.addPoint();
				resetBall();
				P1.resetPaddle();
				P2.resetPaddle();
			};
			resetBall();
		}
	}

	var checkRoof = function (gameSound) {
		if (y - r < 0) {
			yDirection *= -1;
			gameSound.ballHitSnd();
		}
		if (y + r > gameScreen.getHeight()) {
			yDirection *= -1;
			gameSound.ballHitSnd();
		}
	}

	var resetBall = function () {
		x = gameScreen.getWidth()/2;
		y = gameScreen.getHeight()/2;
		xSpeed = 3;
		yDireciton = 0;
		ySpeed = 0;
	};

	var move = function () {
		// Move the ball
		x += xSpeed*xDirection;
		y += ySpeed*yDirection;
	}

	this.graphics = function () {
		drawBall();
	}

	var drawBall = function () {
		ctx.beginPath();
		ctx.fillStyle = color;
		ctx.arc(x, y, r, 0*Math.PI, 2*Math.PI);
		ctx.fill();
	}

}