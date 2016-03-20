/**
 * Created by priya on 17/3/16.
 */


var obj={
  name:'priya',
  arr:['one','two','three'],
  funct:function(){
    this.arr.forEach(function(numb){
      console.log(numb);
    })

  }
}

obj.funct();
