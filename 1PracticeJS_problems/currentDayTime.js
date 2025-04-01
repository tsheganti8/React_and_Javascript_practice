const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const d = new Date();
let day = days[d.getDay()];

let Hours = d.getHours() % 12 || 12;
let Minutes = String(d.getMinutes()).padStart(2, '0');
let seconds = String(d.getSeconds()).padStart(2, '0');
let period = d.getHours() < 12 ? 'AM' : 'PM';

let time = Hours+ " " + period + ":" + Minutes + ":" + seconds;

console.log("Today is:", day);
console.log("Current Time is:", time);
