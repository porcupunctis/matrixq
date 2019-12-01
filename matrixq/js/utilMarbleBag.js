var marbleBag = [];
var marblesOut = [];
var currTotal = 0;
var currOutTotal;
var displayBag = "";
var outsideBag = "";
var displaySelected;

function setMarbleBag() {
	var n;
	displayBag = "";
	outsideBag = "";
	// Get entered value from user and populate bag
	currTotal = parseInt(document.getElementById("startNum").value);
	if (currTotal<1 || currTotal > 99){
				document.getElementById("myStatus").innerHTML = "Please enter a value from 1 to 99";
return;	
	}
	//console.log(currTotal);
	for (n = 1; n <= currTotal; n++) {
		marbleBag[n] = n;
		displayBag = displayBag + " " + String(n);
		//console.log(displayBag);
		document.getElementById("bagStatus").innerHTML = String(displayBag) + " ";
		document.getElementById("myStatus").innerHTML = "You have added " + parseInt(currTotal) + " marbles to the bag";
		document.getElementById("startNum").value = "";
		document.getElementById("marblesOut").innerHTML = "";
	}
}

function clearMarbleBag() {
	currTotal = 0;
	displayBag = "";
	outsideBag = "";
	document.getElementById("bagStatus").innerHTML = String(displayBag);
	document.getElementById("myStatus").innerHTML = "All marbles have been emptied from the bag";
	document.getElementById("marblesOut").innerHTML = String(outsideBag);
	document.getElementById("startNum").value = "";
}

function selectRandomMarbleBag() {
	if (currTotal == 0){return;}
	//Select a number from 1 to currTotal inclusively
	var randNum = Math.floor(Math.random() * currTotal) + 1; // returns a random integer from 1 to currTotal
	//console.log(randNum);
	document.getElementById("myStatus").innerHTML = "You have selected " + marbleBag[randNum];
	// add selection to list of numbers pulled from the bag and display
	outsideBag = outsideBag + " " + String(marbleBag[randNum]);
	document.getElementById("marblesOut").innerHTML = String(outsideBag);
	//remove marble from array and decrement currTotal by one
	if (randNum == currTotal) {
		currTotal = currTotal - 1;
		displayBag = "";
		for (n = 1; n <= currTotal; n++) {
			displayBag = displayBag + String(marbleBag[n]) + " ";
			//console.log(displayBag);
		}
	} else {
		currTotal = currTotal - 1;
		for (n = randNum; n <= currTotal + 1; n++) {
			marbleBag[n] = marbleBag[n + 1];
		}
		displayBag = "";
		for (n = 1; n <= currTotal; n++) {
			displayBag = displayBag + String(marbleBag[n]) + " ";
			//console.log(displayBag);
		}
	}
	document.getElementById("bagStatus").innerHTML = String(displayBag) + " ";
}

function replaceMarbleBag() {


}