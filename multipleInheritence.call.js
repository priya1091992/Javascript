/**
 * Created by priya on 21/3/16.
 */

function namePerson(name){
  this.name=name;
}

function agePerson(age){
  this.age=age;
}

function Person(name,age,gender){

  namePerson.call(this,name);
  agePerson.call(this,age);

  this.gender=gender;
}

var newPerson= new Person("ABC",20,'Female');
console.log("The properties of person", newPerson.name,newPerson.age,newPerson.gender);
