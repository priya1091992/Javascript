///**
// * Created by priya on 21/3/16.
// */
//
function one(){
  this.name="Priya"
}

function two(){
}
two.prototype.age=24;

function three(){
  this.gender="female";
}

one.prototype=two.prototype;
var finalObj1= new one();

three.prototype=finalObj1;

var finalObj= new three();

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
one.prototype=new two(24);

function three(gender){
  this.gender=gender;
}
three.prototype=new one("priya");
var obj=new three("female");
console.log("name:",obj.name);
console.log("age:",obj.age);
console.log("gender:",obj.gender);
