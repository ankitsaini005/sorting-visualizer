const container = document.querySelector(".data-container");
let sp=document.getElementById('speed').value;
// function to generate bars
function generatebars(num = 30) {
	//canvas(300,300);
//for loop to generate 20 bars
for (let i = 0; i < num; i ++) {

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
	barLabel.innerText = value;
	
	// Append "Label" to "div"
	bar.appendChild(barLabel);

	// Append "div" to "data-container div"
	container.appendChild(bar);
}
}

let pv=0;
async function swap(i,j,bars)
{
    
    let first=bars[j].style.height;
    let second= bars[j].childNodes[0].innerText;
    bars[j].style.height=bars[i].style.height;
    bars[j].childNodes[0].innerText=bars[i].childNodes[0].innerText;
    bars[i].style.height=first;
    bars[i].childNodes[0].innerText=second;
}
 async function partition(low,high,bars)
{
    //for(let i=0;i<bars.length())
    sp=document.getElementById('speed').value;
    await new Promise((resolve) =>
           setTimeout(() => {
           resolve();
           }, 1500/sp)
         );   
    let i = low;
    let j = high;
    console.log(low,high);
    for(let i=low;i<=high;i++)
    {
        bars[i].style.backgroundColor='green';
    }
    sp=document.getElementById('speed').value;
    await new Promise((resolve) =>
           setTimeout(() => {
           resolve();
           }, 1500/sp)
         );   
    // let pv=low;
    

    let pivot = parseInt(bars[low].innerText);
    
  //  i++;
    bars[i].style.backgroundColor='blue';
    bars[j].style.backgroundColor='yellow';
    bars[low].style.backgroundColor='red';
    while (i <j)
    {
        while ((i<=high)&&(pivot >= parseInt(bars[i].innerText)))
            {
              sp=document.getElementById('speed').value;
              await new Promise((resolve) =>
              setTimeout(() => {
              resolve();
              }, 1500/sp)
            );  
            if(i!=low) 
              bars[i].style.backgroundColor='green';

                i++;
              if(i<=high)
              {
                bars[i].style.backgroundColor='blue';
              }  

            }
            // bars[pv].style.backgroundColor='green';
            // await swap(pv,i,bars);
            // pv=i;
            // bars[pv].style.backgroundColor='red';
            sp=document.getElementById('speed').value;
            await new Promise((resolve) =>
           setTimeout(() => {
           resolve();
           }, 1500/sp)
         );   


        while ((j>low)&&pivot < parseInt(bars[j].innerText))
            {
              sp=document.getElementById('speed').value;
              await new Promise((resolve) =>
              setTimeout(() => {
              resolve();
              }, 1500/sp)
            );   
              if(j!=low)
               bars[j].style.backgroundColor='green';
                j--;
                if(j>low)
                {
                  bars[j].style.backgroundColor='yellow';
                }
               
            }
            // bars[pv].style.backgroundColor='skybluez';
            // await swap(pv,j,bars);
            // pv=j;
            // bars[pv].style.backgroundColor='red';
            sp=document.getElementById('speed').value;
            await new Promise((resolve) =>
            setTimeout(() => {
            resolve();
            }, 1500/sp)
          );   
        if (i < j)
            {
               // bars[i].style.backgroundColor='skyblue';
                //bars[j].style.backgroundColor='skyblue';
                await swap(i,j,bars);
                //bars[i].style.backgroundColor='green';

          
            }
    }
    sp=document.getElementById('speed').value;
    await new Promise((resolve) =>
    setTimeout(() => {
    resolve();
    }, 1500/sp)
  );  
  if(j!=low) 
  bars[j].style.backgroundColor='yellow'; 
  sp=document.getElementById('speed').value;
  await new Promise((resolve) =>
    setTimeout(() => {
    resolve();
    }, 1500/sp)
  );   
            await swap(low,j,bars);
           bars[low].style.backgroundColor= 'green';
             console.log(low,high);
           bars[j].style.backgroundColor='red';
           sp=document.getElementById('speed').value;
           await new Promise((resolve) =>
           setTimeout(() => {
           resolve();
           }, 1500/sp)
         );   
     //  bars[j].style.backgroundColor= 'green';
       for(let i=low;i<=high;i++)
       {
           bars[i].style.backgroundColor= 'rgb(117, 145, 188)';
       }
    return j;
}
async function quicksort( bars,low, high)
{
    if (low < high)
    {
//         await new Promise((resolve) =>
//     setTimeout(() => {
//     resolve();
//     }, 100)
// );    
        let pivot=await partition( low, high,bars);
      
//        await new Promise((resolve) =>
//     setTimeout(() => {
//     resolve();
//     }, 100)
// );    
       
        await quicksort( bars,low, pivot - 1);
        
//        await new Promise((resolve) =>
//     setTimeout(() => {
//     resolve();
//     }, 100)
// );

        await quicksort(bars,pivot + 1, high);
        
        // document.getElementById("Button1").disabled = false;
        // document.getElementById("Button1").style.backgroundColor = "#6f459e";
        
        // // To enable the button "Selection Sort" after final(sorted)
        // document.getElementById("Button2").disabled = false;
        // document.getElementById("Button2").style.backgroundColor = "#6f459e";

    //     await new Promise((resolve) =>
    // setTimeout(() => {
    // resolve();
    // }, 1000)
//);
    }
    //return 2;
}
// asynchronous function to perform "Selection Sort"
async function QuickSort() {
    let bars = document.querySelectorAll(".bar");
    //console.log("1");
//     await new Promise((resolve) =>
//     setTimeout(() => {
//     resolve();
//     }, 300)
// );
await quicksort(bars,0,bars.length-1);

 //To enable the button "Generate New Array" after final(sorted)
 document.getElementById("Button1").disabled = false;
 document.getElementById("Button1").style.backgroundColor = "white";

// // To enable the button "Selection Sort" after final(sorted)
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
document.getElementById("Button1").style.backgroundColor = "#d8b6ff";

// To disable the button "Selection Sort"
document.getElementById("Button2").disabled = true;
document.getElementById("Button2").style.backgroundColor = "#d8b6ff";
}