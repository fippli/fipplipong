/*
Player class
*/
var Player = function (gameScreen) {
	var x = 0;
	var y = 0;
	var speed = 10;
	var direction = 0;
	var width = 10;
	var HEIGHT = 99
	var height = HEIGHT;
	var score = 0;
	var color = "#eeeeee";
	var gameScreen = gameScreen;
	var heightDecrease = height*1/3;

	//
	// Setters
	//
	this.setX 			= function (value) {x 			= value;}
	this.setY 			= function (value) {y 			= value;}
	this.setSpeed 		= function (value) {speed 		= value;}
	this.setWidth		= function (value) {width 		= value;}
	this.setHeight		= function (value) {height 		= value;}
	this.setScore		= function (value) {score 		= value;}
	//this.setColor		= function (value) {color 		= value;}
	
	//
	// Getters
	//
	this.getX 			= function () {return x;				}
	this.getY 			= function () {return y;				}
	this.getSpeed 		= function () {return speed;			}
	this.getWidth		= function () {return width;			}
	this.getHeight		= function () {return height;			}
	this.getScore		= function () {return score;			}
	//this.getColor		= function () {return color;			}
	
	//
	// Logic
	//

	this.logic = function () {
		move();
		checkFloor();
		checkRoof();
	}

	this.moveUp = function () {
		direction = -1;
	}
	this.moveDown = function () {
		direction =  1;
	}

	this.freeze = function () {
		direction = 0;
	}

	this.addPoint = function () {
		score += 1;
	}

	this.decreaseHeight = function () {
		height -= heightDecrease;
		return height;
	}

	this.resetPaddle = function () {
		height = HEIGHT;
		y = (gameScreen.getHeight() - height)/2;
	}

	var move = function () {
		y += speed*direction;
	}

	var checkRoof = function () {
		//
		if (y < 0) {
			direction = 0;
			y = 0;
		}

	}

	var checkFloor = function () {
		if ((y + height) >= gameScreen.getHeight()) {
			direction = 0;
			y = gameScreen.getHeight() - height;
		}
	}

	//
	// Graphics
	//

	this.graphics = function () {
		drawPlayer();
		changeColor();
	}

	var drawPlayer = function () {
		var ctx = gameScreen.context();
		ctx.beginPath();
		ctx.fillStyle = color;
		ctx.rect(x, y, width, height);
		ctx.fill();
	}

	var changeColor = function () {
		switch (height) {
			case 10:
				color = "#b0403f";
				break;
			case 20:
				color = "#b3513f"
				break;
			case 30:
				color = "#b5633f";
				break;
			case 40:
				color = "#b8763f";
				break;
			case 50:
				color = "#ba8a3f";
				break;
			case 60:
				color = "#bd9e3f";
				break;
			case 70:
				color = "#c0b43f";
				break;
			case 80:
				color = "#bac140";
				break;
			case 90:
				color = "#a8c241";
				break;
			case 100:
				color = "#96c443";
				break;

			/* OTHER CASES */
			case 99:
				color = "#96c443";
				break;
			case 66:
				color = "#ba8a3f";
				break;
			case 33:
				color = "#b0403f";
				break;

		}
	}


}