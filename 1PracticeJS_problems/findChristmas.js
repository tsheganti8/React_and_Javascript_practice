function WhenIsChristmas(){
    
    const date = new Date();
    let christmas = new Date("2025/12/26");
    
    let findDays = christmas.getTime() - date.getTime();
    let result = Math.ceil(findDays / (1000 * 60 * 60 * 24)); 
    console.log("Days left until Christmas: " + result);
    
}
WhenIsChristmas();