function createEncoder(shift) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    
    return function(message) {
        let encode = "";
        for(let i = 0; i < message.length; i++) {
            const char = message[i];
            const index = alphabet.indexOf(char);
            if(index !== -1) {
                const newIndex = (index + shift) % 26;
                encode += alphabet[newIndex];
            }else {
                encode += char;
            }
        }
        return encode;
    }
}

const encoder3 = createEncoder(3);
console.log(encoder3("hello"));