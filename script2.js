// quote page - form details

var name = "John Doe";
var age = 20;
var country = "Austria";
var horse_power = 150;

// insurance calculation

function calculateInsurance(horse_power, age) {
	var calculation = (parseInt(horse_power) * 100) / (parseInt(age) + 150)
	document.getElementById("calcHere").innerHTML = 
	"Dear " + name + ", Our best price for your new car insurance is: " + calculation.toFixed(2) + " € per month.";
}