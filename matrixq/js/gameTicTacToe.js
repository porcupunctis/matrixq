// These are the global variables available to all functions
var place;
var x;
var currval;
var turn = "X";
var A;
var B;
var C;
var D;
var EE;
var F;
var G;
var H;
var I;
var win;
// Main function called when user clicks on the playing table
function NewMove(place) {
	currval = document.getElementById(place).innerHTML;
	if (currval == "X" || currval == "O") {
		document.getElementById("status").innerHTML = "Place Taken";
	} else {
		document.getElementById(place).innerHTML = turn;
		document.getElementById("status").innerHTML = "Good Move";
		win = checkWin();
		turn = swapxy(turn);
	}
}

function checkWin() {
	A = document.getElementById("A1").innerHTML;
	B = document.getElementById("A2").innerHTML;
	C = document.getElementById("A3").innerHTML;
	D = document.getElementById("B1").innerHTML;
	EE = document.getElementById("B2").innerHTML;
	F = document.getElementById("B3").innerHTML;
	G = document.getElementById("C1").innerHTML;
	H = document.getElementById("C2").innerHTML;
	I = document.getElementById("C3").innerHTML;
	//Check for horizontal wins
	if ((A == B && B == C) && (A == "X" || A == "O")) {
		document.getElementById("status").innerHTML = "Win for " + A;
		return 1;
	}
	if ((D == EE && EE == F) && (D == "X" || D == "O")) {
		document.getElementById("status").innerHTML = "Win for " + D;
		return 1;
	}
	if ((G == H && H == I) && (G == "X" || G == "O")) {
		document.getElementById("status").innerHTML = "Win for " + G;
		return 1;
	}
	//Check for vertical wins		
	if ((A == D && D == G) && (A == "X" || A == "O")) {
		document.getElementById("status").innerHTML = "Win for " + A;
		return 1;
	}
	if ((B == EE && EE == H) && (B == "X" || B == "O")) {
		document.getElementById("status").innerHTML = "Win for " + B;
		return 1;
	}
	if ((C == F && F == I) && (C == "X" || C == "O")) {
		document.getElementById("status").innerHTML = "Win for " + C;
		return 1;
	}
	//Check for diagonal wins		
	if ((A == EE && EE == I) && (A == "X" || A == "O")) {
		document.getElementById("status").innerHTML = "Win for " + A;
		return 1;
	}
	if ((G == EE && EE == C) && (G == "X" || G == "O")) {
		document.getElementById("status").innerHTML = "Win for " + G;
		return 1;
	}
}
// Return X if turn was O and O if turn was X
function swapxy(x) {
	if (x == "X") {
		x = "O";
	} else {
		x = 'X';
	}
	return x;
}

function clearthetable() {
	document.getElementById("A1").innerHTML = "  ";
	document.getElementById("A2").innerHTML = "  ";
	document.getElementById("A3").innerHTML = "  ";
	document.getElementById("B1").innerHTML = "  ";
	document.getElementById("B2").innerHTML = "  ";
	document.getElementById("B3").innerHTML = "  ";
	document.getElementById("C1").innerHTML = "  ";
	document.getElementById("C2").innerHTML = "  ";
	document.getElementById("C3").innerHTML = "  ";
	document.getElementById("status").innerHTML = "  ";
}