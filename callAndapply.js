/**
 * Created by priya on 22/3/16.
 */

//example of call (Parameters passed as values)
var obj1={
  value11:"value1 in object1",
  value12:"value2 in object1"
}

var obj2={
  value11:"value1 in object2",
  value12:"value21 in object2"
}

function print(value3){
  console.log("\n\n",value3,"\n", this.value11,"\n", this.value12)
}

print.call(obj1,"In object1");
print.call(obj2,"In object2")


//example of apply (parameters passed as an array)

var objApply={
  value11:"value1 in object1",
  value12:"value2 in object1"
}

var objApply1={
  value11:"value1 in object2",
  value12:"value2 in object2"
}

function printApply(value3){
  console.log("\n\n",value3,"\n", this.value11,"\n", this.value12)
}

printApply.apply(objApply,['In object1']);
printApply.apply(objApply1,["In object2"])
