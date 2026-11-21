const title = document.getElementById('main-title');
console.log(title);

const para1 = document.querySelector('.intro');
console.log(para1);

const paraAll = document.querySelectorAll('.intro');
console.log(paraAll);

const btn = document.getElementById('btn-1');
console.log(btn);

btn.addEventListener('click', function(){
    console.log("Button was clicked");
});

para1.addEventListener('dblclick', function(){
    console.log("Paragraph was double-clicked");
});


const newDiv = document.createElement('div');
// console.log("Created Step 1 :", newDiv);

newDiv.innerText = "This is a new div created using JS";
// console.log("Created Step 2 :", newDiv);

let body = document.querySelector('body');
body.appendChild(newDiv);