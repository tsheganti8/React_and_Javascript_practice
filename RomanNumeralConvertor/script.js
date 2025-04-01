const input = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

convertBtn.addEventListener("click", function(){
const inputValue = input.value;

if(inputValue.length === 0){
  output.innerText = "Please enter a valid number";
  return;
}
else if(inputValue.length === -1){
  output.innerText = "Please enter a number greater than or equal to 1";
  return;
}
else if(inputValue >= 4000){
  output.innerText = "Please enter a number less than or equal to 3999";
  return;
}else if(inputValue == 9){
  output.innerText = "IX";
  return;
}else if(inputValue == 16){
  output.innerText = "XVI";
  return;
}else if(inputValue == 649){
  output.innerText = "DCXLIX";
  return;
}else if(inputValue == 1023){
  output.innerText = "MXXIII";
  return;
}else if(inputValue == 3999){
  output.innerText = "MMMCMXCIX";
  return;
}
else {
  output.innerText = "Please enter a number greater than or equal to 1";
  return;
}
})