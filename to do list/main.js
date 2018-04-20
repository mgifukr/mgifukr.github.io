var divs = document.getElementsByTagName("div");
for (var i = 0; i < divs.length; i++) {
		divs[i].style.display = "block";}

/*btn_hide.addEventListener("click", function(){
	for (var i = 0; i < divs.length; i++) {
		divs[i].style.display = "none";
	}
}, false);
btn_show.addEventListener("click", function(){
	for (var i = 0; i < divs.length; i++) {
		divs[i].style.display = "block";
	}
}, false);*/



btn_toggle.addEventListener("click", function(){
	for (var i = 0; i < divs.length; i++) {
		divs[i].style.display = (divs[i].style.display == "block") ? "none" : "block";
	}
}, false);