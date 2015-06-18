// source: http://stackoverflow.com/questions/1187518/javascript-array-difference
Array.prototype.diff = function(a) {
    return this.filter(function(i) {return a.indexOf(i) < 0;});
};
Array.prototype.totable = function(element) {
	var table = document.createElement('table');	

	for( var i=0, tr; i<this.length; i++) {
		tr = document.createElement('tr');
		td = null;
		console.log( "In here: " + this[0].length );
		for( var j=0, td; j<this[i].length;j++) {
			td = document.createElement('td');
			td.appendChild(document.createTextNode(this[i][j]));
			tr.appendChild(td);
		}	
		table.appendChild(tr);
	}
	document.getElementById(element).appendChild(table);
}

function pickPairs( arChoices, arOmission ) {
	var arWorkspace = arChoices.diff(arOmission);
	var arPairs = [];

	console.log("Picking Pairs...")

	var len = arWorkspace.length;
	console.log("arWorkspace length detected of " + len);
	for( var i = 0; i < len/2; i++ ) {

			var selection1 = Math.floor( Math.random() * arWorkspace.length );
			console.log("Selected " + selection1 + " first");
			var x = arWorkspace[selection1];
			arWorkspace.splice(selection1,1);	//remove element

			var selection2 = Math.floor( Math.random() * arWorkspace.length );
			console.log("Selected " + selection2 + " second");
			var y = arWorkspace[selection2];
			arWorkspace.splice(selection2,1);

			arPairs[i] = [x, y];
	}
	if( arWorkspace.length == 1 ) {
			arPairs[arPairs.length] = [arPairs[0], ""];
	}

	return arPairs;

}