angular.module("oil.barCodeCtrl", []).controller("barCodeCtrl",
  function($scope, $log, $state, $rootScope, $stateParams, $ionicHistory) {
    $scope.cardno = $stateParams.cardno;
    $scope.$on("$ionicView.beforeEnter",
      function() {
        $rootScope.hideTabs = true;
        $("#bcTarget_b").barcode($scope.cardno, "code128", {
          barWidth: "3",
          barHeight: "120",
          showHRI: false,
          bgColor: "#fff"
        });
      });
    $scope.$on("$ionicView.beforeLeave",
      function() {
        $rootScope.hideTabs = false;
      });
    $scope.clickGoBack = function() {
      $ionicHistory.goBack();
      $rootScope.hideTabs = false;
    };
  });
