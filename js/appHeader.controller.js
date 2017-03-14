(function () {

    var app = angular.module("VATestApp");

    app.controller("HeaderCtrl", HeaderCtrl);

    function HeaderCtrl(AppConfigServiceSvc) {
        this.appTitle = AppConfigServiceSvc.appName;
    }
})();