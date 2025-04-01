function removeWord(word, position){
    if(position > 0 && position <= word.length){
       return word.slice(0, position - 1) + word.slice(position);
    }
    return word;
}

console.log(removeWord("apple", 3));
console.log(removeWord("cat", 1));
console.log(removeWord("dog", 2));
console.log(removeWord("hello", 3));
console.log(removeWord("wild", 3));