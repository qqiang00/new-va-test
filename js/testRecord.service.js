(function () {
    var app = angular.module("VATestApp");

    function TestRecord(ConstantSvc) {
       
        this.eye = ConstantSvc.eyes.unknown;
        this.testType = ConstantSvc.testType.unknown;
        this.distance = undefined;
        this.testDate = new Date().toDateString();
        this.curVAGrade = ConstantSvc.vaGrades[10]; //初始化或当前正在检查视力
        this.finalVAGrade = undefined;   //最终视力
        this.receiptor = {
            name: undefined,
            age: undefined,
            sex: undefined
        };
        
    }
    app.service("TestRecordSvc", TestRecord);
})();