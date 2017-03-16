(function () {
    var app = angular.module("VATestApp");

    app.controller("PageNavCtrl", PageNavCtrl);

    function PageNavCtrl(mls) {

        var self = this;
        this.panelName = "Start";
        this.textedDis = "3M";//getTextedDis(this.disSlider.value);

        this.homePage = { index: 0, id: "home", title: mls.home, status: 'active' };
        this.stepPages = {
            // home:  { index: 0, id: "home", title: "Home", status: 'active' },
            calibration: { index: 1, id: "calibration", title: mls.calibration, status: undefined },
            vaTest: { index: 2, id: "vaTest", title: mls.vaTest, status: undefined },
            qa: { index: 3, id: "qa", title: mls.qa, status: undefined } //,
            // aboutAuthor: { index: 4, id: "aboutAuthor", title: "About Author", status: undefined }
            //    { "id": "Result", "title": "视力检查-结果" }
        };
        this.aboutAuthorPage = { index: 4, id: "aboutAuthor", title: mls.aboutAuthor, status: undefined }


        this.currentPageId = this.homePage.id;

        this.setCurrentPage = function (id) {
            self.currentPageId = id;
            //console.log("CurrentPageID：" + self.currentPageId);
        };

        this.setPageStatus = function (condition) {
            // console.log("in page status function,expression:"+condition);
            if (condition) { return "active"; }
            else { return undefined; }
        }

    }

})();