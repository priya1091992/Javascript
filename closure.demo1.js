/**
 * Created by priya on 22/3/16.
 */

//first example

function one(value1, value2){
  var value3="value3";

  function two(){
    console.log(value1, value2, value3);
  }
  two();

}

one("value1", "value2"); //Output: value1 value2 value3







//second example

function outer(value1, value2){
  var value3="value3";

  function inner(){
    return value1+value2+value3;
  }
 return inner;

}
var func=outer("value1", "value2");

console.log(func()); //inner function holds the value even after the outer function returns.
                     // output: value1value2value3
