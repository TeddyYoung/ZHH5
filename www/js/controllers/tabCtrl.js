angular.module('oil.tabCtrl', ['oil.UtilService', 'oil.services', 'oil.UserService', 'oil.StorageService'])
  .controller('tabCtrl',
  function($scope, $log, $state, servicesRequest, Storage, Util) {
    $scope.getHome = function(){
      $state.go('tab.home');
    }
    //$scope.clickDisable = function() {
    //  Util.ionicPopupAlert("功能建设中");
    //}

  });
