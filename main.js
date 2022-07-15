const button = document.getElementById("generate");
const container = document.getElementById("container");

// ------------------------------------------------------------------------------
// Team member 1
const generateNumbers = () => {
	let numbers = [];

	for (let i = 0; i < 6; i++){
		numbers.push(Math.floor(Math.random() * 53) + 1)
	}

	// Generate 6 random numbers from 1 to 53 and add them to the numbers array

	return numbers; // Return numbers when done
};

// ------------------------------------------------------------------------------
// Team member 2
const generateColorHex = () => {
	let colorString = "";

  // Generate a random hex color string here and asign it to colorString

  colorString += "#";
  let letterArray = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
  ];
  for (let i = 0; i < 6; i++) {
    let numberOfLetters = letterArray.length;
    let randomIndex = Math.round(Math.random() * numberOfLetters);
    let letterToAdd = letterArray[randomIndex];
    colorString += letterToAdd;
  }

  return colorString;
};

// ---------------------------------------
// Team member 3
const getNumbersHtml = (numbers) => {
	let numbersHtml = '';

  for(let i=0; i < numbers.length ; i++){
    numbersHtml += `<div style="background-color: ${generateColorHex()};" class="number">${numbers[i]}</div>`;
 }
	

	// Generate a string that looks like <div class="number">1</div><div class="number">29</div> ...
	// Use generateColorHex() to generate background-color in inline CSS for each number div (style="background-color: #XXXXXX")

	return numbersHtml
};

// ---------------------------------------
// Team member 4
const getIsAllEven = (numbers) => {
	let isAllEven = false;
s
	// Check if all lottery numbers in array are even and set isAllEven appropriately
	for (number of numbers){
		if(number%2!===0){
			isAllEven = false;
		}else{
			isAllEven = true;
		}
	}
		return isAllEven
};
// ---------------------------------------
// Finished generator
button.addEventListener('click', () => {
	console.log('Generator clicked!');
	const numbers = generateNumbers();
	const html = getNumbersHtml(numbers);
	const numberTextColor = getIsAllEven() ? '#005500' : '#000000';
	document.head.innerHTML += `<style>#container > div { color: ${numberTextColor} }</style>`;
	container.innerHTML = html;
});