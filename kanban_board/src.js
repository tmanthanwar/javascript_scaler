const addBtn = document.querySelector('.add-btn');
const modal = document.querySelector('.modal');
const modalinput = document.querySelector('.modal-input');
const ticketContainer = document.querySelector('.ticket-container');
const toolbox = document.querySelector('.toolbox');

let selectorColor = "#ff6b6b"; // Default to pink (first color)

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
})