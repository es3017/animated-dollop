var containerEle = document.body.querySelector(".container");

function computeAmount(base, percentage) {
	return base * percentage;
}

window.onload=function(){
	var baseCost = Number (prompt("What was your bill?")); 
	var taxRate = Number ("7") / 100;   
	var tipRate = Number ("5") / 100;
	var taxValue = computeAmount(baseCost, taxRate);
	var preTipCost = taxValue + baseCost;
	var tipValue = computeAmount(preTipCost, tipRate);
	var totalCost = preTipCost + tipValue;
	containerEle.innerHTML = ("Your bill total is " + totalCost + '');
  
  
}