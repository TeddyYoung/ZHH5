angular.module('oil.rechargeCtrl',['oil.UtilService','oil.services','oil.UserService']).controller('rechargeCtrl',function($scope,$log,$ionicHistory,$state){$scope.getBack=function(){$ionicHistory.goBack();}
  $scope.getAgreement=function(){$state.go('tab.meetAgreement');}
  $scope.getPointQuery=function(){$ionicHistory.goBack();}})