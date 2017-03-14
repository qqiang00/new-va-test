(function () {

    var app = angular.module("VATestApp");
    // 服务可以在controller间共享数据和行为
    app.value("AppNameSvc", "Visual Acuity Test Application");

})();
