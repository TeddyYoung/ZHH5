angular.module("oil.services", ["oil.UserService", "oil.UtilService"]).factory("servicesRequest",
  function(Util, $http, $log, $ionicLoading) {
    return {
      AliUserService: function(token) {
        var reqData = {};
        var result = $http({
          url: Util.hostAddress() + "AliUser",
          method: "get",
          data: reqData,
          headers: {
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
            authorization: token
          },
          timeout: Util.timeout()
        }).success(function(data) {}).error(function(data) {
          Util.ionicPopupAlert(Util.timeoutMessage());
        });
        return result;
      },
      AddMemberService: function(phone, token) {
        var reqData = {
          phone: phone,

        };
        var result = $http({
          url: Util.hostAddress() + "MemberService",
          method: "POST",
          data: Util.transform(reqData),
          headers: {
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
            authorization: token
          },
          timeout: Util.timeout()
        }).success(function(data) {}).error(function(data) {
          Util.ionicPopupAlert(Util.timeoutMessage());
        });
        return result;
      },
      checkCardsService: function(token) {
        var reqData = {};
        var result = $http({
          url: Util.hostAddress() + "checkCardsService",
          method: "GET",
          data: Util.transform(reqData),
          headers: {
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
            authorization: token
          },
          timeout: Util.timeout()
        }).success(function(data) {}).error(function(data) {
          Util.ionicPopupAlert(Util.timeoutMessage());
        });
        return result;
      },
      bindCardsService: function(cardno, cardpwd, token) {
        var reqData = {
          card_no: cardno,
          card_pwd: cardpwd
        };
        var result = $http({
          url: Util.hostAddress() + "bindCardService",
          method: "POST",
          data: Util.transform(reqData),
          headers: {
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
            authorization: token
          },
          timeout: Util.timeout()
        }).success(function(data) {}).error(function(data) {
          Util.ionicPopupAlert(Util.timeoutMessage());
        });
        return result;
      },
      memberService: function(token) {
        var reqData = {};
        var result = $http({
          url: Util.hostAddress() + "MemberService",
          method: "GET",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
            authorization: token
          }
        }).success(function(data, status, config, statusText) {}).error(function(data, status) {});
        return result;
      },
      listTransService: function(begin_date, nid, token) {
        var reqData = {
          begin_date: begin_date,
          nid: nid
        };
        var result = $http({
          url: Util.hostAddress() + "listTransService?begin_date=" + "begin_date" + "&nid=" + nid,
          method: "GET",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
            authorization: token
          },
          timeout: Util.timeout()
        }).success(function(data) {
          $log.log(data);
        }).error(function(data) {
          Util.ionicPopupAlert(Util.timeoutMessage());
        });
        return result;
      },
      InoviceSaveService: function(invoiceAccount, invoiceName, postAddr, token) {
        var reqData = {
          invoice_account: invoiceAccount,
          invoice_name: invoiceName,
          post_addr: postAddr
        };
        var result = $http({
          url: Util.hostAddress() + "InoviceService",
          method: "POST",
          data: Util.transform(reqData),
          headers: {
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
            authorization: token
          },
          timeout: Util.timeout()
        }).success(function(data) {}).error(function(data) {});
        return result;
      },
      InoviceService: function(token) {
        var reqData = {};
        var result = $http({
          url: Util.hostAddress() + "InoviceService",
          method: "GET",
          data: reqData,
          headers: {
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
            authorization: token
          },
          timeout: Util.timeout()
        }).success(function(data) {}).error(function(data) {});
        return result;
      },
      cardChange: function(cardno, cardpwd, token) {
        var reqData = {
          card_no: cardno,
          card_pwd: cardpwd
        };
        var result = $http({
          url: Util.hostAddress() + "rebindCardService",
          method: "POST",
          data: Util.transform(reqData),
          headers: {
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
            authorization: token
          },
          timeout: Util.timeout()
        }).success(function(data) {}).error(function(data) {
          Util.ionicPopupAlert(Util.timeoutMessage());
        });
        return result;
      },
      recheckCardsService: function(token) {
        var reqData = {};
        var result = $http({
          url: Util.hostAddress() + "recheckCardsService",
          method: "GET",
          data: Util.transform(reqData),
          headers: {
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
            authorization: token
          },
          timeout: Util.timeout()
        }).success(function(data) {}).error(function(data) {
          Util.ionicPopupAlert(Util.timeoutMessage());
        });
        return result;
      },
      bindOldCard: function(cardid, phone, cardpwd, token) {
        var reqData = {
          phone: phone,
          cardid: cardid,
          cardpwd: cardpwd
        };
        var result = $http({
          url: Util.hostAddress() + "bindOldCard",
          method: "POST",
          data: Util.transform(reqData),
          headers: {
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
            authorization: token
          },
          timeout: Util.timeout()
        }).success(function(data) {}).error(function(data) {});
        return result;
      }
    };
  });
