(function (){
    var app = angular.module("VATestApp");
    app.controller("MultiLangCtrl", MultiLangCtrl);
    
    function MultiLangCtrl(AppConfigServiceSvc, mls) {
        var self = this;  
        this.appConfig = AppConfigServiceSvc;
        this.data = mls;

        this.$ = mls.$;
        this.switchLanguage = mls.switchLanguage;

    }
        
})();