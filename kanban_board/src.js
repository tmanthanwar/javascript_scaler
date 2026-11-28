
// ========= DOM Elements =============
const addBtn = document.querySelector('.add-btn');
const showAllBtn = document.querySelector('.show-all-btn');
const modal = document.querySelector('.modal');
const modalinput = document.querySelector('.modal-input');
const ticketContainer = document.querySelector('.ticket-container');
const toolbox = document.querySelector('.toolbox');

// ============ STATE =================
let selectedColor = "#ff6b6b"; // Default to pink (first color)
let ticketCounter = 0;
let ticketArr = [];
const COLORS = ["#ff6b6b", "#6bcbff", "#6bff9e", "#ffb86b"];

// ============ Helper Functions ================

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
    text.setAttribute('contenteditable','true');

    //create ticekt-lock div
    const lock = document.createElement('div');
    lock.classList.add('ticket-lock');
    lock.innerHTML = '<i class="fa-solid fa-lock-open"></i>';

    // New - Ticket Remove button
    const removeBtn = document.createElement('div');
    removeBtn.classList.add('ticket-remove');
    removeBtn.innerHTML = '<i class="fa-solid fa-xmark">'
    // Asselmble the ticket --- adding element to ticket in one go.
    
    // ticket.appendChild(colorBand);
    // ticket.appendChild(text);
    // ticket.appendChild(lock);
    // ticket.appendChild(removeBtn);

    ticket.append(colorBand, text, lock, removeBtn);
    //add ticket to ticket-container
    ticketContainer.appendChild(ticket);

    return id;
}

function filterTicketByColor(color){
    let allTicket = document.querySelectorAll('.ticket');
    allTicket.forEach(function(ticket){
        const ticketId = ticket.getAttribute('data-id');
        const ticketData = ticketArr.find(function(t){
            return t.id === ticketId;
        });

        if(ticketData && ticketData.color === color){
            ticket.style.display = "flex";
        }else{
            ticket.style.display = "none";
        }
    })
}

function showAllTicket(){
    let allTicket = document.querySelectorAll('.ticket');
    allTicket.forEach(function(ticket){
        ticket.style.display = "flex";
    }); 
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
        
        if(taskText === '') {
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

    filterTicketByColor(selectedColor);

});

showAllBtn.addEventListener('click', function(){
    showAllTicket();
})

ticketContainer.addEventListener('click', function(event){
    const clickedElement = event.target;

    // ========= Handle Remove Button =========== 
    const removeBtn = clickedElement.closest('.ticket-remove');

    if(removeBtn){
        const ticket = removeBtn.closest('.ticket');
        const ticketId = ticket.getAttribute('data-id');

        ticketArr = ticketArr.filter(function(t) {
            return t.id !== ticketId;
        });

        ticket.remove();
        return;
    }

    // ============= Handle Lock/ Unlock ===============

    const lockbtn = clickedElement.closest('.ticket-lock');
    if(lockbtn) {
        const ticket = lockbtn.closest('.ticket');
        const ticketId = ticket.getAttribute('data-id');
        const textElement = ticket.querySelector('.ticket-text');
        const icon = lockbtn.querySelector('i');

        const ticketData = ticketArr.find(function (t) {
            return t.id === ticketId;
        });

        if(!ticketData){
            return;
        }

        ticketData.isLocked = !ticketData.isLocked;
        textElement.setAttribute('contenteditable', ticketData.isLocked ? 'false' : 'true');

        if(ticketData.isLocked){
            icon.classList.remove('fa-lock-open');
            icon.classList.add('fa-lock');
        } else {
            icon.classList.remove('fa-lock');
            icon.classList.add('fa-lock-open');
        }
    }


    //=========== Handle Color Cycling ===============

    const colorBand = clickedElement.closest('.ticket-color-band');
    if(colorBand) {
        const ticket = colorBand.closest('.ticket');
        const ticketId = ticket.getAttribute('data-id');
        const ticketData = ticketArr.find(function(t){
            return t.id === ticketId;
        });

        if(!ticketData){
            return;
        }

        // Current color index
        const currentIndex = COLORS.indexOf(ticketData.color);
        const nextIndex = (currentIndex + 1) % COLORS.length;

        ticketData.color = COLORS[nextIndex];
        colorBand.style.backgroundColor = COLORS[nextIndex];
    }
});

//======Ticket Text Editing (Sync data on blur) =========== 
ticketContainer.addEventListener('blur', function(event){
    let editableText = event.target;
    if(!editableText.classList.contains('ticket-text')) {
        return;
    }

    let ticket = editableText.closest('.ticket');
    let ticketId = ticket.getAttribute('data-id');
    let newText = editableText.textContent.trim();

    let ticketData = ticketArr.find(function(t) {
        return t.id === ticketId;
    });

    if(ticketData){
        ticketData.text = newText;
    }
}, true);
//====== Color Selection (Event Description) ======

let activeColorBox = document.querySelector('.color-pink');
// console.log(activeColorBox);
activeColorBox.classList.add('active');