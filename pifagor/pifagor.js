var i, j;
for (i = 1; i <= 9; i++) {
	var div_row = document.createElement("div");
	div_row.setAttribute("class", "row");
	for (j = 1; j <= 9; j++) {
		var div_cell = document.createElement("div");
	div_cell.setAttribute("class", "cell");
	var produce = i * j;
	if(i == j) {
		div_cell.setAttribute("class", "cell cell-main");
			}
			if(i > j) {
		div_cell.setAttribute("class", "cell cell-umain");
			}
			if(i < j) {
		div_cell.setAttribute("class", "cell cell-omain");
			}
			if(produce % 2 == 0) {
		div_cell.setAttribute("class", "cell cell-even");
		}else {
			div_cell.setAttribute("class", "cell cell-odd");
			}

	div_cell.innerText = produce;
	div_row.appendChild(div_cell);
	}; // end for j
	pifagor.appendChild(div_row)
};// end for i;