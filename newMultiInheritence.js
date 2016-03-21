/**
 * Created by priya on 21/3/16.
 */
var extendObj = function(childObj, parentObj) {
  var tmpObj = function () {}
  tmpObj.prototype = parentObj.prototype;
  childObj.prototype = new tmpObj();
};

// base human object
var Human = function () {};
// inhertiable attributes / methods
Human.prototype = {
  name: '',
  gender: '',
  planetOfBirth: 'Earth',
  sayGender: function () {
    console.log(this.name + ' says my gender is ' + this.gender);
  },
  sayPlanet: function () {
    console.log(this.name + ' was born on ' + this.planetOfBirth);
  }
};

// male
var Male = function (name) {
  this.gender = 'Male';
  this.name = 'David';
};
// inherits human
extendObj(Male, Human);

// female
var Female = function (name) {
  this.name = name;
  this.gender = 'Female';
};
// inherits human
extendObj(Female, Human);

// new instances
var david = new Male('David');
var jane = new Female('Jane');

david.sayGender(); // David says my gender is Male
jane.sayGender(); // Jane says my gender is Female

Male.prototype.planetOfBirth = 'Mars';
david.sayPlanet(); // David was born on Mars
jane.sayPlanet(); // Jane was born on Earth
