/**
 * Created by priya on 26/3/16.
 */

function firstName(name){
  this.name=name;

}

function lastName(lastname){
  this.lastname=lastname
}

lastName.prototype.age=24;

var obj1=new lastName('choudhary');
console.log(obj1.__proto__);            //lastName{age:24}
console.log(obj1.__proto__.lastname);    //undefined
console.log(obj1.__proto__.age);        //24
console.log(obj1.age);                  //24
console.log(obj1.lastname);             //choudhary
console.log(lastName.prototype);        //lastName{age:24}
console.log(lastName.prototype.lastname);   //undefined//
console.log(lastName.prototype.age);       //24

firstName.prototype=new lastName('Choudhary');

var obj2=new firstName("priya");

console.log('firstname;', obj2.name, 'Second name;', obj2.lastname, obj2.age); //firstname; priya Second name; Choudhary 24
console.log("Proto", obj2.__proto__.age,obj2.__proto__.lastname, obj2.name); //Proto 24 Choudhary priya
console.log("Prototype", firstName.prototype.age,firstName.prototype.lastname);//Prototype 24 Choudhary

