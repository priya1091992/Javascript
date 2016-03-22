/**
 * Created by priya on 22/3/16.
 */
var obj1={
  value1:"value in object 1"
}

var obj2={
  value1:"value in object 2"
}

function print(){
  console.log(this.value1);
}
console.log(print.bind(obj1)); //[Function: bound print]
var obj1func=print.bind(obj1); //bind always returns a function
obj1func();
var obj2func=print.bind(obj2);
obj2func();

// Example

