/**
 * Created by priya on 28/3/16.
 */
angular.module('app3',[])
.controller("controller3", ['$scope', function($scope){
    $scope.person1={
      name:"Priya"
    };
    $scope.person2={
      name:"Next name"
    }
  }])
.directive('myCustomer', function(){
    return{
     restrict:'A',
      scope:{
        customerInfo:'=info'
      },
      templateUrl:'Person-info.html'

    }
  })
