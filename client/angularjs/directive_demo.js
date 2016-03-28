/**
 * Created by priya on 28/3/16.
 */
angular.module("app1",[])
.controller("controller1",['$scope', function($scope){
  $scope.person={
    name:"ALPHA",
    lastName:"BETA"
  }
  }])
.directive("firstDirective", function(){
    return{
      templateUrl:'Reference.html'
    }
  })
.directive("secondDirective", function(){
    return{
      template:'Name {{person.name}} and LastName {{person.lastName}}',
    }
  })
.directive("thirdDirective", function(){
    return{
      templateUrl:function(elem, attr){
          return 'Person-'+attr.type+'.html'
      }
    }
  })

