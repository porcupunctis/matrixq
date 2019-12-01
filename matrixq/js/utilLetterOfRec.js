function createLetter() {
var bigLetter = "";
var d = new Date();
thisDay = "";
thisDay = d.toDateString();
//get all of the user-typed data
var firstName = document.getElementById("firstName").value
var lastName = document.getElementById("lastName").value
var class1 = document.getElementById("class1").value
var class1 = document.getElementById("class2").value
var class1 = document.getElementById("class3").value
var class1 = document.getElementById("class4").value
var club1 = document.getElementById("club1").value
var club2 = document.getElementById("club2").value
var club3 = document.getElementById("club3").value
var club4 = document.getElementById("club4").value
var sport1 = document.getElementById("sport1").value
var sport2 = document.getElementById("sport2").value
var sport3 = document.getElementById("sport3").value
var sport4 = document.getElementById("sport4").value
var years = document.getElementById("years").value

bigLetter = bigLetter + "Randall R. Massey <br> Teacher/Coach <br> Clever High School <br> Clever, MO  65631 <br> <br>" + thisDay + " <br>";
bigLetter = bigLetter + "<br> Recomendation Letter For: " + firstName + " " + lastName + "<br> <br>";
bigLetter = bigLetter + "I have known and worked with " + firstName + " for " + years + " years. ";
bigLetter = bigLetter + firstName + " has been involved in a number of sports and activities including ";
if (sport1 != ""){bigLetter = bigLetter + sport1}
if (sport2 != ""){bigLetter = bigLetter + ", " + sport2}
if (sport3 != ""){bigLetter = bigLetter + ", " + sport3}
if (sport4 != ""){bigLetter = bigLetter + ", " + sport4}
bigLetter = bigLetter + ".  "


document.getElementById("outLetter").innerHTML = bigLetter;
}