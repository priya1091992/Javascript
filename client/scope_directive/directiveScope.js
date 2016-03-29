/**
 * Created by priya on 29/3/16.
 */
angular.module('app',[])
.controller('controller1',['$scope', function($scope){
    $scope.value1="VALUE1";
  }])
  .controller('controller2',['$scope', function($scope){
    $scope.value2="VALUE2";
  }]).controller('controller3',['$scope', function($scope){
    $scope.value3="VALUE3";
  }])


.controller('controller4',['$scope',function($scope){
    $scope.name="ALPHA",
      $scope.color="RED",
      $scope.changeValue=function(){
        $scope.color="green"
      }

  }])

  .directive('directiveExample',function(){
    return{
      scope:{
        name:'@',
        color:'=',
        change:'&'
      },
      template:'<div><input type="text" ng-model="name"></div>'+
        '<div><input type="text" ng-model="color"></div>'+
         '<div><input type="button" ng-click="change()"></div>'

    }
  })


.directive('directiveTrue', function(){
return{
  scope:true,
  template:'<div>your value is for true scope :{{value1}}</div>'+
    '<div><input type="text" ng-model="value1"></div>'
}
  })
  .directive('directiveFalse', function(){
return{
  scope:false,
  template:'<div>your value is for false scope:{{value2}}</div>'+
    '<div><input type="text" ng-model="value2"></div>'
}
  })
  .directive('directiveIsolated', function(){
return{
  scope:{},
  template:'<div>your value is for false scope:{{value2}}</div>'+
  '<div><input type="text" ng-model="value2"></div>'
}
  })
.directive('dT', function(){
    return {
      transclude : true,
      restrict:'E',
      template:'<div class="abc"> this always appears <div ng-transclude></div></div>'
    }
  })
