var GameState = function () {
	//
	var state = 'MAIN';
	var run   = true;

	this.getState = function () {
		return state;
	}
	this.getRun = function () {
		return run;
	}
}