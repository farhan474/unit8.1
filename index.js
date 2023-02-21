// for each
function doubleValues(array) {
	let temp = [];
	array.forEach((val) => {
		temp.push(val * 2);
	});
	return temp;
}

function onlyEvenValues(array) {
	let temp = [];
	array.forEach((val) => {
		if (val % 2 == 0) {
			temp.push(val);
		}
	});
	return temp;
}

function showFirstAndLast(array) {
	let temp = [];
	array.forEach((val) => {
		temp.push(val.charAt(0) + val.charAt(val.length - 1));
	});
	return temp;
}

function addKeyAndValue(array, key, val) {
	let temp = array;
	temp.forEach((val, index) => {
		temp[index].push(`${key}:  '${val}' `)
	});
	return temp;
}

// map

function doubleValuesWithMap(array) {
	let doubleVal = array.map((val) => {
		return val * 2;
	});
	return doubleVal;
}

function valTimesIndex(array) {
	let valTimesIndx = array.map((val, index) => {
		return val * index;
	});
	return valTimesIndx;
}

function extractKey(array, key) {
	let Key = array.map(() => {
		return array.key;
	});
	return Key;
}

function extractFullName(array) {
	let fullName = array.map(() => {
		return array.first + " " + array.last;
	});
	return fullName;
}

// filter

function filterByValue(array, key) {
	let hasKeys = array.filter((val) => {
		return val.hasOwnProperty(key);
	});
	return hasKeys;
}

function find(array, num) {
	let found = array.filter((val) => {
		return val === num
	});
	if (found == "") {
		return undefined;
	}
	else return found;

}

function findInObj(array, key, someVal) {
	let hasKeyAndVal = array.filter((val) => {
		console.log(val[key]);
		return val[key] == someVal;
	})
	return hasKeyAndVal[0];
}

function removeVowels(str) {

	return str.split("").filter((val) => { return val.search(/[aeiou]/gi) }).join("");

}

function doubleOddNumbers(array) {
	let odds = array.filter((val) => {
		return val % 2
	});
	return odds.map((val) => { return val * 2 });

}