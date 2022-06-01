let size = document.querySelector('#sizer');
size.addEventListener('input', function(){
    generateBars(parseInt(size.value))
});
generateBars();

let time;
if(parseInt(size.value) > 20) time = 5;
else time = 15;

function generateBars(noBar = 60){
document.getElementById("bar").innerHTML = '';
let bars = []; 
for(let i = 0; i < noBar; ++i)
{
    bars.push(Math.floor(Math.random()*400) + 1);
}

const divs = document.querySelector('#bar');

for(let x = noBar - 1; x >= 0; --x)
 {
    const temp = document.createElement("div");
    temp.classList.add('sort');
    temp.classList.add('baritem');
    temp.style.height = bars[x] + "px";
    divs.append(temp);
 }
}

document.getElementById("newarr").addEventListener("click", function(){
    generateBars(size.value);
    enableSortingBtn();
    enableSizeSlider();
});

function swap(val1, val2)
{
    let temp = val1.style.height;
    val1.style.height = val2.style.height;
    val2.style.height = temp;
}

function delay(milisec) { 
    return new Promise(resolve => { 
        setTimeout(() => { resolve('') }, milisec); 
    }) 
}

function disableSortingBtn(){
    document.querySelector("#bubble").disabled = true;
    document.querySelector("#insertion").disabled = true;
    document.querySelector("#merge").disabled = true;
    document.querySelector("#quick").disabled = true;
    document.querySelector("#selection").disabled = true;
}

function enableSortingBtn(){
    document.querySelector("#bubble").disabled = false;
    document.querySelector("#insertion").disabled = false;
    document.querySelector("#merge").disabled = false;
    document.querySelector("#quick").disabled = false;
    document.querySelector("#selection").disabled = false;
}


function disableSizeSlider(){
    document.getElementById("sizer").disabled = true;
}

function enableSizeSlider(){
    document.getElementById("sizer").disabled = false;
}