const button = document.getElementById("generate");
const container = document.getElementById("container");

// ------------------------------------------------------------------------------
// Team member 1
// Generate 6 random numbers from 1 to 53 and add them to the numbers array
const generateNumbers = () => {
	let numbers = [];

	for (let i = 0; i < 6; i++) {
		let randomNumber = Math.floor(Math.random() * 53) + 1;

		if (numbers.includes(randomNumber)) {
			console.log(randomNumber + " it was already in the array");
		} else {
			console.log(randomNumber);
			numbers.push(randomNumber);
			i++;
		}
	}

	numbers = numbers.sort(function (a, b) {
		return a - b;
	});

	return numbers;
};

// ------------------------------------------------------------------------------
// Team member 2
// Generate a random hex color string here and asign it to colorString
const generateColorHex = () => {
	let colorString = "";

	colorString += "#";
	let letterArray = ["6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
	for (let i = 0; i < 6; i++) {
		let numberOfLetters = letterArray.length;
		let randomIndex = Math.round(Math.random() * numberOfLetters);
		let letterToAdd = letterArray[randomIndex];
		colorString += letterToAdd;
	}

	return colorString;
};

// ------------------------------------------------------------------------------
// Team member 3
// Generate a string that looks like <div class="number">1</div><div class="number">29</div> ...
// Use generateColorHex() to generate background-color in inline CSS for each number div (style="background-color: #XXXXXX")
const getNumbersHtml = (numbers) => {
	let numbersHtml = "";

	for (let i = 0; i < numbers.length; i++) {
		numbersHtml += `<div style="background-color: ${generateColorHex()};" class="number">${
			numbers[i]
		}</div>`;
	}

	return numbersHtml;
};

// ------------------------------------------------------------------------------
// Team member 4
// Check if all lottery numbers in array are even and set isAllEven appropriately
const getIsAllEven = (numbers) => {
	let isAllEven = true;
	for (number of numbers) {
		const isOdd = number % 2 !== 0;
		console.log(number);
		// if odd
		if (isOdd) {
			isAllEven = false;
		}
	}

	return isAllEven;
};

// ------------------------------------------------------------------------------
// Finished generator
button.addEventListener("click", () => {
	console.log("Generator clicked!");
	const numbers = generateNumbers();
	const html = getNumbersHtml(numbers);
	const numberTextColor = getIsAllEven(numbers) ? "#005500" : "#000000";
	document.head.innerHTML += `<style>#container > div { color: ${numberTextColor} }</style>`;
	container.innerHTML = html;
});
