
const addBtn = document.querySelector('.add-btn');
const modal = document.querySelector('.modal');
const modalinput = document.querySelector('.modal-input');
const ticketContainer = document.querySelector('.ticket-container');
const toolbox = document.querySelector('.toolbox');

let selectedColor = "#ff6b6b"; // Default to pink (first color)

let ticketCounter = 0;
let ticketArr = [];

//Session 2 development
function generateTicketId() {
    ticketCounter++;
    return `ticket-` + ticketCounter;
}

function createTicket(taskText, color) {
    const id = generateTicketId();

    //create ticket div 
    const ticket = document.createElement('div');
    ticket.classList.add('ticket');
    ticket.setAttribute('data-id', id);

    // create ticket-color-band div
    const colorBand = document.createElement('div');
    colorBand.classList.add('ticket-color-band');
    colorBand.style.backgroundColor = color;

    //create ticket-text div
    const text = document.createElement('div');
    text.classList.add('ticket-text');
    text.textContent = taskText;

    //create ticekt-lock div
    const lock = document.createElement('div');
    lock.classList.add('ticket-lock');
    lock.innerHTML = '<i class="fa-solid fa-unlock"></i>';

    // New - Ticket Remove button
    const removeBtn = document.createElement('div');
    removeBtn.classList.add('ticket-remove');
    removeBtn.innerHTML = '<i class="fa-solid fa-xmark">'
    // Asselmble the ticket
    ticket.appendChild(colorBand);
    ticket.appendChild(text);
    ticket.appendChild(lock);

    //add ticket to ticket-container
    ticketContainer.appendChild(ticket);

    return id;
}

// session 1 development
let isModalOpen = false;
addBtn.addEventListener('click', function() {
    isModalOpen = !isModalOpen;
    if(isModalOpen){
        modal.classList.remove('hidden');
        addBtn.textContent = "-";
    } else {
        modal.classList.add('hidden');
        addBtn.textContent = "+";
        modalinput.value = ""; // clear input when modal closes.
    }
});

// ====== Modal Input Handleing =======

modalinput.addEventListener('keydown', function(event) {
    if(event.key === "Enter") {
        const taskText = modalinput.value.trim();
        
        if(taskText === ''){
            alert('Please, Enter task description');
            return;
        }

        console.log("Task : ", taskText);
        console.log("Priority color: ", selectedColor);
        
        // In session 2 We will create a ticket here
        const id = createTicket(taskText, selectedColor);

        ticketArr.push({
            id: id,
            text: taskText,
            color: selectedColor,
            isLocked: false,
        });
        
        console.log(ticketArr);

        modalinput.value = "";
    }
});

//====== Color Selection (Event Description) ======

let activeColorBox = document.querySelector('.color-pink');
// console.log(activeColorBox);
activeColorBox.classList.add('active');

toolbox.addEventListener('click', function(event) {
    const clickedElement = event.target;
    
    if(!clickedElement.classList.contains('color-box')){
        return; // Gaurd Claud : ignore the click on non-color element
    }
    // remove 'active' state from previous selection
    activeColorBox.classList.remove('active');

    //update selectedColor and activeColorBox
    selectedColor = clickedElement.dataset.color;
    activeColorBox = clickedElement;

    // add 'active' state to the new selection
    activeColorBox.classList.add('active');

    console.log(activeColorBox, selectedColor);
})

