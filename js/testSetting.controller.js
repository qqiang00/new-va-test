(function () {
    var app = angular.module("VATestApp");
    app.controller("TestSettingCtrl", TestSettingCtrl);

    function TestSettingCtrl(DrawSvc, TestRecordSvc, ConstantSvc) {

        var self = this;
        this.panelName = "Start";
        this.textedDis = "3M";//getTextedDis(this.disSlider.value);

        this.constants = ConstantSvc;
        this.testRecord = TestRecordSvc;

        //显示合适的距离，在距离<1时，显示为××厘米，当距离>1时，显示为××米
        function getTextedDis(dis) {
            if (dis == 0) { return "0"; }
            else if (dis < 100) { return dis + "CM"; }
            else { return dis / 100 + "M"; }
        }

        this.disSlider = {
            value: 300,                // 300cm;
            options: {
                ceil: 500,
                floor: 0,
                minLimit: 10,
                maxLimit: 500,
                showSelectionBar: true,
                translate: function (value) {
                    this.textedDis = getTextedDis(value);
                    return this.textedDis;
                },

                getSelectionBarColor: function (value) {
                    if (value <= 30)
                        return 'red';
                    if (value <= 200)
                        return 'orange';
                    if (value <= 500)
                        return 'green';
                    return '#2AE02A';
                }
            }
        };

        this.vaGrades = ConstantSvc.vaGrades;
        this.selectedVAGrade = this.vaGrades[10];   // default VAGrade: 0.8
        this.correctSlider = {
            value: 100,
            options: {
                ceil: 200,
                floor: 0,
                showSelectionBar: true,
                translate: function (value) {
                    return value + "%";
                },
            }
        };

        this.corImg = {             // 预设的校正图片尺寸
            oriWidth: 428,
            oriHeight: 270,
        };

        this.corRate = this.correctSlider.value / 100.00; // 屏幕校正系数



        this.editModeEye = true;
        this.editModeTestType = true;
        this.editModeDistance = true;
        this.editModeCurVAGrade = true;

        this.leaveEditMode = function () {
            self.editModeEye = false;
            self.editModeTestType = false;
            self.editModeDistance = false;
            self.editModeCurVAGrade = false;

            TestRecordSvc.distance = self.disSlider.value / 100; // 从cm到M;
            // TestRecordSvc.curVAGrade = self.selectedVAGrade
            self.corRate = self.correctSlider.value / 100.00;
        };

        this.intoEditMode = function () {
            self.editModeEye = true;
            self.editModeTestType = true;
            self.editModeDistance = true;
            self.editModeCurVAGrade = true;
        };

        this.changeEditModeEye = function () {
            self.editModeEye = !self.editModeEye;
        };
        this.changeEditModeTestType = function () {
            self.editModeTestType = !self.editModeTestType;
        };

        this.changeEditModeDistance = function () {
            self.editModeDistance = !self.editModeDistance;
        };

        this.changeEditModeCurVAGrade = function () {
            self.editModeCurVAGrade = !self.editModeCurVAGrade;
        };



        // 是否正在测试中
        this.isTesting = false;
        //当前答错次数
        this.wrongtimes = 0;
        //连续答对次数
        this.correcttimes = 0;
        //最大允许答错次数
        this.maxwrongtimes = 3;
        //最大连续答对次数
        this.maxcorrecttimes = 5;
        //当前E字符的朝向
        this.curgivencharorient = ConstantSvc.orientations.unknown;
        //用户给出的回答朝向
        this.userorient = ConstantSvc.orientations.unknown;
        //设定一个视力检查方向的变量，当该变量为0时，表示方向未确定；当＝1时，表示患者可以看清当前视力代表的字符大小，并倾向于提供更高的视力字符；当＝－1时表示患者无法看清当前视力登记代表的字符，检查方向转为提供较低视力的字符。检查方向一旦确定不为0，则不再更改。
        this.examdirection = 0;
        //用户回答是否正确，初始设定为不正确
        var isAnswerRight = false;
        //检查结束是否结束
        this.isTestFinished = false;
        //this.isTestFinished = false;
        //是否正在分析本次应答
        this.isAnalysising = false;
        // 提示信息
        this.message = null;
        this.messageType = "info";

        this.abortTest = function () {
            self.isTesting = false;
            self.message = {"cn":"点击'开始'按钮开始检查","en":"click start to begin."};
        }


        this.createNewEChar = function (corRate) {
            DrawSvc.createNewEChar(corRate);
        }
        this.showEChar = function () {
            DrawSvc.drawEChar();
        }
        this.prepareCanvas = function () {
            DrawSvc.prepareForDraw();
        }

        this.initPreExamData = function () {
            self.wrongtimes = 0;
            self.correcttimes = 0;
            self.maxwrongtimes = 3;
            self.maxcorrecttimes = 5;
            self.curgivencharorient = ConstantSvc.orientations.unknown;
            self.userorient = ConstantSvc.orientations.unknown;
            self.examdirection = 0;
            self.isAnswerRight = false;
            self.isTestFinished = false;
            self.isAnalysising = false;
            self.message = {"cn":"开始您的选择","en":"make your choice"};

            if (TestRecordSvc.curVAGrade.index == 0) { // <0.1
                TestRecordSvc.curVAGrade = ConstantSvc.vaGrades[1];
                //TestRecordSvc.curVAGrade.value = ConstantSvc.vaGrades[1].value;
            }
        }

        this.displayFeedBack = function (isanswerright) {
            if (isanswerright) {
                console.log("Correct Answer");
                self.message = {"cn":"真棒","en":"Correct Choice"};
                self.messageType = "success";
            } else {
                console.log("Wrong Answer");
                self.message = {"cn":"很遗憾，选错了","en":"Wrong Choice"};
                self.messageType = "danger";
            }
        }

        this.displayExamResult = function () {
            console.log("Test Finished");
            //self.message = {"cn":"最终视力: " + TestRecordSvc.finalVAGrade.text,
            //                "en":"Final Grade: " + TestRecordSvc.finalVAGrade.text};
            self.message = {"cn":"检查已经结束","en":"Test Completed"};
            self.messageType = "info";
        }


        this.startTest = function () {
            self.leaveEditMode();
            self.isTesting = true;
            TestRecordSvc.getCurDate(); // 获取当前时间
            self.initPreExamData(); // 初始化数据
            // self.prepareCanvas();  // 准备Canvas,根据Canvas大小设置绘制中心
            // console.log("corRate:" + self.corRate);
            self.createNewEChar(self.corRate);
            self.showEChar();

        }

        this.userClicked = function (o) {

            if (self.isAnalysising || self.isTestFinished || !self.isTesting) {
                return;
            }
            self.isAnalysising = true;
            switch (o) {
                case "CORRECT": self.userorient = DrawSvc.eChar.orient; break;
                case "WRONG": self.userorient = ConstantSvc.orientations.unknown; break;
                case "UP": self.userorient = ConstantSvc.orientations.up; break;
                case "DOWN": self.userorient = ConstantSvc.orientations.down; break;
                case "LEFT": self.userorient = ConstantSvc.orientations.left; break;
                case "RIGHT": self.userorient = ConstantSvc.orientations.right; break;
                default: self.userorient = ConstantSvc.orientations.unknown; break;
            }
            self.processAfterUserAnswer();
            self.isAnalysising = false;
        }

        //分析处理用户应答的核心程序
        this.processAfterUserAnswer = function () {
            //如果检查已经结束，则不运行后续代码，直接返回跳出本函数
            if (self.isTestFinished == true) {
                //println("检查结束")
                return;
            }
            // 根据ConstantSvc.vaGrades定义，结合检查流程，
            // 可检查的行索引范围是 1 <= index <= 11. 
            // 行0代表视力<0.1; 行12代表视力>1.0
            // index数据类型是number,不要设定为value;
            var curVAIndex = TestRecordSvc.curVAGrade.index;

            //如果用户的朝向与E字符实际朝向一致

            // console.log("self.userorient:" + self.userorient);
            // console.log("eChar.orient:" + DrawSvc.eChar.orient);
            if (self.userorient == DrawSvc.eChar.orient) {
                //表示用户答对了
                self.isAnswerRight = true;
                //正确回答的次数增加1次
                self.correcttimes++;
                //当此行视力检查连续正确回答次数达到一定数量，并且总的检查方向是朝着差的视力进行的，或者已达到最高视力
                //检查结束，当前视力为最佳视力

                if ((self.correcttimes >= self.maxcorrecttimes) &&
                    (self.examdirection == -1 || curVAIndex >= 11)) {
                    TestRecordSvc.finalVAGrade = TestRecordSvc.curVAGrade;
                    self.isTestFinished = true;
                }
                //当检查方向不确定或者是朝着更好的视力等级进行时
                else if (self.correcttimes >= self.maxcorrecttimes && self.examdirection != -1) {
                    if (self.examdirection == 0) {
                        //设定检查朝向更好的视力等级进行
                        self.examdirection = 1;
                    }
                    // 打算提高一个视力等级继续检查，并设定在该行的一些判断数据，检查并未结束

                    var tarVAIndex = curVAIndex + 1;    // 目标index
                    if (tarVAIndex >= 1 && tarVAIndex <= 11)
                    { TestRecordSvc.curVAGrade = ConstantSvc.vaGrades[tarVAIndex]; }
                    self.correcttimes = 0;
                    self.wrongtimes = 0;
                    self.isTestFinished = false;
                }
            }
            //用户指出的方向与实际方向不一致
            else {
                //回答错了
                self.isAnswerRight = false;
                self.wrongtimes++;
                //一旦回答错误，则先前在此行的正确回答次数被清零，表明正确回答次数是连续正确回答次数
                self.correcttimes = 0;
                //如果此行回答错误次数达到设定值，并且是朝着视力较好的等级方向检查或者已经到达最低检查视力，表明检查应该结束
                if (self.wrongtimes >= self.maxwrongtimes && (self.examdirection == 1 || curVAIndex <= 1)) {
                    //此时的实际视力应比当前低一级
                    TestRecordSvc.finalVAGrade = ConstantSvc.vaGrades[curVAIndex - 1];
                    self.isTestFinished = true;
                    //return;
                }
                //如果虽然错误回答此处达到设定次数，但检查的方向不确定或者是一直提供较高视力等级给用户（也就是说用户还没能有一个确定的视力级别）检查
                //则表明检查方向应设定为朝着更低等级的视力进行
                else if (self.wrongtimes >= self.maxwrongtimes && self.examdirection != 1) {
                    if (self.examdirection == 0) {
                        self.examdirection = -1;
                    }
                    //同时下调视力等级继续检查
                    if (curVAIndex > 0) {
                        curVAIndex -= 1;
                    }
                    TestRecordSvc.curVAGrade = ConstantSvc.vaGrades[curVAIndex];
                    self.isTestFinished = false;
                    self.wrongtimes = 0;
                }
            }
            //将当前用户回答情况以图片的形式在界面上反映出来
            self.displayFeedBack(self.isAnswerRight)
            //根据检查是否结束决定是否在场景内布置新的E字符
            if (self.isTestFinished == false) {
                self.createNewEChar(self.corRate);
                // UpdateExamingVA();
                // ClearDrawArea();
                // DrawEChar2();
                self.showEChar();
                //重置用户的判断为unknow，表明用户还没有判断新的E字符朝向
                self.userorient = ConstantSvc.orientations.unknown
                //更新下界面数据

            }
            //如果检查结束
            else {
                //则不让用户继续点击“看不清”按钮
                //uiBtnWrong.enabled=false
                //显示检查结束的一些信息（显示最终得到的视力）
                self.displayExamResult()
                //用户可以点击导航条右上角的按钮返回上一个视图
                //nextBarButtonItem.enabled=true
                //uiBtnCorrect.enabled=false
            }
        }


    }

})();