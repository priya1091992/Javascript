/**
 * Created by priya on 21/3/16.
 */
function Plant(){
}
Plant.prototype = {
  country:"Mexico",
  isOrganic:true,

  ShowNameandColor:function(){
    console.log("I am "+ this.name+ " and my color is:"+ this.color);
  },
  amIOrganic: function() {
    if (this.isOrganic) {
      console.log("I am organic");
    }
  }
};
function Fruit(fruitName, fruitColor){
  this.name = fruitName;
  this.color = fruitColor;

  this.amIOrganic = function (){  //if this function is not declared in Fruit then the Plant amIOrganic function will be called
       if(this.isOrganic){
    console.log("I am not organic");
       console.log(this.isOrganic);  //true
       }
  };
}

  Fruit.prototype = new Plant();

var aBanana = new Fruit("banana","yellow");
  console.log(aBanana.name);
  console.log(aBanana.country);
  aBanana.amIOrganic();       // call the Fruit amIOrganic function
 aBanana.ShowNameandColor();




//console.log(console.log("hello"))  :Output -> undefined
                                             // hello
                                            //   undefined
