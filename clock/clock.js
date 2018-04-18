function clock() {
	var d = new Date();
	var hh = d.getHours();
	var mm = d.getMinutes();
	var ss = d.getSeconds();
	myclock.innerText = hh + ":" + mm + ":" + ss;
var color = "#" + hh + mm + ss;
	myclock.style.backgroundColor = color;
};

setInterval(clock, 1000);