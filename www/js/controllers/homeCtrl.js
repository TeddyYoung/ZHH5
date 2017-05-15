angular.module('oil.homeCtrl', ['oil.UtilService', 'oil.services', 'oil.UserService', 'oil.StorageService'])
  .controller('homeCtrl',
  function($scope, $log, $state, servicesRequest, Storage, Util, $ionicLoading, $location, User, $window,$rootScope) {
    $scope.getBarCode = function(cardno){
      $state.go('tab.barCode',{cardno:cardno});
    }
    $scope.getInvoiceManagement = function() {
      $state.go('tab.invoiceManagement');
    };
    $scope.getMCard = function() {
      $state.go('tab.getMCard');
    };
    $scope.getCardVolume = function() {
      $state.go('tab.cardVolume');
    };
    $scope.getStationName = function() {
      $state.go('tab.stationName');
    };
    $scope.getCardChange = function() {
      $state.go('tab.cardChange');
    };
    $scope.getError = function() {
      $state.go('tab.error');
    };
    $scope.goPay = function() {
      $window.location.href = "alipays://platformapi/startapp?appId=20000056";
    };
    $scope.navigation = function() {
      $window.location.href = "alipays://platformapi/startapp?appId=20000050&" + "title=%e4%b8%ad%e5%8c%96%e5%8a%a0%e6%b2%b9%e7%ab%99&keywords=%e4%b8%ad%e5%8c%96%e7%9f%b3%e6%b2%b9&" + "publicId=#2016021901151402#&sourceId=publicPlatform";
    };

    $scope.getHelp = function() {
      $state.go('tab.help');
    };
    $scope.$on('$ionicView.beforeEnter',function(){
      var token = $location.search().token;
      if (token == null || token == '') {
        token = User.getToken();
      }
      Storage.set("token", token);
      getBalance(token);
    })

    var getBalance = function(token) {
      servicesRequest.memberService(token).success(function(data) {
        var statusCode = data.code;
        var message = data.message;
        if (statusCode == 100) {
          var content = JSON.parse(data.content);
          $scope.balance = content;
          $('#bcTarget').barcode($scope.balance.cardno, 'code128', {
            barWidth: '5',
            barHeight: '140',
            showHRI: false,
            bgColor: '#F9F9F9'

          });
          $log.log("balance.cardno>>>>"+balance.cardno);
        } else if (statusCode == 101) {} else {
          Util.ionicPopupAlert(message);
        }
      }).error(function(error) {
        Util.ionicPopupAlert("请求失败！");
      }).finally(function() {
        $ionicLoading.hide();
      });
    }
  });
