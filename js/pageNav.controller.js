(function () {
    var app = angular.module("VATestApp");

    app.controller("PageNavCtrl", PageNavCtrl);

    function PageNavCtrl() {

        var self = this;
        this.panelName = "Start";
        this.textedDis = "3M";//getTextedDis(this.disSlider.value);

        this.homePage = { index: 0, id: "home", title:{"cn":"首页","en":"Home"}, status: 'active' };
        this.stepPages = {
            // home:  { index: 0, id: "home", title: "Home", status: 'active' },
            correction: { index: 1, id: "correction", title: {"cn":"校准","en":"Correction"}, status: undefined },
            vaTest: { index: 2, id: "vaTest", title: {"cn":"视力检测","en":"VA Test"}, status: undefined },
            qa: { index: 3, id: "qa", title: {"cn":"常见问答","en":"Q&A"}, status: undefined } //,
            // aboutAuthor: { index: 4, id: "aboutAuthor", title: "About Author", status: undefined }
            //    { "id": "Result", "title": "视力检查-结果" }
        };
        this.aboutAuthorPage = { index: 4, id: "aboutAuthor", title: {"cn":"关于作者","en":"About Author"}, status: undefined }


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