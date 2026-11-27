
const addBtn = document.querySelector('.add-btn');
const modal = document.querySelector('.modal');
const modalinput = document.querySelector('.modal-input');
const ticketContainer = document.querySelector('.ticket-container');
const toolbox = document.querySelector('.toolbox');

let selectedColor = "#ff6b6b";

let ticketCounter = 0;
let ticketArr = [];

function generateTicketId() {
    ticketCounter++;
    return `ticket-${ticketCounter}`;
}

function createTicket(taskText, color) {
    const id = generateTicketId();

    const ticket = document.createElement('div');
    ticket.classList.add('ticket');
    ticket.setAttribute('data-id', id);

    const colorBand = document.createElement('div');
    colorBand.classList.add('ticket-color-band');
    colorBand.style.backgroundColor = color;

    const text = document.createElement('div');
    text.classList.add('ticket-text');
    text.textContent = taskText;

    const lock = document.createElement('div');
    lock.classList.add('ticket-lock');
    lock.innerHTML = '<i class="fa-solid fa-unlock"></i>';

    const removeBtn = document.createElement('div');
    removeBtn.classList.add('ticket-remove');
    removeBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';

    ticket.append(colorBand, text, lock, removeBtn);

    ticketContainer.appendChild(ticket);

    return id;
}

let isModalOpen = false;

addBtn.addEventListener('click', function () {
    isModalOpen = !isModalOpen;

    if (isModalOpen) {
        modal.classList.remove('hidden');
        addBtn.textContent = "-";
    } else {
        modal.classList.add('hidden');
        addBtn.textContent = "+";
        modalinput.value = "";
    }
});

modalinput.addEventListener('keydown', function (event) {
    if (event.key === "Enter") {
        const taskText = modalinput.value.trim();

        if (taskText === '') {
            alert('Please, Enter task description');
            return;
        }

        const id = createTicket(taskText, selectedColor);

        ticketArr.push({
            id: id,
            text: taskText,
            color: selectedColor,
            isLocked: false,
        });

        modalinput.value = "";
    }
});

let activeColorBox = document.querySelector('.color-pink');
activeColorBox.classList.add('active');

toolbox.addEventListener('click', function (event) {
    const clickedElement = event.target;

    if (!clickedElement.classList.contains('color-box')) {
        return;
    }

    activeColorBox.classList.remove('active');

    selectedColor = clickedElement.dataset.color;
    activeColorBox = clickedElement;

    activeColorBox.classList.add('active');
});

