/**
 * Created by priya on 20/3/16.
 */

function obj(firstName, secondName){
this.name=firstName;
  this.lastName=secondName;
  this.print=function(){
    console.log("Full name: ",this.name, this.lastName)
  }
}

var nameObj=new obj("Priya","choudhary");
nameObj.print();

nameObj.age=24;

nameObj.printage=function(){
  console.log("age:", nameObj.age);
}

nameObj.printage();

obj.prototype.completeInfo=function(){         // this will add a new function completeInfo in the object "obj".
  console.log(this.name, this.lastName, this.age);
}

nameObj.completeInfo();

var newObj=new obj("PRIYA","CHOUDHARY");
newObj.print();
//newObj.printage();  //does not print age as it is a function of nameobj object.
newObj.completeInfo(); // it prints age as undefined as age is also defined by the nameObj only

obj.prototype.age=24;

newObj.completeInfo(); //it will print the age as 24.
