///**
// * Created by priya on 21/3/16.
// */
//
function one1(){
  this.name="Priya"
}

function two1(){
}
two1.prototype.age=24;

function three1(){
  this.gender="female";
}

one1.prototype=two1.prototype;
var finalObj1= new one1();
three1.prototype=finalObj1;

var finalObj= new three1();

console.log(finalObj.name); //priya
console.log(finalObj.age);  //24
console.log(finalObj.gender); //female


//------------------------


function one(name){
  this.name=name;
}
function two(age){
  this.age=age;
}
function three(gender){
  this.gender=gender;
}

one.prototype=new two(24);
three.prototype=new one("priya");

var obj=new three("female");
console.log("name:",obj.name);
console.log("age:",obj.age);
console.log("gender:",obj.gender);
