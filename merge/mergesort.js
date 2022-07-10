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
let arr=[];
async function MergeSort() 
{
let bars = document.querySelectorAll(".bar");
// Assign 0 to min_idx



let sz=bars.length;
for(let i=0;i<sz;i++)
{
    arr.push(0);
}
for (let l = 1; l < bars.length; l *= 2) { 
    for (let j = 0; j < bars.length; j += 2 * l) {
        sp=document.getElementById('speed').value;
        await new Promise((resolve) =>
        setTimeout(() => {
        resolve();
        }, 1500/sp)
      );  
        for(let i=j;i<(j+l);i++)
        {
            bars[i].style.backgroundColor='blue';
        }
        for(let i=j+l;i<(j+2*l);i++)
        {
            bars[i].style.backgroundColor='skyblue';
        }
        let first = j;
        let second = j + l;
        let ind = j;
        while((first)<(j+l)||(second)<(j+2*l))
        {
            if(first==j+l)
            {
                arr[ind]=parseInt(bars[second].innerText);
                second++;
                ind++;

            }
            else if(second==(j+2*l))
            {
                console.log(bars[first].innerText)
                arr[ind]=parseInt(bars[first].innerText);
                first++;
                ind++;
            }
            else{
               // first++;
                let val1=parseInt(bars[first].innerText);
                let val2=parseInt(bars[second].innerText);
                if(val1<val2)
                {
                    arr[ind]=parseInt(bars[first].innerText);
                    first++;
                    ind++;
                }
                else
                {
                    
                   arr[ind]=parseInt(bars[second].innerText);
                   second++;
                   ind++;
                }


            }

        }
        sp=document.getElementById('speed').value;
        await new Promise((resolve) =>
        setTimeout(() => {
        resolve();
        }, 1500/sp)
      );  
        for(let t=j;t<j+2*l;t++)
        {
            bars[t].style.height=`${4*parseInt(arr[t])+20}`;
            bars[t].innerText=`${arr[t]}`;
        }
        sp=document.getElementById('speed').value;
        await new Promise((resolve) =>
        setTimeout(() => {
        resolve();
        }, 1500/sp)
      );  
        for(let i=j;i<j+2*l;i++)
        {
            bars[i].style.backgroundColor='blue';
        }
        sp=document.getElementById('speed').value;
        await new Promise((resolve) =>
        setTimeout(() => {
        resolve();
        }, 1500/sp)
      );  
      for(let i=j;i<j+2*l;i++)
        {
            bars[i].style.backgroundColor='rgb(117, 145, 188)';
        }
}
}
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