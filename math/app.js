var app = angular.module("MathApp",[]);

app.controller("CalculateCtrl", function(){

        var self = this;
        this.getRandom = function (min, max) {   // 获取随机数[min,max)
            return min + (Math.round(Math.random() * 1000)) % (max - min);
        };
        this.ops = {
          add: {text:"+",value:"+"},
          mns: {text:"-",value:"-"},
          mul: {text:"×",value:"*"},
          div: {text:"/",value:"/"},
        };
        this.comprts = {
            equal:{text:"=",value:"="},
            less_than:{text:"<",value:"<"},
            more_than:{text:">",value:">"},
            not_less_than:{text:">=",value:">="},
            not_more_than:{text:"<=",value:"<="},
            not_equal:{text:"<>",value:"!="}
        };

        this.maxNumber = 11;
        this.minNumber = 0;
        this.curNum1 = undefined;
        this.curNum2 =  undefined;
        // this.selectedOps = [this.ops.add, this.ops.mns, this.ops.mul, this.ops.div];
        this.selectedOps = [this.ops.add, this.ops.mns];
        this.curOp = undefined;     // this.selectedOps[0];
        this.curCpt = this.comprts.equal;
        this.userResponse = undefined;
        this.curAnswer = undefined;
        this.isCurResponseRight = undefined;

        this.produceExpression = function() {
            self.userResponse = undefined;
            self.isCurResponseRight = undefined;
            var op_len = self.selectedOps.length;
            self.curOp = self.selectedOps[self.getRandom(0, op_len)];
            do{
                self.curNum2 = self.getRandom(self.minNumber, self.maxNumber);
            }while(self.curOp === self.ops.div && self.curNum2 == 0);
            if (self.curOp === self.ops.mns){
                self.curNum1 = self.getRandom(self.curNum2, self.maxNumber);
            }
            else if (self.curOp === self.ops.div) {
                self.curNum1 = self.curNum2 * self.getRandom(self.minNumber, self.maxNumber);
            }
            else{
                self.curNum1 = self.getRandom(self.minNumber, self.maxNumber);
            }
            var expression = self.curNum1 + self.curOp.value + self.curNum2;
            self.curAnswer = eval(expression);
        }

        this.checkResponse = function() {
            console.log("Cur Answer:" + self.curAnswer);
            console.log("Users:" + self.userResponse);
            self.isCurResponseRight = (self.curAnswer == self.userResponse);
        }

        this.produceExpression();




});