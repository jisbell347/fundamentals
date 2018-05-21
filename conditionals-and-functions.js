/*
* Conditionals, Functions, Scope and Loops.
 */

// Equals

let equals = 1 === '1';

// Greater than

let greaterThan = 5 > 1;

// Less than

let lessThan = 2 < 10;

// Greater than Equals

let greaterThanEq = 5 >= 5;

// Less than Equals

let lessThanEq = 4 <= 9;

// Not Equals
let notEquals = 5 !== 2;

let storeA = 4.40;
let storeB = 4.40;

let storeAIsLower = storeA < storeB;

function compareStorePrices (storeA, storeB) {
	let storeAIsLower = storeA < storeB;
	if (storeAIsLower) {
			console.log("Store A has a lower price.")
		} else if(storeB < storeA) {
			console.log("Store B has a lower price.")
		} else {
			console.log("Their prices are equal.")
		}
}

//compareStorePrices(10, 5);

function squareNum (number) {
	return number * number;
}

let squaredNumber = squareNum(5);
console.log(squaredNumber);

let x  = 10;

function addNumbers (n,m,x) {
	console.log(x);
	let b = 8;
	if(1===1) {
		b = 8;
	}
	console.log(b);
	return n + m;
}

addNumbers(2, 3, 8,);
console.log(x);

//					 0  1  2  3  4  5  6
let ourArray = [1, 2, 3, 4, 5, 6, 7];

let arrLen = ourArray.length;
for(let i = 0; i<arrLen; i++){
	console.log("i is equal to: " + i);
}

let z = 0;
while (z < 10) {
	console.log('Ran');
	z = z + 1;
}