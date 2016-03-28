/**
 * Created by priya on 28/3/16.
 */
angular.module('app2',[])
.controller('controller1',['$scope',function($scope){
   $scope.person1={
      name:"ALPHA"
    }
  }])
.controller('controller2',['$scope', function($scope){
    $scope.person1={
      name:"Beta"
    }
  }])
.directive('oneDirective', function(){
    return{
      templateUrl:'Person-info.html'
    }
  })
