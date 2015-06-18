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