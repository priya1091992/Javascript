/**
 * Created by priya on 21/3/16.
 */
var a={
  name:"priya",

b:{
  age:24
}
}

var c={
  name:"priya",

  b:{
    age:24
  }
}
console.log(a==c);  //false
a=c;
console.log(a==c);  //true
console.log(typeof(c)==typeof(a));//true

