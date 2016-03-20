
/**
 * Created by priya on 20/3/16.
 */

var obj={
  name:"Priya",
  lastName:"Choudhary"

}

obj.age=24;
obj.print=function(){return console.log(this.name, this.lastName, "age:",this.age);}

obj.print();
