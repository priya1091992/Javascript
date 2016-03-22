/**
 * Created by priya on 21/3/16.
 */
function Product(name, price) {
  this.name = name;
  this.price = price;
  this.productPrice=20;
  console.log(">>>",this) // refers to food or toy
  this.func=function(){
    console.log("Hello");
  }
}

function Food(name, price) {
  console.log(this); //this refers to the Food
  Product.call(this, name, price); // this here also refers to food
  console.log(name)
  this.category = 'food';

}

function Toy(name, price) {
  Product.call(this, name, price);
  this.category = 'toy';
}

var cheese = new Food('feta', 5);
var fun = new Toy('robot', 40);

console.log("In cheese object:",cheese.name , cheese.price, cheese.category, cheese.productPrice);
console.log("In fun object:",fun.name , fun.price, fun.category, fun.productPrice);
cheese.func();
