var arWords = ["Do", "You", "Believe", "In", "Magic", "And", "I", "Hope", "You", "Do"];
function sillyExample() {
	alert("You've included a javascript library function");
}
//ex1
function max(v1, v2) {
	if( v1 > v2 ) return v1;
	else return v2;
}

//ex2
function maxOfThree(v1, v2, v3) {
	if( v1 > v2 ) {
		if( v1 > v3 ) return v1;
		else return v3;
	} else {
		if( v2 > v3 ) return v2;
		else return v3;
	}
}
//alt ex2:
function maxOfThree(v1, v2, v3) {
	return max(max(v1, v2), v3);
}
//ex3
function charVowel( c ) {
	var arVowel = ["a","e","i","o","u"," "];
	if( arVowel.indexOf(c) >= 0 ) return true;
	return false;
}
//ex4
function translate( txt ) {
	console.log("in translate");
	var output = "";
	for( x=0; x<txt.length; x++ ) {
		if( charVowel( txt.charAt(x)) )
			output += txt.charAt(x)
		else
			output += txt.charAt(x) + "o" + txt.charAt(x);
	}
	return output;
}
//ex5
function sum( numbers ) {
	var sum = 0;
	for( x=0; x<numbers.length; x++ ) {
		sum += numbers[x];
	}
	return sum;
}
function multiply( numbers ) {
	var product = 1;
	for( x=0; x<numbers.length; x++ ) {
		product *= numbers[x];
	}
	return product;
}
//ex6
function reverse( txt ) {
	var output = "";
	for( x=txt.length-1; x>-1; x-- ) {
		output += txt.charAt(x);
	}
	return output;
}
//ex7
var dictionary = {"merry":"god", "christmas":"jul", "and":"och", "happy":"gott", "new":"nytt", "year":"år"}
function dict_translate( source, dict ) {
	for (var word in dict) {
    source = source.replace(word,dict[word]);
	}
	return source;
}
//ex8
function findLongestWord( words ) {
	var longV = 0;
	var longP;
	for( var x=0; x<words.length; x++) {
		if( words[x].length > longV ) {
			longV = words[x].length;
			longP = x;
		}
	}
	//return words[longP];
	return longV;
}
ex9:
function filterLongWords( words, i ) {
	var result = []
	for(var x=0; x<words.length; x++) {
		if( words[x].length <= i )
			result.push(words[x]);
	}
	return result;
}
ex10:

// function charFreq( text ) {
// 	var arChar = [];
// 	var arCharFreq = [];
// 	for(x=0;x<text.length;x++) {
// 		//if we find our character stored
// 		if( arChar.indexOf(text.charAt(x)) >= 0 ) {
// 			//increment the character count
// 			arCharFreq[text.charAr(x)] += 1;
// 		} else {
// 			//add the new char and 
// 			arChar.push(text.charAt(x));	//add character
// 			arCharFreq.push(1);						//initialize count
// 		}
// 	}
// }
//pass 2

function charFreq( text ) {
	var objCharFreq = {}
	for(x=0;x<text.length;x++) {
		//if we find our character stored
		if( objCharFreq[text.charAt(x)] >= 0 ) {
			//increment the character count
			objCharFreq[text.charAt(x)] += 1;
		} else {
			//add the new char and 
			objCharFreq[text.charAt(x)] = 1;
		}
	}
	return objCharFreq;
}
