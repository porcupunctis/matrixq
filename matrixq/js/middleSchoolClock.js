function startTime() {
	var day = "someday";
	var today = new Date();
	var h = today.getHours();
	var m = today.getMinutes();
	var s = today.getSeconds();
	var myDay = today.getDay();
	var thisNow = (h * 3600 + m * 60 + s);
	var adjTime = document.getElementById("adjText").value;
	switch (myDay) {
		case 0:
			day = "Sunday";
			break;
		case 1:
			day = "Monday";
			break;
		case 2:
			day = "Tuesday";
			break;
		case 3:
			day = "Wednesday";
			break;
		case 4:
			day = "Thursday";
			break;
		case 5:
			day = "Friday";
			break;
		case 6:
			day = "Saturday";
	}
	// apply the adjTime factor to the time before displaying it
	var adjSeconds = (h * 3600 + m * 60 + s + parseInt(adjTime));
	h = parseInt(adjSeconds / 3600);
	m = parseInt((adjSeconds % 3600) / 60);
	s = adjSeconds - ((h * 3600) + (m * 60));
	thisNow = adjSeconds;
	m = checkTime(m);
	s = checkTime(s);
	document.getElementById("currtime").innerHTML = h + ":" + m + ":" + s + "   " + day;
	if (myDay == 1 || myDay == 2 || myDay == 3 || myDay == 4) {
		// This determines the name of the period to display
		// and sets the currStart and currEnd variables for later use
		// This is for the Monday through Thursday Schedule
		if (thisNow < 28640) {
			currPeriod = "Before School Starts";
			currStart = 0;
			currEnd = 28640;
		} else if (thisNow > 28640 && thisNow <= 28800) {
			currPeriod = "First Period Transition";
			currStart = 28640;
			currEnd = 28800;
		} else if (thisNow > 28800 && thisNow <= 32340) {
			currPeriod = "First Period";
			currStart = 28800;
			currEnd = 32340;
		} else if (thisNow > 32340 && thisNow <= 32580) {
			currPeriod = "First to Second Transition";
			currStart = 32340;
			currEnd = 32580;
		} else if (thisNow > 32580 && thisNow <= 36120) {
			currPeriod = "Second Period";
			currStart = 32580;
			currEnd = 36120;
		} else if (thisNow > 36120 && thisNow <= 36360) {
			currPeriod = "Second to Third Transition";
			currStart = 36120;
			currEnd = 36360;
		} else if (thisNow > 36360 && thisNow <= 39900) {
			currPeriod = "Third Period";
			currStart = 36360;
			currEnd = 39600;
		} else if (thisNow > 39600 && thisNow <= 39900) {
			currPeriod = "6th grade start lunch & 3rd period ends";
			currStart = 39600;
			currEnd = 39900;
		} else if (thisNow > 39900 && thisNow <= 40200) {
			currPeriod = "7th grade starts walk and talk";
			currStart = 39900;
			currEnd = 40200;
		} else if (thisNow > 40200 && thisNow <= 40800) {
			currPeriod = "6th grade end lunch & 7th grade ends Walk and Talk & 8th grade start lunch";
			currStart = 40200;
			currEnd = 40800;
		} else if (thisNow > 40800 && thisNow <= 41400) {
			currPeriod = "7th grade start lunch & 6th grade start Recess";
			currStart = 40800;
			currEnd = 41400;
		} else if (thisNow > 41400 && thisNow <= 41460) {
			currPeriod = "8th grade end lunch & start Walk and Talk";
			currStart = 41400;
			currEnd = 41460;
		} else if (thisNow > 41460 && thisNow <= 42000) {
			currPeriod = "7th grade end lunch & 6th grade end Recess & 8th grade ends Walk and Talk";
			currStart = 41460;
			currEnd = 42000;
		} else if (thisNow > 42000 && thisNow <= 42300) {
			currPeriod = "Transition to Fourth period";
			currStart = 42000;
			currEnd = 42300;
		} else if (thisNow > 42300 && thisNow <= 45360) {
			currPeriod = "Fourth period";
			currStart = 42300;
			currEnd = 45360;
		} else if (thisNow > 45360 && thisNow <= 45600) {
			currPeriod = "Fourth to Fifth Transition";
			currStart = 45360;
			currEnd = 45600;
		} else if (thisNow > 45600 && thisNow <= 49140) {
			currPeriod = "Fifth Period";
			currStart = 45600;
			currEnd = 49140;
		} else if (thisNow > 49140 && thisNow <= 49380) {
			currPeriod = "Fifth to Sixth Transition";
			currStart = 49140;
			currEnd = 49380;
		} else if (thisNow > 49380 && thisNow <= 52920) {
			currPeriod = "Sixth Period";
			currStart = 49380;
			currEnd = 52920;
		} else if (thisNow > 52920 && thisNow <= 53160) {
			currPeriod = "Sixth to Internet Cafe Transition";
			currStart = 52920;
			currEnd = 53160;
		} else if (thisNow > 53160 && thisNow <= 54600) {
			currPeriod = "Internet Cafe";
			currStart = 53160;
			currEnd = 54600;
		} else if (thisNow > 54600 && thisNow <= 86340) {
			currPeriod = "After School";
			currStart = 54600;
			currEnd = 86340;
		} else {
			currPeriod = "Error Error Error";
			currStart = 0;
			currEnd = 100;
		}
	} // end the monday through thursday if block
	// This is the friday schedule if block
	else if (myDay == 5) {
		if (thisNow < 28860) {
			currPeriod = "Before School Starts";
			currStart = 0;
			currEnd = 28860;
		} else if (thisNow > 28640 && thisNow <= 28800) {
			currPeriod = "First Period Transition";
			currStart = 28640;
			currEnd = 28800;
		} else if (thisNow > 28800 && thisNow <= 30900) {
			currPeriod = "First Period";
			currStart = 28800;
			currEnd = 30900;
		} else if (thisNow > 30900 && thisNow <= 31140) {
			currPeriod = "First to Second Transition";
			currStart = 30900;
			currEnd = 31140;
		} else if (thisNow > 31140 && thisNow <= 33240) {
			currPeriod = "Second Period";
			currStart = 31140;
			currEnd = 33240;
		} else if (thisNow > 33240 && thisNow <= 33480) {
			currPeriod = "Second to Third Transition";
			currStart = 33240;
			currEnd = 33480;
		} else if (thisNow > 33480 && thisNow <= 35580) {
			currPeriod = "Third Period";
			currStart = 33480;
			currEnd = 35580;
		} else if (thisNow > 35580 && thisNow <= 35820) {
			currPeriod = "Third to Fourth Transition";
			currStart = 35580;
			currEnd = 35820;
		} else if (thisNow > 35820 && thisNow <= 37560) {
			currPeriod = "Fourth Period";
			currStart = 35820;
			currEnd = 37560;
		} else if (thisNow > 37560 && thisNow <= 37800) {
			currPeriod = "Fourth to Fifth Transition";
			currStart = 37560;
			currEnd = 37800;
		} else if (thisNow > 37800 && thisNow <= 39960) {
			currPeriod = "Fifth Period";
			currStart = 37800;
			currEnd = 39960;
		} else if (thisNow > 39600 && thisNow <= 39900) {
			currPeriod = "6th grade start lunch & 5th period ends";
			currStart = 39600;
			currEnd = 39900;
		} else if (thisNow > 39900 && thisNow <= 40200) {
			currPeriod = "7th grade starts walk and talk";
			currStart = 39900;
			currEnd = 40200;
		} else if (thisNow > 40200 && thisNow <= 40800) {
			currPeriod = "6th grade end lunch & 7th grade ends Walk and Talk & 8th grade start lunch";
			currStart = 40200;
			currEnd = 40800;
		} else if (thisNow > 40800 && thisNow <= 41400) {
			currPeriod = "7th grade start lunch & 6th grade start Recess";
			currStart = 40800;
			currEnd = 41400;
		} else if (thisNow > 41400 && thisNow <= 41460) {
			currPeriod = "8th grade end lunch & start Walk and Talk";
			currStart = 41400;
			currEnd = 41460;
		} else if (thisNow > 41460 && thisNow <= 42000) {
			currPeriod = "7th grade end lunch & 6th grade end Recess & 8th grade ends Walk and Talk";
			currStart = 41460;
			currEnd = 42000;
		} else if (thisNow > 42000 && thisNow <= 42300) {
			currPeriod = "Fifth to Sixth Transition";
			currStart = 42000;
			currEnd = 42300;
		} else if (thisNow > 42300 && thisNow <= 44400) {
			currPeriod = "Sixth Period";
			currStart = 42300;
			currEnd = 44400;
		} else if (thisNow > 44400 && thisNow <= 44640) {
			currPeriod = "Sixth to Jay Club Transition";
			currStart = 44400;
			currEnd = 44640;
		} else if (thisNow > 44640 && thisNow <= 4500) {
			currPeriod = "Jay club";
			currStart = 44640;
			currEnd = 4500;
		} else if (thisNow > 4500 && thisNow <= 86340) {
			currPeriod = "After School";
			currStart = 4500;
			currEnd = 86340;
		} else {
			currPeriod = "Error Error Error";
			currStart = 0;
			currEnd = 100;
		}
	} // end of the friday if block
	// this is the weekend schedule if block
	else if (myDay == 6 || myDay == 0) {
		if (thisNow < 14400) {
			currPeriod = "After Midnight";
			currStart = 0;
			currEnd = 14400;
		} else if (thisNow > 14400 && thisNow <= 21600) {
			currPeriod = "Twilight";
			currStart = 14400;
			currEnd = 21600;
		} else if (thisNow > 21600 && thisNow <= 28800) {
			currPeriod = "Dawn";
			currStart = 21600;
			currEnd = 28800;
		} else if (thisNow > 28800 && thisNow <= 36000) {
			currPeriod = "Morning";
			currStart = 28800;
			currEnd = 36000;
		} else if (thisNow > 36000 && thisNow <= 39600) {
			currPeriod = "Late Morning";
			currStart = 36000;
			currEnd = 39600;
		} else if (thisNow > 39600 && thisNow <= 46800) {
			currPeriod = "Noon";
			currStart = 39600;
			currEnd = 46800;
		} else if (thisNow > 46800 && thisNow <= 61200) {
			currPeriod = "Afternoon";
			currStart = 46800;
			currEnd = 61200;
		} else if (thisNow > 61200 && thisNow <= 72000) {
			currPeriod = "Evening";
			currStart = 61200;
			currEnd = 72000;
		} else if (thisNow > 72000 && thisNow <= 79200) {
			currPeriod = "Late Evening";
			currStart = 72000;
			currEnd = 79200;
		} else if (thisNow > 79200 && thisNow <= 86340) {
			currPeriod = "Dark of Night";
			currStart = 79200;
			currEnd = 86340;
		} else {
			currPeriod = "Error Error Error";
			currStart = 0;
			currEnd = 100;
		}
	} // end of the saturday sunday if block
	document.getElementById("thisPeriod").innerHTML = currPeriod;
	var perComp = ((thisNow - currStart) / (currEnd - currStart)) * 100;
	perComp = perComp.toFixed(2);
	var dispPerComp = perComp + "%";
	document.getElementById("myBar").innerHTML = dispPerComp;
	var elem = document.getElementById("myBar");
	elem.style.width = (perComp + '%');
	document.getElementById("timeRemaining").innerHTML = SecondsToTime(currEnd - thisNow);
	var t = setTimeout(startTime, 500);
}

function checkTime(i) {
	if (i < 10) {
		i = "0" + i
	}; // add zero in front of numbers < 10
	return i;
}

function SecondsToTime(j) {
	var myHours;
	var myMinutes;
	var mySeconds;
	myHours = parseInt(j / 3600);
	myMinutes = parseInt((j % 3600) / 60);
	mySeconds = j - ((myHours * 3600) + (myMinutes * 60));
	myMinutes = checkTime(myMinutes);
	mySeconds = checkTime(mySeconds);
	return ("Time Remaining: " + "    " + myHours + ":" + myMinutes + ":" + mySeconds);
}