/**
 * Created by priya on 21/3/16.
 */

function Person( name ){
  this.name = name;
}
// Define the class methods.
Person.prototype = {
  // I swing this person in the trees.
  swing: function(){
    return( "Ouch! My hands!" );
  },
  // I walk this person.
  walk: function(){
    return( "Walk this way!" );
  }
};
// -------------------------------------------------- //
// -------------------------------------------------- //
// I am the Monkey class.
function Monkey( isFriendly ){
  this.isFriendly = isFriendly;
}
// Define the class methods.
Monkey.prototype = {
  // I swing this person in the trees.
  swing: function(){
    return( "Weeeeee! I feel so free!" );
  },
  // I walk this monkey.
  walk: function(){
    return( "Ouch! My hands!" );
  }
};
// -------------------------------------------------- //
// -------------------------------------------------- //
// I am the Ben class.
function Ben(){
  // Call the super constructors of the base classes.
  Person.call( this, "Ben" );
  Monkey.call( this, true );
}
// Define the class methods.
Ben.prototype = {
  // I give people a high-five!
  highFive: function( person ){
    return( "Hey " + person.name + ", high five!" );
  },
  // I walk this Ben. While I inherit mostly from Monkey,
  // I can actually walk like a Person; as such, we need
  // to explicitly call the more appropriate super method.
  walk: function(){
    return(
      Person.prototype.walk.call( this )
    );
  }
};
// The Ben class exnteds both the Person and Monkey class
// (or so I'm told by my friends). Here, we are going to use
// jQuery's .extend() method to augment the existing Ben
// prototype. Notice that Ben comes LAST! The order of
// inheritance matters here as the class methods will
// overwrite each other.
Ben.prototype = $.extend(
  {},
  Person.prototype,
  Monkey.prototype,
  Ben.prototype
);
// -------------------------------------------------- //
// -------------------------------------------------- //
// -------------------------------------------------- //
// -------------------------------------------------- //
// Create a new Ben object.
var ben = new Ben();
// Try to walk and swing.
console.log( "Walking:", ben.walk() );
console.log( "Swinging:", ben.swing() );
// Try to give a high-five to someone.
console.log(
  "High-five:",
  ben.highFive( new Person( "Jill" ) )
);
