const container = document.querySelector(".data-container");
let sp=document.getElementById('speed').value;
// function to generate bars
function generatebars(num = 32) {
	
//for loop to generate 20 bars
for (let i = 0; i < num; i += 1) {

	// To generate random values from 1 to 100
	const value = Math.floor(Math.random() * 100) + 1;
	
	// To create element "div"
	const bar = document.createElement("div");

	// To add class "bar" to "div"
	bar.classList.add("bar");

	// Provide height to the bar
	bar.style.height = `${value * 4+20}px`;

	// Translate the bar towards positive X axis
	bar.style.transform = `translateX(${i * 20}px)`;
	
	// To create element "label"
	const barLabel = document.createElement("label");

	// To add class "bar_id" to "label"
	barLabel.classList.add("bar_id");

	// Assign value to "label"
	barLabel.innerHTML = value;
	
	// Append "Label" to "div"
	bar.appendChild(barLabel);

	// Append "div" to "data-container div"
	container.appendChild(bar);
}
}

// asynchronous function to perform "Selection Sort"
async function SelectionSort() {
let bars = document.querySelectorAll(".bar");
// Assign 0 to min_idx
let min_idx = 0;
for (let i = 0; i < bars.length; i ++) {
	sp=document.getElementById('speed').value;
	console.log(sp);
	// Assign i to min_idx
	min_idx = i;

	// Provide darkblue color to the ith bar
	bars[i].style.backgroundColor = "darkblue";
	for (let j = i + 1; j < bars.length; j ++) {

	// Provide red color to the jth bar
	bars[j].style.backgroundColor = "yellow";
	sp=document.getElementById('speed').value;
	console.log(sp);
	// To pause the execution of code for 3000 milliseconds
	await new Promise((resolve) =>
		setTimeout(() => {
		resolve();
		}, 1500/sp)
	);

	// To store the integer value of jth bar to var1
    let val1 = parseInt(bars[j].childNodes[0].innerHTML);

	// To store the integer value of (min_idx)th bar to var2
	let  val2 = parseInt(bars[min_idx].childNodes[0].innerHTML);
		
	// Compare val1 & val2
	if (val1 < val2) {
		if (min_idx !== i) {

		// Provide skyblue color to the (min-idx)th bar
		bars[min_idx].style.backgroundColor = "rgb(117, 145, 188)";
		}
		min_idx = j;
		bars[min_idx].style.backgroundColor="red";
	} else {

		// Provide skyblue color to the jth bar
		bars[j].style.backgroundColor = "rgb(117, 145, 188)";
	}
	}

	// To swap ith and (min_idx)th bar
	sp=document.getElementById('speed').value;
	console.log(sp);
	await new Promise((resolve) =>
	setTimeout(() => {
		resolve();
	}, 1500/sp)
	);
	var temp1 = bars[min_idx].style.height;
	var temp2 = bars[min_idx].childNodes[0].innerHTML;
	bars[min_idx].style.height = bars[i].style.height;
	bars[i].style.height = temp1;
	bars[min_idx].childNodes[0].innerHTML = bars[i].childNodes[0].innerHTML;
	bars[i].childNodes[0].innerHTML = temp2;
	
	// To pause the execution of code for 300 milliseconds
	

	// Provide skyblue color to the (min-idx)th bar
	bars[min_idx].style.backgroundColor = "rgb(117, 145, 188) ";

	// Provide lightgreen color to the ith bar
	bars[i].style.backgroundColor = " rgb(49, 226, 13)";
}

// To enable the button "Generate New Array" after final(sorted)
document.getElementById("Button1").disabled = false;
document.getElementById("Button1").style.backgroundColor = "white";

// To enable the button "Selection Sort" after final(sorted)
document.getElementById("Button2").disabled = false;
document.getElementById("Button2").style.backgroundColor = "white";
}

// Call "generatebars" function
generatebars();

// function to generate new random array
function generate()
{
window.location.reload();
}

// function to disable the button
function disable()
{
// To disable the button "Generate New Array"
document.getElementById("Button1").disabled = true;
document.getElementById("Button1").style.backgroundColor = "#d5dadf";

// To disable the button "Selection Sort"
document.getElementById("Button2").disabled = true;
document.getElementById("Button2").style.backgroundColor = "#d5dadf";
}