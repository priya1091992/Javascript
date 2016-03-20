/**
 * Created by priya on 20/3/16.
 */

function PrintStuff (myDocuments) {
  this.documents = myDocuments;
}
var newObj = new PrintStuff ("I am a new Object and I can print.");
//newObj.print (); //error as print is not defined.....

PrintStuff.prototype.print = function () {
  console.log(this.documents);}

newObj.print (); // output:: I am a new object and i can print
