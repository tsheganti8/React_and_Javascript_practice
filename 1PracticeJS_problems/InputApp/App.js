function handleClick(operation) {
    var Input1 = parseFloat(document.getElementById("Input1").value);
    var Input2 = parseFloat(document.getElementById("Input2").value);
   	
    if(isNaN(Input1) || isNaN(Input2)) {
    	alert("Please enter the valid number");
      return;
    }
    
    var result;
    
    if(operation === 'multiply') {
    	result = Input1 * Input2;
  	 } else if(operation === 'divide') {
    		if(Input2 === 0){
          alert("Its not a Valid Number");
          return;
      	}
    			result = Input1 / Input2;
     		}
   		document.getElementById("output").innerText = result;
    }
    
    document.getElementById("multiply").onclick = function(){
    	handleClick("multiply");
    }
    document.getElementById("divide").onclick = function(){
    	handleClick("divide");
    }
    

