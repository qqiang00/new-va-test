(function () {
    var app = angular.module("VATestApp");

    app.controller("PageNavCtrl", PageNavCtrl);

    function PageNavCtrl() {

        var self = this;
        this.panelName = "Start";
        this.textedDis = "3M";//getTextedDis(this.disSlider.value);

        this.stepPages = {
            home: { index: 0, id: "home", title: "Home", status: 'active' },
            vaTest: { index: 1, id: "vaTest", title: "VA Test", status: undefined },
            correction: { index: 2, id: "correction", title: "Correction", status: undefined },
            qa: { index: 3, id: "qa", title: 'Q&A', status: undefined },
            aboutAuthor: { index: 4, id: "aboutAuthor", title: "About Author", status: undefined }
            //    { "id": "Result", "title": "视力检查-结果" }
        };

        this.currentPageId = "home";

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