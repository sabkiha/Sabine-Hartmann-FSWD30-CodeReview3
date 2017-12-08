// quote page - form details

var name = document.getElementById("yourName");
console.log(name);
var age = document.getElementById("age").value;
console.log(age);
var country = document.getElementById("country");
console.log(country);
var horse_power = document.getElementById("horsepower").value;
console.log(horse_power);

// insurance calculation

function calculateInsurance(horse_power, age) {
	var calculation = (parseInt(horse_power)*100) / (parseInt(age) + 150)
	console.log(calculation);
	document.getElementById("calcHere").innerHTML = 
	"Dear " + name + ", Our best price for your new car insurance is: " + calculation.toFixed(2) + " € per month.";
}