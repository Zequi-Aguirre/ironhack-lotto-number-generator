const button = document.getElementById("generate");
const container = document.getElementById("container");

// ------------------------------------------------------------------------------
// Team member 1
const generateNumbers = () => {
	let numbers = [];

	// Generate 6 random numbers from 1 to 53 and add them to the numbers array

	// return [1, 29, 14, 32, 47, 53]; // Return numbers when done
};

// ------------------------------------------------------------------------------
// Team member 2
const generateColorHex = () => {
	let colorString = '';

	// Generate a random hex color string here and asign it to colorString

	return '#FEDCBA'; // Return colorString when done
};

// ---------------------------------------
// Team member 3
const getNumbersHtml = (numbers) => {
	let numbersHtml = '';
	
	// Generate a string that looks like <div class="number">1</div><div class="number">29</div> ...
	// Use generateColorHex() to generate background-color in inline CSS for each number div (style="background-color: #XXXXXX")

	return '<div class="number">1</div><div class="number">29</div>'; // Return numbersHtml when done 
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