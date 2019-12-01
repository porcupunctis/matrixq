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
h = parseInt(adjSeconds/3600);
m = parseInt((adjSeconds%3600)/60);
s = adjSeconds-((h*3600)+(m*60));
thisNow = adjSeconds;

	m = checkTime(m);
	s = checkTime(s);
	document.getElementById("currtime").innerHTML =
		h + ":" + m + ":" + s + "   " + day;
		
		
if (myDay == 1 || myDay == 2 || myDay == 3 || myDay == 4){		
	// This determines the name of the period to display
	// and sets the currStart and currEnd variables for later use
	// This is for the Monday through Thursday Schedule
	if (thisNow < 28660) {
		currPeriod = "Before School Starts";
		currStart = 0;
		currEnd = 28660;
	} else if (thisNow > 28660 && thisNow <= 29100) {
		currPeriod = "First Period Transition";
		currStart = 28660;
		currEnd = 29100;
	} else if (thisNow > 29100 && thisNow <= 32400) {
		currPeriod = "First Period";
		currStart = 29100;
		currEnd = 32400;
	} else if (thisNow > 32400 && thisNow <= 32640) {
		currPeriod = "First to Second Transition";
		currStart = 32400;
		currEnd = 32640;
	} else if (thisNow > 32640 && thisNow <= 35760) {
		currPeriod = "Second Period";
		currStart = 32640;
		currEnd = 35760;
	} else if (thisNow > 35760 && thisNow <= 36000) {
		currPeriod = "Second to Third Transition";
		currStart = 32456;
		currEnd = 36000;
	} else if (thisNow > 36000 && thisNow <= 39120) {
		currPeriod = "Third Period";
		currStart = 36000;
		currEnd = 39120;
	} else if (thisNow > 39120 && thisNow <= 39360) {
		currPeriod = "Third to Fourth Transition";
		currStart = 39120;
		currEnd = 39360;
	} else if (thisNow > 39360 && thisNow <= 40440) {
		currPeriod = "Fourth Period A Lunch";
		currStart = 39360;
		currEnd = 40440;
	} else if (thisNow > 40440 && thisNow <= 42480) {
		currPeriod = "Between Lunches";
		currStart = 40440;
		currEnd = 42480;
	} else if (thisNow > 42480 && thisNow <= 43800) {
		currPeriod = "Fourth Period B Lunch";
		currStart = 42480;
		currEnd = 43800;
	} else if (thisNow > 43800 && thisNow <= 44040) {
		currPeriod = "Fourth to Fifth Transition";
		currStart = 43800;
		currEnd = 44040;
	} else if (thisNow > 44040 && thisNow <= 47160) {
		currPeriod = "Fifth Period";
		currStart = 44040;
		currEnd = 47160;
	} else if (thisNow > 47160 && thisNow <= 47400) {
		currPeriod = "Fifth to Sixth Transition";
		currStart = 47160;
		currEnd = 47400;
	} else if (thisNow > 47400 && thisNow <= 50520) {
		currPeriod = "Sixth Period";
		currStart = 47400;
		currEnd = 50520;
	} else if (thisNow > 50520 && thisNow <= 50760) {
		currPeriod = "Sixth to Seventh Transition";
		currStart = 50520;
		currEnd = 50760;
	} else if (thisNow > 50760 && thisNow <= 53880) {
		currPeriod = "Seventh Period";
		currStart = 50760;
		currEnd = 53880;
	} else if (thisNow > 53880 && thisNow <= 54120) {
		currPeriod = "Seventh to Advisory Transition";
		currStart = 53880;
		currEnd = 54120;
	} else if (thisNow > 54120 && thisNow <= 55500) {
		currPeriod = "Advisory";
		currStart = 54120;
		currEnd = 55500;
	} else if (thisNow > 55500 && thisNow <= 86399) {
		currPeriod = "After School";
		currStart = 55500;
		currEnd = 86399;
	} else {
		currPeriod = "Error Error Error";
		currStart = 0;
		currEnd = 100;
	}
} // end the monday through thursday if block
// This is the friday schedule if block
else if(myDay == 5){
	if (thisNow < 28860) {
		currPeriod = "Before School Starts";
		currStart = 0;
		currEnd = 28860;
	} else if (thisNow > 28860 && thisNow <= 29100) {
		currPeriod = "First Period Transition";
		currStart = 28860;
		currEnd = 29100;
	} else if (thisNow > 29100 && thisNow <= 31320) {
		currPeriod = "First Period";
		currStart = 29100;
		currEnd = 31320;
	} else if (thisNow > 31320 && thisNow <= 31560) {
		currPeriod = "First to Second Transition";
		currStart = 31320;
		currEnd = 31560;
	} else if (thisNow > 31560 && thisNow <= 33660) {
		currPeriod = "Second Period";
		currStart = 31560;
		currEnd = 33660;
	} else if (thisNow > 33660 && thisNow <= 33900) {
		currPeriod = "Second to Third Transition";
		currStart = 33660;
		currEnd = 33900;
	} else if (thisNow > 33900 && thisNow <= 36000) {
		currPeriod = "Third Period";
		currStart = 33900;
		currEnd = 36000;
	} else if (thisNow > 36000 && thisNow <= 36240) {
		currPeriod = "Third to Fourth Transition";
		currStart = 36000;
		currEnd = 36240;
	} else if (thisNow > 36240 && thisNow <= 38340) {
		currPeriod = "Fourth Period";
		currStart = 36240;
		currEnd = 38340;
	} else if (thisNow > 38340 && thisNow <= 38580) {
		currPeriod = "Fourth to Fifth Transition";
		currStart = 38340;
		currEnd = 38580;
	} else if (thisNow > 38580 && thisNow <= 40680) {
		currPeriod = "Fifth Period";
		currStart = 38580;
		currEnd = 40680;
	} else if (thisNow > 40680 && thisNow <= 40920) {
		currPeriod = "Fifth to Sixth Transition";
		currStart = 40680;
		currEnd = 40920;
	} else if (thisNow > 40920 && thisNow <= 42000) {
		currPeriod = "Sixth Period A Lunch";
		currStart = 40920;
		currEnd = 42000;
	} else if (thisNow > 42000 && thisNow <= 43020) {
		currPeriod = "Between Lunches";
		currStart = 42000;
		currEnd = 43020;
	} else if (thisNow > 43020 && thisNow <= 44340) {
		currPeriod = "Sixth Period B Lunch";
		currStart = 43020;
		currEnd = 44340;
	} else if (thisNow > 44340 && thisNow <= 44580) {
		currPeriod = "Sixth to Seventh Transition";
		currStart = 44340;
		currEnd = 44580;
	} else if (thisNow > 44580 && thisNow <= 46680) {
		currPeriod = "Seventh Period";
		currStart = 44580;
		currEnd = 46680;
	} else if (thisNow > 46680 && thisNow <= 46920) {
		currPeriod = "Seventh to Advisory Transition";
		currStart = 46680;
		currEnd = 46920;
	} else if (thisNow > 46920 && thisNow <= 48300) {
		currPeriod = "Advisory";
		currStart = 46920;
		currEnd = 48300;
	} else if (thisNow > 48300 && thisNow <= 49200) {
		currPeriod = "Break Before PD";
		currStart = 48300;
		currEnd = 49200;
	} else if (thisNow > 49200 && thisNow <= 56400) {
		currPeriod = "Professional Development";
		currStart = 49200;
		currEnd = 56400;
	} else if (thisNow > 56400 && thisNow <= 86340) {
		currPeriod = "After School";
		currStart = 57600;
		currEnd = 86340;
	} else {
		currPeriod = "Error Error Error";
		currStart = 0;
		currEnd = 100;
	}	
	
} // end of the friday if block
// this is the weekend schedule if block
else if(myDay == 6 || myDay == 0){

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


	document.getElementById("thisPeriod").innerHTML =
		currPeriod;

	var perComp = ((thisNow - currStart) / (currEnd - currStart)) * 100;
	perComp = perComp.toFixed(2);
	var dispPerComp = perComp + "%";

	document.getElementById("myBar").innerHTML =
		dispPerComp;
		
	var elem = document.getElementById("myBar");
	elem.style.width = (perComp + '%');

	document.getElementById("timeRemaining").innerHTML =
		SecondsToTime(currEnd - thisNow);


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
 myHours = parseInt(j/3600);
 myMinutes = parseInt((j%3600)/60);
 mySeconds = j-((myHours*3600)+(myMinutes*60));
 myMinutes = checkTime(myMinutes);
 mySeconds = checkTime(mySeconds);
 return ("Time Remaining: " + "    " + myHours + ":" + myMinutes + ":" + mySeconds);
}