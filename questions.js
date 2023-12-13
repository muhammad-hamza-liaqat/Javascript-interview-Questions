// hoisting

hoistedVariable = 10;
console.log(hoistedVariable);
var hoistedVariable;

hoistedFunction();

function hoistedFunction(){
    console.log("called first declared after")
}

// accNumber = "01005639601";
console.log("account Number: ",accNumber);
// declared the variable but not assigned to the value
var accNumber;

name= "Muhammad Hamza Liaqat"
console.log(name);
// let name; // reference error will be thrown

