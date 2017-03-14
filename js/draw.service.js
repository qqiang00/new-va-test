(function () {
    var app = angular.module("VATestApp");

    function DrawService(ConstantSvc, TestRecordSvc) {

        var self = this;

        function EChar(orient, linewidth) {
            this.orient = orient;
            this.linewidth = linewidth;
        }

        this.eChar = new EChar(ConstantSvc.orientations.up, 20); // up 不能更改为其他值，涉及到E的旋转
        this.totalRotated = 0;
        this.oldOrient = this.eChar.orient;
        this.drawAreaWidth = 550;
        this.drawAreaHeight = 550;
        this.corRate = 1.0;
        this.myCanvas = document.getElementById("eCharCanvas");
        this.cxt = this.myCanvas.getContext("2d");
        

        // 准备Canvas:背景、根据Canvas大小设置绘制中心
        this.prepareForDraw = function() {
            self.cxt.fillStyle = self.myCanvas.backgroundColor;
            self.darwAreaWidth = self.myCanvas.width;
            self.darwAreaHeight = self.myCanvas.height;
            self.cxt.translate(self.drawAreaWidth/2, self.drawAreaHeight/2);
        };

        this.prepareForDraw();      // 仅执行一次

        this.clearDrawArea = function() {
            if(self.cxt != null) {
                self.cxt.clearRect(-self.drawAreaWidth / 2, -self.drawAreaHeight/2, self.drawAreaWidth, self.drawAreaHeight);
            }
        }

        this.initAreaForDrawing = this.clearDrawArea;

        //直接利用线宽来绘制E字符
        this.drawEChar2 = function () {
            self.cxt.strokeStyle = "#000000";//黑色
            self.cxt.lineWidth = self.eChar.linewidth; // cxt.lineWidth should be CAPITALIZED 'W'
            //alert("new o:" + eChar.orient + "\n" + "old o:" + oldOrient);
            self.cxt.rotate(self.getRotationValue());
            self.cxt.beginPath();
            //cxt.lineJoin = "round";
            var unit = self.eChar.linewidth / 2;
            //if (unit < 1) { unit = 1; }

            self.cxt.moveTo(-4 * unit, -5 * unit);
            self.cxt.lineTo(-4 * unit, 4 * unit);
            self.cxt.lineTo(4 * unit, 4 * unit);
            self.cxt.lineTo(4 * unit, -5 * unit);
            self.cxt.moveTo(0, -5 * unit);
            self.cxt.lineTo(0, 4 * unit);
            self.cxt.stroke();
        };

        //计算在先前校准条件下的形式描述的E字符的笔画宽度，距离单位是米，字符笔画宽度是mm
        this.getPXELineWidth = function (dis, va) {
            //先找出在确定的距离和视力表下对应的以mm为单位的字符宽度
            //公式:linewidth*va*5.0=1.5*1.0*distance
            var mmlinewidth = 1.5 * 1.0 * dis / (5.0 * va);
            //根据mm单位的宽度计算所需要的像素值
            //85.6mm长的身份证对应的矩形宽度为428*corHor.
            var pxlinewidth = 428.0 * self.corRate * mmlinewidth / 85.6;
            return Math.round(pxlinewidth);
        }


        this.createNewEChar = function (corRate) {
            self.corRate = corRate;
            // console.log("Dis:"+TestRecordSvc.distance);
            // console.log("grade:"+TestRecordSvc.curVAGrade.value);
            self.eChar.linewidth = self.getPXELineWidth(TestRecordSvc.distance, TestRecordSvc.curVAGrade.value);
            self.oldOrient = self.eChar.orient;
            self.eChar.orient = ConstantSvc.getNextDifferentOrientation(self.oldOrient);
        }
        
       this.drawEChar = function (){
           console.log("orien:"+self.eChar.orient);
           self.clearDrawArea();
           self.drawEChar2();
       }

        //获取不同的E字符方向对应的旋转角度（以弧度计算）
        this.getRotationValue = function () {
            var dif = self.eChar.orient - self.oldOrient;
            self.totalRotated = (self.totalRotated + dif) % 4;
            return dif * Math.PI / 2;
        }

    }
    app.service("DrawSvc", DrawService);
})();