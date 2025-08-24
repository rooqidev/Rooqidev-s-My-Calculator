function calculate(string) {
  // The Array of all arithmetic operators 
  const operators = ["*", "/", "+", "-"]
  // iterating over it to get each operator
  for (let i = 0; i < operators.length; i++) {
    // the opereator
    let operator = operators[i];
    // another loop for Checking & iterating over that expression
    for (let it = 0; it < string.length; it++) {
      let str = string[it];
      // checking if any operator of that array exist in this expression user entered
      // if Exist, function wil do further calculation, if not? it will ignore it & check for other operator..
      if (operator === str) {
        let new_l = string.split(operator);
        // converting that expression into an array & splitting it over that operator
        let n1 = Number(new_l[0]);
        let n2 = Number(new_l[1]);
        // assigning Values as variables by slicing that expression
        if (operator === "*") {
          // Doing further calculation
          let result = n1 * n2;
          // showing the result into calculator display
          document.getElementById("Display").value = result;
        } else if (operator === "/") {
          let result = n1 / n2;
          document.getElementById("Display").value = result;
        } else if (operator === "+") {
          
          let result = n1 + n2;
          document.getElementById("Display").value = result;
        } else{
          let result = n1 - n2;
          document.getElementById("Display").value = result;
        }
      }
    }
  }
};

// Functions triggered by any button Being clicked
function submit(input) {
  // if user want to delete/ correct some text, 
  if (input === "©") {
    // taking the current data & converting it into Array Using Split() method, being shown in calculator display 
    let string = document.getElementById("Display").value.split("");
    //poping the last items that data
    string.pop();
    // converting it back to String
    let _string = string.join("");
    // displaying new string on calculator display
    document.getElementById("Display").value = _string;
  }
  else if (input === "C") {
    // when user want clear the display of calculator
   // clearing calculator display using it ID
    document.getElementById("Display").value = "";
  } else if(input === "="){
    // When user want to make any calculation,
    // it will take all Expression as string
    let string = document.getElementById("Display").value;
    // Function will Calculate the results
    calculate(string);
    
  } else {
    // user entring expression..
    document.getElementById("Display").value += input;
  }
};

// Fully Functional My Calculator
// by @farooqdev