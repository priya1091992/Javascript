/**
 * Created by priya on 22/3/16.
 */

function one(){
  this.vlaue1="value1"
}
function two(){
}
two.prototype.value2="value2";

function three(){

}
three.prototype.value3="value3"

one.prototype=two.prototype;
var obj=new one();
console.log(obj.vlaue1, obj.value2, obj.value3); //value1, value2, undefined

one.prototype=three.prototype;  //overwrite the prototype of two with three in one.prototype.
var obj1=new one();
console.log(obj1.vlaue1, obj1.value2, obj1.value3); //value1, undefined, value3
