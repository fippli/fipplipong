var Background = function (gameScreen, P1, P2) {
	var gameScreen = gameScreen;
	var ctx = gameScreen.context();
	var scrW = gameScreen.getWidth();
	var scrH = gameScreen.getHeight();
	//
	//	Logic
	//

	this.logic = function () {
		//
	}

	//
	//	Graphics
	//

	this.graphics = function (gameState) {
		switch(gameState.getState()) {
			case 'MAIN':
				mainStage();
				middleLine();
				drawPoints();
				break;
		}
	}

	var mainStage = function () {
		ctx.fillStyle = "#111111";
		ctx.rect(0,0,600,400);
		ctx.fill();
	}

	var middleLine = function () {
		ctx.beginPath();
		ctx.fillStyle ="#222222";
		ctx.rect((scrW-10)/2,0,10,scrH);
		ctx.fill();
	}

	var drawPoints = function () {
		//
		var points1 = P1.getScore();
		points1 = points1.toString();
		var points2 = P2.getScore();
		points2 = points2.toString();
		ctx.font = "60px gamefont";
		ctx.fillStyle = '#222222';
		ctx.fillText(points1,   scrW/4 - ctx.measureText(points1).width/2, scrH/2);
		ctx.fillText(points2, 3*scrW/4 - ctx.measureText(points2).width/2, scrH/2);
	}

	var drawSpeedBar = function () {
		//
	}

}