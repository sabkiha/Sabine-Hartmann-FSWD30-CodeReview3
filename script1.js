// landing page - Employees details

var employees = [
 ["Ian", "ian@car-insurance.com"],
 ["Jamie", "jamie@car-insurance.com"], 
 ["Claire", "claire@car-insurance.com"] 
];
	document.getElementById("ian").innerHTML = employees[0][0];
	document.getElementById("ianEmail").innerHTML = employees[0][1];
	document.getElementById("jamie").innerHTML = employees[1][0];
	document.getElementById("jamieEmail").innerHTML = employees[1][1];
	document.getElementById("claire").innerHTML = employees[2][0];
	document.getElementById("claireEmail").innerHTML = employees[2][1];