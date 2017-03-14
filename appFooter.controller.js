(function () {
    var app = angular.module("VATestApp");
    
    app.controller("FooterCtrl", FooterCtrl);

    function FooterCtrl(AppConfigServiceSvc) {
        this.declaration = "Author: " + AppConfigServiceSvc.author + " Last Update On:" + AppConfigServiceSvc.lastUpdateDate;
    }
    
})();