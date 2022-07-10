const container = document.querySelector(".data-container");
let sp=document.getElementById('speed').value;
// function to generate bars
function generatebars(num = 30) {
	
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
async function InsertionSort() {
    console.log("insertion sort");
let bars = document.querySelectorAll(".bar");
// Assign 0 to min_idx
// var min_idx = 0;
for (let i = 1; i < bars.length; i++) 
{
  //   console.log(i);
	// Assign i to min_idx
	//min_idx = i;
   
	// Provide darkblue color to the ith bar
	bars[i].style.backgroundColor = "blue";
    let temp4=bars[i].childNodes[0].innerHTML;
    let temp5=bars[i].style.height;
    let j=0;
	for (j = i - 1; j >=0&&(parseInt(bars[j].childNodes[0].innerHTML)>parseInt(temp4)); j--) {

	// Provide red color to the jth bar
	bars[j].style.backgroundColor = "skyblue";
		
	// To pause the execution of code for 300 milliseconds
	sp=document.getElementById('speed').value;
	await new Promise((resolve) =>
		setTimeout(() => {
		resolve();
		}, 1500/sp)
	);

	// To store the integer value of jth bar to var1
	//var val1 = parseInt(bars[j+1].childNodes[0].innerHTML);

	// To store the integer value of (min_idx)th bar to var2
	//var val2 = parseInt(bars[j].childNodes[0].innerHTML);
		
	var temp1 = bars[j+1].style.height;
	var temp2 = bars[j+1].childNodes[0].innerText;
	bars[j+1].style.height = bars[j].style.height;
	bars[j].style.height = temp1;
	bars[j+1].childNodes[0].innerText = bars[j].childNodes[0].innerText;
	bars[j].childNodes[0].innerText = temp2;
	
	sp=document.getElementById('speed').value;
	await new Promise((resolve) =>
		setTimeout(() => {
		resolve();
		}, 1500/sp)
	);
    bars[j].style.backgroundColor='blue';
	
	}

	// To swap ith and (min_idx)th bar
	// var temp1 = bars[min_idx].style.height;
	// var temp2 = bars[min_idx].childNodes[0].innerText;
	// bars[min_idx].style.height = bars[i].style.height;
	// bars[i].style.height = temp1;
	// bars[min_idx].childNodes[0].innerText = bars[i].childNodes[0].innerText;
	// bars[i].childNodes[0].innerText = temp2;
	
	// To pause the execution of code for 300 milliseconds
	sp=document.getElementById('speed').value;
	await new Promise((resolve) =>
	setTimeout(() => {
		resolve();
	}, 1500/sp)
	);

	// Provide skyblue color to the (min-idx)th bar
    bars[j+1].style.height=temp5;
    bars[j+1].childNodes[0].innerText=temp4;
	//bars[min_idx].style.backgroundColor = " rgb(24, 190, 255)";

	// Provide lightgreen color to the ith bar
	//bars[i].style.backgroundColor = " rgb(49, 226, 13)";
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