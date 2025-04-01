function addPy(word){
    if(word === "") return false;
    if(!word.includes("Py")){
        word = word.concat("Py");
        return word;
    }
    else return word;
 }
 
 console.log(addPy("Python"));
 console.log(addPy("thon"));
 console.log(addPy("Hi"));
 console.log(addPy(""));