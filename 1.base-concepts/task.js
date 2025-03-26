"use strict"
function solveEquation(a, b, c) {
	let arr = [];
	let discriminant = Math.pow(b, 2) - 4 * a * c;
	if (discriminant > 0) {
		let answerFirst = (-b + Math.sqrt(discriminant)) / (2 * a);
		let answerSecond = (-b - Math.sqrt(discriminant)) / (2 * a);
		arr.push(answerFirst);
		arr.push(answerSecond);
	} else if (discriminant === 0) {
		let answer = -b / (2 * a);
		arr.push(answer);
	}

	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let percentPerMonth = percent / 100 / 12;
	let principalSum = amount - contribution;
	let payment = principalSum * (percentPerMonth + percentPerMonth / (Math.pow(1 + percentPerMonth, countMonths) - 1));
	let totalCreditSum = +(payment * countMonths).toFixed(2);
	return totalCreditSum;
}