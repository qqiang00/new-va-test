(function () {
    var app = angular.module("VATestApp");

    app.service("ConstantSvc", function (mls) {
        var self = this;
        this.eyes = {                           // 眼别
            ou: mls.ou,         // 双眼
            os: mls.os,          // 左眼
            od: mls.od,           // 右眼
            unknown: mls.unknown,       // 未知
        };
        this.testType = {                       // 检查类型
            naked: mls.naked,       // 裸眼
            withGlasses: mls.withGlasses,  // 戴镜
            unknown: mls.unknown,
        };
        this.disType = {                        // 距离类型
            near: mls.nearVA,       // 近视力
            far:  mls.farVA,        // 远视力
            //unknown: -1
        }
        this.vaGrades = [                       // 视力等级
            { "index": 0, "value": "<0.1", "logvalue": "<4.0", "text":mls.lessThan0_1 },
            { "index": 1, "value": "0.1", "logvalue": "4.0", "text": "0.1 (4.0)" },
            { "index": 2, "value": "0.12", "logvalue": "4.1", "text": "0.12 (4.1)" },
            { "index": 3, "value": "0.15", "logvalue": "4.2", "text": "0.15 (4.2)" },
            { "index": 4, "value": "0.2", "logvalue": "4.3", "text": "0.2 (4.3)" },
            { "index": 5, "value": "0.25", "logvalue": "4.4", "text": "0.25 (4.4)" },
            { "index": 6, "value": "0.3", "logvalue": "4.5", "text": "0.3 (4.5)" },
            { "index": 7, "value": "0.4", "logvalue": "4.6", "text": "0.4 (4.6)" },
            { "index": 8, "value": "0.5", "logvalue": "4.7", "text": "0.5 (4.7)" },
            { "index": 9, "value": "0.6", "logvalue": "4.8", "text": "0.6 (4.8)" },
            { "index": 10, "value": "0.8", "logvalue": "4.9", "text": "0.8 (4.9)" },
            { "index": 11, "value": "1.0", "logvalue": "5.0", "text":mls.orGreater1_0 },
        ];
        this.orientations = {                   // 描述E字符的朝向
            up: 0,
            right: 1,
            down: 2,
            left: 3,
            unknown: -1  // 未知
        };

        this.sexType = {
            male: 0,
            female: 1,
            //unknown: -1
        };

        this.getRandom = function (min, max) {   // 获取随机数[min,max)
            return min + (Math.round(Math.random() * 1000)) % (max - min);
        };

        this.getRandOrientation = function () {  // 获取随机方向
            var rand = self.getRandom(0, 4);
            switch (rand) {
                case 0: return self.orientations.up;
                case 1: return self.orientations.right;
                case 2: return self.orientations.down;
                case 3: return self.orientations.left;
                default: return self.orientations.unknown;
            }
        };

        this.getNextDifferentOrientation = function (oldO) {
            //获取一个和当前方向不同的随机方向值
            var newO;
            do {
                newO = self.getRandOrientation();
            } while (oldO === newO);
            return newO;
        };
    })
})();