function reverseSentence(sentence) {
    const words = sentence.split(" ");
    console.log(words); // Output: ["Hello", "World"]
    const reversedWords = [];

    for(const word of words) {
        reversed = "";
        for(let i = word.length - 1; i >= 0; i--) {
            reversed += word[i];
        }
        reversedWords.push(reversed);
        console.log(reversedWords); // Output: ["olleH", "dlroW"]
    }
    return reversedWords.join(" ");
}

console.log(reverseSentence("Hello World")); // Output: "olleH dlroW";