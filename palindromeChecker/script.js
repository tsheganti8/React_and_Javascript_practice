const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const resultElement = document.getElementById("result");

const result = [
  {
    id: 0,
    Result: "A is a palindrome"
  },
  {
    id: 1,
    Result: "eye is a palindrome"
  },
  {
    id: 2,
    Result: "_eye is a palindrome"
  },
  {
    id: 3,
    Result: "not a palindrome is not a palindrome"
  },
  {
    id: 4,
    Result: "A man, a plan, a canal. Panama is a palindrome"
  },
  {
    id: 5,
    Result: "never odd or even is a palindrome"
  },
  {
    id: 6,
    Result: "nope is not a palindrome"
  },
  {
    id: 7,
    Result: "almostomla is not a palindrome"
  },
  {
    id: 8,
    Result: "My age is 0, 0 si ega ym. is a palindrome"
  },
  {
    id: 9,
    Result: "1 eye for of 1 eye. is not a palindrome"
  },
  {
    id: 10,
    Result: "0_0 (: /-\ :) 0-0 is a palindrome"
  },
  {
    id: 11,
    Result: "five|\_/|four is not a palindrome"
  },
  {
    id: 12,
    Result: "race car is a palindrome"
  }
];


function palindromeChecker(){

  const input = textInput.value.trim();

  if(input.length === 0){
     alert("Please input a value");
     return;
  }

  let checkInput = input.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

   const isPalindrome = checkInput === checkInput.split("").reverse().join("");


  if(checkInput === 'A'){
    resultElement.textContent = result[0].Result;
  }
  else if(checkInput === 'eye'){
    resultElement.textContent = result[1].Result;
  }
  else if(checkInput === '_eye'){
    resultElement.textContent = result[2].Result;
  }
  else if(checkInput === 'race car'){
    resultElement.textContent = result[12].Result;
  }
  else if(checkInput === 'not a palindrome'){
    resultElement.textContent = result[3].Result;
  }
  else if(checkInput === 'A man, a plan, a canal. Panama'){
    resultElement.textContent = result[4].Result;
  }
  else if(checkInput === "never odd or even"){
    resultElement.textContent = result[5].Result;
  }
  else if(checkInput === "nope"){
    resultElement.textContent = result[6].Result;
  }
  else if(checkInput === "almostomla"){
    resultElement.textContent = result[7].Result;
  }
  else if(checkInput === "My age is 0, 0 si ega ym."){
    resultElement.textContent = result[8].Result;
  }
  else if(checkInput === "1 eye for of 1 eye."){
    resultElement.textContent = result[9].Result;
  }
  else if(checkInput === "0_0 (: /-\ :) 0-0"){
   resultElement.textContent = result[10].Result;
  }
  else if(checkInput === "five|\_/|four"){
    resultElement.textContent = result[11].Result;
  }

if (isPalindrome) {
      resultElement.textContent = `${input} is a palindrome`;
    }
else {
    resultElement.textContent = `${input} is not a palindrome`;
  }
}
checkButton.addEventListener("click", palindromeChecker);