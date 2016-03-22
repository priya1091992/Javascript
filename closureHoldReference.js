/**
 * Created by priya on 22/3/16.
 */

function outer(value1){
  var value2="Original value"

  function inner(){
    console.log(value2);
  }

  inner();   // output: Original value

  value2=value1;

  inner();    // output: Changed value
return inner;
}

var func=outer("Changed value");
func();   // output: Changed value
