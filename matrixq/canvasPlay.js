function shadeItSquare(place){
var c = document.getElementById(place);
var ctx = c.getContext("2d");
ctx.fillStyle = "#b32d00";
ctx.fillRect(0, 0, 20, 20);
}
function unShadeItSquare(place){
var c = document.getElementById(place);
var ctx = c.getContext("2d");
ctx.fillStyle = "#b3b3cc";
ctx.fillRect(0, 0, 20, 20);	
}
function shadeItHBar(place){
var c = document.getElementById(place);
var ctx = c.getContext("2d");
ctx.fillStyle = "#b32d00";
ctx.fillRect(0, 0, 200, 20);
}
function unShadeItHBar(place){
var c = document.getElementById(place);
var ctx = c.getContext("2d");
ctx.fillStyle = "#b3b3cc";
ctx.fillRect(0, 0, 200, 20);	
}