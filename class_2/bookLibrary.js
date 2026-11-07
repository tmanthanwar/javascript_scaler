const library = [
    { title: "The Hobbit", author: "J.R.R. Tolkien", isAvailable: true },
    { title: "1984", author: "Orwell", isAvailable: true },
    { title: "Dune", author: "Frank Herbert", isAvailable: false },
]

function findBook(library, title) {
    for (const book of library) {
        if(book.title === title) {
            return book;
        }
    }
    return null;
}

function borrowBook(library, title) {
    const book = findBook(library, title);

    if(book === null){
        return `${title} is not available.`;
    }

    if(!book.isAvalable) {
        return `Sorry, The ${title} is already borrowed.`; 
    }

    book.isAvailable = false;
    return `You have borrowed the ${title}. Thank You!`;
}


function returnedBook(library, title) {
    const book = findBook(library, title);
    if(book === null){ 
        return `${title} is not found in library.`;
    }

    if(book.isAvailable) {
        return `The ${title} is not borrowed from the library.`;
    }   

    book.isAvailable = true;
    return `You have returned the ${title}. Thank You!`;
}

console.log(borrowBook(library, "Dune"));