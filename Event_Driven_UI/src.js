/*
index.html script is below:
function doFirst() {
    console.log("First Thing!");
}

function doSecond(){
    console.log("Second Thing!");
}

const btn = document.getElementById('btn');

btn.addEventListener('click', () =>{
    doFirst();
    doSecond();
});
*/

// Below script is for btn_color.html
const btn_red = document.getElementById('red');
const btn_green = document.getElementById('green');
const btn_blue = document.getElementById('blue');


// btn_red.addEventListener('click', (event) => {
//     console.log("event type :" , event.type);
//     document.body.style.backgroundColor = 'red';
//     btn_red.style.backgroundColor = 'white';
//     btn_red.style.color = 'red';
//     btn_green.style.backgroundColor = 'green';
//     btn_green.style.color = 'white';
//     btn_blue.style.backgroundColor = 'blue';
//     btn_blue.style.color = 'white';
// });

btn_red.addEventListener('click', () => {
    document.body.style.backgroundColor = 'red';
});

btn_green.addEventListener('click', () =>{
    document.body.style.backgroundColor = 'green';
});

btn_blue.addEventListener('click', () =>{
    document.body.style.backgroundColor = 'blue';
});


document.querySelector('body').addEventListener('click', (event) => {
    console.log("event type :" , event.type);
    console.log("event target :" , event.target);
    console.log("tagname: ", event.target.tagName);
    console.log("text: ", event.target.textContent);
});