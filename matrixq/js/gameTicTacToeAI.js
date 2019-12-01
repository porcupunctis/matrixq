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
var win = 0;
var draw = 0;
var boardStatus = "NNNNNNNNN";

function displayVersion() {
	document.getElementById("version").innerHTML = "2.6";
}
// Main function called when user clicks on the playing table
function NewMove(place) {
	currval = document.getElementById(place).innerHTML;
	if (currval == "X" || currval == "O") {
		document.getElementById("status").innerHTML = "Place Taken";
	} else {
		if (win == 0) {
			document.getElementById(place).innerHTML = "X";
			//document.getElementById("status").innerHTML = "Good Move";
			win = checkWin();
			draw = checkDraw();
			if (draw == 0) {
				document.getElementById("status").innerHTML = "Game ended in a draw";
			}
		}
		if (win == 0) {
			computerPlay();
			win = checkWin();
		}
	}
}

function computerPlay() {
	getBoardStatus();
	var topRow = boardStatus.slice(0, 3);
	var midRow = boardStatus.slice(3, 6);
	var botRow = boardStatus.slice(6, 10);
	var firstColumn = boardStatus.charAt(0) + boardStatus.charAt(3) + boardStatus.charAt(6);
	var secondColumn = boardStatus.charAt(1) + boardStatus.charAt(4) + boardStatus.charAt(7);
	var thirdColumn = boardStatus.charAt(2) + boardStatus.charAt(5) + boardStatus.charAt(8);
	var mainDiagonal = boardStatus.charAt(0) + boardStatus.charAt(4) + boardStatus.charAt(8);
	var otherDiagonal = boardStatus.charAt(2) + boardStatus.charAt(4) + boardStatus.charAt(6);
	console.log(boardStatus);
	//Use a switch to select best move given the situation pick next available if no match
	switch (boardStatus) {
		// Responses to the nine possible opening moves by the human
		case "XNNNNNNNN":
			document.getElementById("B2").innerHTML = "O";
			break;
		case "NXNNNNNNN":
			document.getElementById("B2").innerHTML = "O";
			break;
		case "NNXNNNNNN":
			document.getElementById("B2").innerHTML = "O";
			break;
		case "NNNXNNNNN":
			document.getElementById("B2").innerHTML = "O";
			break;
		case "NNNNXNNNN":
			document.getElementById("A1").innerHTML = "O";
			break;
		case "NNNNNXNNN":
			document.getElementById("B2").innerHTML = "O";
			break;
		case "NNNNNNXNN":
			document.getElementById("B2").innerHTML = "O";
			break;
		case "NNNNNNNXN":
			document.getElementById("B2").innerHTML = "O";
			break;
		case "NNNNNNNNX":
			document.getElementById("B2").innerHTML = "O";
			break;
			// These are the 54 second round possibilities
			// but some will be duplicates and can be eliminated
			// We'll start with Seven possibilities arising from "XNNNONNNN"
		case "XXNNONNNN":
			document.getElementById("A3").innerHTML = "O";
			break;
		case "XNXNONNNN":
			document.getElementById("A2").innerHTML = "O";
			break;
		case "XNNXONNNN":
			document.getElementById("C1").innerHTML = "O";
			break;
		case "XNNNOXNNN":
			document.getElementById("C2").innerHTML = "O";
			break;
		case "XNNNONXNN":
			document.getElementById("B1").innerHTML = "O";
			break;
		case "XNNNONNXN":
			document.getElementById("C1").innerHTML = "O";
			break;
		case "XNNNONNNX":
			document.getElementById("C2").innerHTML = "O";
			break;
			// Now there are six arising from "NXNNONNNN" 
		case "NXXNONNNN":
			document.getElementById("A1").innerHTML = "O";
			break;
		case "NXNXONNNN":
			document.getElementById("A1").innerHTML = "O";
			break;
		case "NXNNOXNNN":
			document.getElementById("A3").innerHTML = "O";
			break;
		case "NXNNONXNN":
			document.getElementById("A1").innerHTML = "O";
			break;
		case "NXNNONNXN":
			document.getElementById("A1").innerHTML = "O";
			break;
		case "NXNNONNNX":
			document.getElementById("A3").innerHTML = "O";
			break;
			// Now there are five new possibilities arising from "NNXNONNNN"
		case "NNXXONNNN":
			document.getElementById("A1").innerHTML = "O";
			break;
		case "NNXNOXNNN":
			document.getElementById("C3").innerHTML = "O";
			break;
		case "NNXNONXNN":
			document.getElementById("B3").innerHTML = "O";
			break;
		case "NNXNONNXN":
			document.getElementById("C3").innerHTML = "O";
			break;
		case "NNXNONNNX":
			document.getElementById("B3").innerHTML = "O";
			break;
			// Now there should be just four new possibilities arising from "NNNXONNNN"    
		case "NNNXOXNNN":
			document.getElementById("A1").innerHTML = "O";
			break;
		case "NNNXONXNN":
			document.getElementById("A1").innerHTML = "O";
			break;
		case "NNNXONNXN":
			document.getElementById("C1").innerHTML = "O";
			break;
		case "NNNXONNNX":
			document.getElementById("C1").innerHTML = "O";
			break;
			// Just three new possibilities arising from "NNNNOXNNN"
		case "NNNNOXXNN":
			document.getElementById("C3").innerHTML = "O";
			break;
		case "NNNNOXNXN":
			document.getElementById("C3").innerHTML = "O";
			break;
		case "NNNNOXNNX":
			document.getElementById("A3").innerHTML = "O";
			break;
			// Two new possibilities arising from "NNNNONXNN"
		case "NNNNONXXN":
			document.getElementById("C3").innerHTML = "O";
			break;
		case "NNNNONXNX":
			document.getElementById("C2").innerHTML = "O";
			break;
			// Last possibility arising from "NNNNONNNX"
		case "NNNNONNXX":
			document.getElementById("C1").innerHTML = "O";
			break;
			// Here are second moves from X starting in the middle "ONNNXNNNN"
		case "OXNNXNNNN":
			document.getElementById("C2").innerHTML = "O";
			break;
		case "ONXNXNNNN":
			document.getElementById("C1").innerHTML = "O";
			break;
		case "ONNXXNNNN":
			document.getElementById("B3").innerHTML = "O";
			break;
		case "ONNNXXNNN":
			document.getElementById("B1").innerHTML = "O";
			break;
		case "ONNNXNXNN":
			document.getElementById("A3").innerHTML = "O";
			break;
		case "ONNNXNNXN":
			document.getElementById("A2").innerHTML = "O";
			break;
		case "ONNNXNNNX":
			document.getElementById("C1").innerHTML = "O";
			break;
		default:
			//look for winning moves
			//then look for mandatory blocks
			//If no match, pick the first open square
			//Go for center and then corners and then middle edges
			//Look for possible Wins Here
			if (topRow == "OON") {
				document.getElementById("A3").innerHTML = "O";
			} else if (topRow == "ONO") {
				document.getElementById("A2").innerHTML = "O";
			} else if (topRow == "NOO") {
				document.getElementById("A1").innerHTML = "O";
			} else if (midRow == "OON") {
				document.getElementById("B3").innerHTML = "O";
			} else if (midRow == "ONO") {
				document.getElementById("B2").innerHTML = "O";
			} else if (midRow == "NOO") {
				document.getElementById("B1").innerHTML = "O";
			} else if (botRow == "OON") {
				document.getElementById("C3").innerHTML = "O";
			} else if (botRow == "ONO") {
				document.getElementById("C2").innerHTML = "O";
			} else if (botRow == "NOO") {
				document.getElementById("C1").innerHTML = "O";
			} else if (firstColumn == "OON") {
				document.getElementById("C1").innerHTML = "O";
			} else if (firstColumn == "ONO") {
				document.getElementById("B1").innerHTML = "O";
			} else if (firstColumn == "NOO") {
				document.getElementById("A1").innerHTML = "O";
			} else if (secondColumn == "OON") {
				document.getElementById("C2").innerHTML = "O";
			} else if (secondColumn == "ONO") {
				document.getElementById("B2").innerHTML = "O";
			} else if (secondColumn == "NOO") {
				document.getElementById("A2").innerHTML = "O";
			} else if (thirdColumn == "OON") {
				document.getElementById("C3").innerHTML = "O";
			} else if (thirdColumn == "ONO") {
				document.getElementById("B3").innerHTML = "O";
			} else if (thirdColumn == "NOO") {
				document.getElementById("A3").innerHTML = "O";
			} else if (mainDiagonal == "OON") {
				document.getElementById("C3").innerHTML = "O";
			} else if (mainDiagonal == "ONO") {
				document.getElementById("B2").innerHTML = "O";
			} else if (mainDiagonal == "NOO") {
				document.getElementById("A1").innerHTML = "O";
			} else if (otherDiagonal == "OON") {
				document.getElementById("C1").innerHTML = "O";
			} else if (otherDiagonal == "ONO") {
				document.getElementById("B2").innerHTML = "O";
			} else if (otherDiagonal == "NOO") {
				document.getElementById("A3").innerHTML = "O";
				// look for blocking moves here
			} else if (topRow == "XXN") {
				document.getElementById("A3").innerHTML = "O";
			} else if (topRow == "XNX") {
				document.getElementById("A2").innerHTML = "O";
			} else if (topRow == "NXX") {
				document.getElementById("A1").innerHTML = "O";
			} else if (midRow == "XXN") {
				document.getElementById("B3").innerHTML = "O";
			} else if (midRow == "XNX") {
				document.getElementById("B2").innerHTML = "O";
			} else if (midRow == "NXX") {
				document.getElementById("B1").innerHTML = "O";
			} else if (botRow == "XXN") {
				document.getElementById("C3").innerHTML = "O";
			} else if (botRow == "XNX") {
				document.getElementById("C2").innerHTML = "O";
			} else if (botRow == "NXX") {
				document.getElementById("C1").innerHTML = "O";
			} else if (firstColumn == "XXN") {
				document.getElementById("C1").innerHTML = "O";
			} else if (firstColumn == "XNX") {
				document.getElementById("B1").innerHTML = "O";
			} else if (firstColumn == "NXX") {
				document.getElementById("A1").innerHTML = "O";
			} else if (secondColumn == "XXN") {
				document.getElementById("C2").innerHTML = "O";
			} else if (secondColumn == "XNX") {
				document.getElementById("B2").innerHTML = "O";
			} else if (secondColumn == "NXX") {
				document.getElementById("A2").innerHTML = "O";
			} else if (thirdColumn == "XXN") {
				document.getElementById("C3").innerHTML = "O";
			} else if (thirdColumn == "XNX") {
				document.getElementById("B3").innerHTML = "O";
			} else if (thirdColumn == "NXX") {
				document.getElementById("A3").innerHTML = "O";
			} else if (mainDiagonal == "XXN") {
				document.getElementById("C3").innerHTML = "O";
			} else if (mainDiagonal == "XNX") {
				document.getElementById("B2").innerHTML = "O";
			} else if (mainDiagonal == "NXX") {
				document.getElementById("A1").innerHTML = "O";
			} else if (otherDiagonal == "XXN") {
				document.getElementById("C1").innerHTML = "O";
			} else if (otherDiagonal == "XNX") {
				document.getElementById("B2").innerHTML = "O";
			} else if (otherDiagonal == "XXN") {
				document.getElementById("A3").innerHTML = "O";
			} else if (EE != "X" && EE != "O") {
				document.getElementById("B2").innerHTML = "O";
			} else if (A != "X" && A != "O") {
				document.getElementById("A1").innerHTML = "O";
			} else if (C != "X" && C != "O") {
				document.getElementById("A3").innerHTML = "O";
			} else if (G != "X" && G != "O") {
				document.getElementById("C1").innerHTML = "O";
			} else if (I != "X" && I != "O") {
				document.getElementById("C3").innerHTML = "O";
			} else if (B != "X" && B != "O") {
				document.getElementById("A2").innerHTML = "O";
			} else if (D != "X" && D != "O") {
				document.getElementById("B1").innerHTML = "O";
			} else if (F != "X" && F != "O") {
				document.getElementById("B3").innerHTML = "O";
			} else if (H != "X" && H != "O") {
				document.getElementById("C2").innerHTML = "O";
			}
	} // End Switch
	win = checkWin();
	getBoardStatus();
	console.log(boardStatus);
} // End Function
function getBoardStatus() {
	boardStatus = ""
	if (A == "X" || A == "O") {
		boardStatus = boardStatus + A;
	} else {
		boardStatus = boardStatus + "N";
	}
	if (B == "X" || B == "O") {
		boardStatus = boardStatus + B;
	} else {
		boardStatus = boardStatus + "N";
	}
	if (C == "X" || C == "O") {
		boardStatus = boardStatus + C;
	} else {
		boardStatus = boardStatus + "N";
	}
	if (D == "X" || D == "O") {
		boardStatus = boardStatus + D;
	} else {
		boardStatus = boardStatus + "N";
	}
	if (EE == "X" || EE == "O") {
		boardStatus = boardStatus + EE;
	} else {
		boardStatus = boardStatus + "N";
	}
	if (F == "X" || F == "O") {
		boardStatus = boardStatus + F;
	} else {
		boardStatus = boardStatus + "N";
	}
	if (G == "X" || G == "O") {
		boardStatus = boardStatus + G;
	} else {
		boardStatus = boardStatus + "N";
	}
	if (H == "X" || H == "O") {
		boardStatus = boardStatus + H;
	} else {
		boardStatus = boardStatus + "N";
	}
	if (I == "X" || I == "O") {
		boardStatus = boardStatus + I;
	} else {
		boardStatus = boardStatus + "N";
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
	getBoardStatus();
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
	return 0;
}

function checkDraw() {
	var x = 0;
	var n = 0;
	getBoardStatus();
	for (n = 0; n <= 7; n++) {
		if (boardStatus.charAt(n) == "N") {
			x = 1;
		}
	}
	return x;
}

function clearthetable() {
	win = 0;
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
	console.log("*******New Game*******");
}