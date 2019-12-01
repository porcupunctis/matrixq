function getSeconds() {
	var today = new Date();
	var h = today.getHours();
	var m = today.getMinutes();
	var s = today.getSeconds();
	var thisNow = (h * 3600 + m * 60 + s);
   document.getElementById("SecondsNow").innerHTML=thisNow;
}