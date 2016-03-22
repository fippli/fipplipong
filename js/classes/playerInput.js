
var PlayerInput = function () {
	//alert("Player Input");
	this.getInput = function(gameState, P1, P2) {
		window.onkeydown = function(event) {
			var key = event.keyCode ? event.keyCode : event.which;
			//alert(key);

			switch (key) {
				case 13:
					// Enter
					if (gameState.getState() === "GAMEOVER") {
						gameState.setRun(false);
					}
					break;
				case 38:
					// Up
					P2.moveUp();
					break;
				case 40:
					// Down
					P2.moveDown();
					break;

				// Left Player
				case 87:
					// Move up
					P1.moveUp();
					break;
				case 83:
					// Move down
					P1.moveDown();
					break;

			}

		}

		window.onkeyup = function(event) {
			var key = event.keyCode ? event.keyCode : event.which;

			switch (key) {
				case 38:
					// Up
					P2.freeze();
					break;
				case 40:
					// Down
					P2.freeze();
					break;

				// Left Player
				case 87:
					// Move up
					P1.freeze();
					break;
				case 83:
					// Move down
					P1.freeze();
					break;
			}
		}
	}
}