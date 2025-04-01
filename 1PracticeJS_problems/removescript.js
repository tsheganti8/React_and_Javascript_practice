function removeScript(word){
    if(word.slice(4, 10) === "Script"){
     return word.slice(0, 4);
    }else return word;
}

console.log(removeScript("CAstScript"));
console.log(removeScript("dameScript"));
console.log(removeScript("bandScript"));
console.log(removeScript("facttrip"));