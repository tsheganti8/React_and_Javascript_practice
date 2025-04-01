function rangerNumbers(){
    let range = [];
    for(i = 40; i <= 60; i++){
       range.push(i);
    }
    return Math.max(...range);
}
console.log(rangerNumbers());