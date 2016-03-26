/**
 * Created by priya on 26/3/16.
 */

//Problem with closures.......
function f1(){
  var a1=[];
  for(k=0;k<3;k++){
   a1[k]=function(){ return k;}
  }
return a1;
}

var m=f1();
console.log(m[0]());  //3
console.log(m[1]());  //3
console.log(m[2]());  //3


//for loop closure solution.....................
function f(){
  var a=[];
  function makeclosure(i){
    return function(){
      return i;
    }
  }
  for(i=0;i<3;i++){
    a[i]=makeclosure(i)
  }
  return a;}

var my=f();
console.log(my[0]());  //0
console.log(my[1]());  //1
console.log(my[2]());  //2



//second solution......................
function func(){
  var arr=[];
  for(j=0;j<3;j++){
    arr[j]= (function(j){
      return function(){
        return j;}
    })(j);
  }
  return arr;
}

var b=func();
console.log(b[0]());  //0
console.log(b[1]());  //1
console.log(b[2]());  //2



