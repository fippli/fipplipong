/*
This is the game module by fippli
Author: Filip Johansson
Mail: mail@fippli.se
*/
var ArcadeTools = function () {
	
	//
	//	Collisions
	//

	var less = function (a, b) {
		return (a < b);
	}
	var greater = function (a, b) {
		return (a > b);
	}

	var lessOrEqual = function (a, b) {
		return (a <= b);
	}
	var greaterOrEqual = function (a, b) {
		return (a >= b);
	}

	var notEqual = function (a, b) {
		return (a != b);
	}

	this.isBetweenHeight = function (obj1, obj2) {
		return greater((obj1.getY() + obj1.getHeight()), obj2.getY()) && less(obj1.getY(), (obj2.getY() + obj2.getHeight()));
	}

	this.isBetweenWidth = function (a, b) {
		return greater((obj1.getX() + obj1.getWidth()), obj2.getX()) && less(obj1.getX(), (obj2.getX() + obj2.getWidth()));
	}

}