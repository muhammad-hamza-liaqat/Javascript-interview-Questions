# Javascript-interview-Questions
a list of javascript interview questions

<!-- primitive types and non promivite types  -->

 primitives types are the pre defined data types in javascript such as int bigInt boolean non-primitive are the combination of different data types
 var object1={
     let x=10
     let y = "hamza" 
 };


 <!-- difference between == and === -->
 == only compares the values but === compares the values and the data type as well.


 <!-- difference between var and let -->
 <!-- implicit type coercion -->
 var x=3;
 var y="3"
 var z = x + y
 result => "33"


 <!-- static typed or dynamic typed -->
 JS is dynamically typed language
 variables have no types
 <!-- NaN -->
 not a number, it indicates that it is not a legal number in JS

 <!-- pass by value and pass by reference -->
 primitives data types are passed by value and non primitive data types are passed by reference 


 <!-- iife function in js -->
 <!-- use strict -->
 it allows all form of error, silent errors to be thrown. relaxation is ignored in this mood.

 <!-- higher order function -->
 a function which takes another functions as a arugement or returns the function in output as considered as higher order function

 <!-- Currying is an advanced technique to transform a function of arguments n, to n functions of one or fewer arguments. -->
 function add (a) {
  return function(b){
    return a + b;
  }
}

add(3)(4) 

<!-- Closures are an ability of a function to remember the variables and functions that are declared in its outer scope. -->