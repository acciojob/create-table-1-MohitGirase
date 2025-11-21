
function insert_Row() {
    //Write your code here
	
	const cell1 = document.createElement("td");
	cell1.textContent = `New Cell1`;
	
	const cell2 = document.createElement("td");
	cell2.textContent = `New Cell2`;
	
	const newRow = document.createElement("tr");
	newRow.appendChild(cell1);
	newRow.appendChild(cell2);

	const table = document.getElementById("sampleTable");
	table.prepend(newRow);
}

