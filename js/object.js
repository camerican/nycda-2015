var my_menu = {
	breakfast: "eggs",
	lunch: "turkey sandwich",
	dinner: "lasagna"
}

function Device( name, break_frequency, rating ) {
	this.name = name;
	this.break_frequency = break_frequency;
	this.rating = rating;
	this.provideData = function(){
	 	return "This device " + this.name + " breaks " + this.break_frequency;
	}
}
var appleTV = new Device( "Apple TV", "Often", "1");

Device.prototype.about = function() {
	return "This device " + this.name + " breaks " + this.break_frequency;
};

function SpaceShip() {
	Device.apply(this,arguments);
	this.does_fly = true;
	if( this.break_frequency == "often" )
		this.risk = 10;
	else if ( this.break_frequency == "sometimes" )
		this.risk = 5;
	else
		this.risk = 1;
	this.minaj = function() {
		return "Starships are meant to fly.";
	}
}

var laptop = new Device("MacBook", "Rare", "5");

var objLiteral = {
	someAttribute: "someValue",
	anotherAttribute: "someValue",
	someMethod: function(){
		return "This object is nice!";
	}
}
objLiteral.anotherMethod = function(){ 
	return "This is another method, added by extending manually!";
}


function Album( desc ) {
	this.desc = desc;
	this.photos = [];
	this.add = function( obj ) {
		this.photos.push( obj );
	}
	this.access = function( index ) {
		if( typeof index === "undefined" ) {
			var len = this.photos.length;
			if( len < 1 )
				return "There are no photos in the " + this.desc + " album.";
			var output = this.photos[0];
			for( var x = 1; x<this.photos.length; x++) {
				output += "\n" + this.photos[x];
			}
			return output;
		} else {
			return this.photos[index];
		}
	}
}
function Photo( desc, location, src ) {
	this.desc = desc;
	this.src = src;
	this.location = location;
}
Photo.prototype.toString = function() {
	return this.desc + " @" + this.location + " [" + this.src + "]";
}

var album = new Album( "Happy Times" );
var p1 = new Photo( "Profile 1", "New York", "/Users/Shared/Pictures/profile1.png");
var p2 = new Photo( "Profile 2", "Philadelphia", "/Users/Shared/Pictures/profile2.png");
var p3 = new Photo( "Home", "Hoboken", "/Users/Shared/Pictures/home.png");
var p4 = new Photo( "Office", "Philadelphia", "/Users/Shared/Pictures/thehub.png");
album.add( p1 );
album.add( p2 );
album.add( p3 );
album.add( p4 );

function Person( firstName, lastName ) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.name = function() {
		return this.firstName + " " + this.lastName;
	}
}
function Learner( ) {
	Person.apply(this, arguments);
	this.classes = [];	//array of classes
	this.addToClass = function( obj ) {
		this.classes.push( obj );	//add class to learner's list of classes
		// console.log( "this is an instance of: " + (this.constructor.name) );
		// console.log( "obj is an instance of: " + (obj.constructor.name));
		//add to the current class method if we're in the correct place
		if( this instanceof Student ) {
			obj.students.push( this );
		} else if( this instanceof Teacher ) {
			obj.setTeacher( this );
		}
	}
}
function Student( ) {
	Learner.apply(this, arguments);
	this.row = arguments[arguments.length-1];
}
function Teacher( ) {
	Learner.apply(this, arguments);
	this.experience = arguments[arguments.length-1];	//last argument is experience
}
function Class( subject, teacher ) {
	this.subject = subject;
	this.students = [];	//array of students
	this.teacher = teacher;
	this.setTeacher = function( teacher ) {
		this.teacher = teacher;
		return this;
	}
	teacher.addToClass(this);
	this.getTeacher = function( ) {
		return teacher;
	}
	this.addStudent = function( student ) {
		student.addToClass( this );
		return this;
		//this.students.push( student );	//push student to class array
	}
	this.getStudent = function( index ) {
		if( typeof index === "undefined" ) {
			var len = this.students.length;
			if( len < 1 )
				return "There are no students in the " + this.subject + " class.";
			var output = this.students[0];
			for( var x=1; x<len; x++ ) {
				output += "\n" + this.students[x];
			} 
			return output;
		} else {
			return this.students[index];
		}
	}

}
Person.prototype.toString = function() {
	return this.name();
}
Person.prototype.addToClass = function() {

}

var s1 = new Student( "Will", "Bolton", 1 );
var s2 = new Student( "Berlin", "Patience", 1 );
var s3 = new Student( "Raz", "Reed", 2);
var s4 = new Student( "Chris", "Duane", 2);
var s5 = new Student( "Jake", "Smergel", 2);
var s6 = new Student( "Patrick", "Keenan", 3);
var s7 = new Student( "David", "Toomey", 3);
var s8 = new Student( "Mike", "Harvey", 3);
var s9 = new Student( "Jeff", "Bowne", 3);
var s10 = new Student( "Azeez", "", 3);

var t1 = new Teacher( "Cam", "Crews", 10 );
var t2 = new Teacher( "Jason", "Blanchard", 10);
var t3 = new Teacher( "Jeremy", "Raines", 10);
var t4 = new Teacher( "Zach", "Feldman", 10);

var c1 = new Class( "WDI PA", t1);
var c2 = new Class( "WDI NY", t3);
var c3 = new Class( "Web 100", t2);


//azzeez homework
// For Loop

var usStates = [["New York", "Oregon", "Florida","Texas"], ["Albany", "Portland", "Miami", "Austin"]];
for(i=0; i < usStates.length; i++){
for(x=0; x <usStates.length; x++){

}
console.log(usStates[i][x]);
}


// While Loop

var x = 100;
while ( x > 0 ){
x--;
console.log( x +" bottle(s) of beer on the wall,");
console.log( x +"bottle(s) of beer");
console.log("Take one down, pass it around,");
}

// Global Scope

var favFood = "Fish and Rice";

function displayMyFood(){
return console.log("I love" + favFood)
}
displayMyFood();

// Local Scope
function showCar(){
var nameOfCar ="Toyota";
console.log("My car is " + nameOfCar);
}
showCar();

 

// Check if word is Palindrome
function checkPalindrome(){
	var getString = prompt("Enter A Word");
	for (i = 0; i < getString.length; i++) {
		if (getString.charAt(i) != getString.charAt(getString.length-1-i)) {
			return console.log( getString + "is not a palindrome");
		}
	}
	return console.log(true);
}
checkPalindrome();

// Find vowels in a string

function checkForVowel()
{
	var getString = prompt("Enter a word: "); 
	if(getString.match(/[aeiouAEIOU]/))
	{
		console.log("The String" +" " +getString + " " + "has a Vowel in it");
	}
	else {
		console.log("The String" + " " +getString + " " + "does not have a Vowel in it");
	}
}
checkForVowel();

// Display alert when a button is clicked

$(document).ready(function(){
$("#myForm").submit(function(){
if($("#myName").val() == "Azeez"){
alert("Welcome Azeez");
}
else{
alert("Go Away" + $("#myName").val());
}
return false;
})
});

// Validate Date Input

// Find frequent in array

function findFrequent(){
//var myArray=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3, 2, 2, 2, 3, 2]; 
var myArray=[3, 'a', 'a', 'a', 6, 3, 'a', 3, 'a', 6, 4, 9, 6, 6, 2, 2, 3, 2, 'c']; 
var mf = 1; 
var m = 0; 
var item; 
for (var i=0; i<myArray.length; i++) 
{ 
	for (var j=i; j<myArray.length; j++) 
	{ 
		if (myArray[i] == myArray[j]) 
			m++; 
		if (mf<m) 
		{ 
			mf=m; 
			item = myArray[i]; 
		} 
	} 
	m=0; 
} 
alert(item+" ( " +mf +" times ) ") ; 
}


// ----Ten Simple Javascript Exercises---

// Find the larger number
function max(firstNum, secondNum){
if(firstNum > secondNum ){
console.log(firstNum + "is greater");
}
else if( secondNum > firstNum){
console.log(secondNum + " is greater");
}
else{
console.log(" The two numbers are the same");
}
}
max(firstNum,secondNum);

// Largest of three numbers

function maxOfThree(firstNum, secondNum, thirdNum){
if(firstNum > secondNum && firstNum > thirdNum){
console.log(firstNum + "is the largest");
}
else if( secondNum > firstNum && secondNum > thirdNum){
console.log(secondNum + "is the largest");
}
else if( thirdNum > firstNum && thirdNum > secondNum){
console.log(thirdNum + "is the largest");
}
else if ( firstNum == secondNum && firstNum == thirdNum ){
console.log("All of the numbers are the same");
}
else if(firstNum == secondNum || firstNum == thirdNum || secondNum == thirdNum){
console.log("Two of the numbers are the same");
}
}

// Check for Vowel

function checkForVowel()
{
var getString = prompt("Enter a word: "); 
if(getString.match(/[aeiouAEIOU]/))
{
return true;
}
return false;
}
checkForVowel();

// Translate Function

function translate(someWord){

}

//end Azeez homework