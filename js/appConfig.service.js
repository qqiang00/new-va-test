(function () {
    var app = angular.module("VATestApp");
    // 这个方法被factory服务作为参数调用
    // 这个方法本身调用了一个value服务：AppNameSvc
    /* function prepareAppConfig(AppNameSvc) {
        var obj = {};
        obj.name = AppNameSvc;
        obj.author = "Qiang";
        obj.version = 1;
        obj.builtDate = new Date().toDateString();
        return obj;
    }
    */
    // 这个方法被factory服务作为参数调用
    // 这个方法本身调用了一个value服务：AppNameSvc
    // 这个方法是以构造方法的形式写的
    function AppConfig(AppNameSvc) {

        this.appName = { 
            "cn": "视力检查", 
            "en": "Visual Acuity Test" 
        };
        this.appSmallName = { 
            "cn": "单页程序 —— 规范、准确、高效", 
            "en": "SPA - Professional Precise Efficient" 
        };
        this.name = AppNameSvc;
        this.author = { "cn": "叶强", "en": "Qiang Ye" };
        this.version = 1;
        this.lastUpdateDate = "17 Mar 2017";
        this.copyright = "Copyright 2010 - 2020 All rights reserved."
    }
    // factory 服务提供两个参数，第二个参数是一个方法对象，该方法的返回值提供给第一个参数
    // app.factory("AppDataFactorySvc", prepareAppConfig) // prepareAppConfig();

    // Angular 1 推荐使用Service服务，而不是Factory服务
    // service 服务会将第二个参数以构造函数的形式执行
    app.service("AppConfigServiceSvc", AppConfig);    // new AppConfig();
    // 在某些情况下，则考虑使用Factory服务：
    // 1. 需要基本类型或者函数作为返回值而不是object时，以及更多的控制权时
})();