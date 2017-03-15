(function (){
    var app = angular.module("VATestApp");
    app.controller("MultiLangCtrl", MultiLangCtrl);
    function MultiLangCtrl(AppConfigServiceSvc) {
        
        var self = this;

        this.lang = 'en';

        this.ML = function(obj) {
            if (self.lang == "cn" || self.lang == "en"){
                return obj[self.lang];
            }
            return obj;
        }
        
        this.switchLanguage = function(lang) {
            self.lang = lang;
            // console.log("Cur lan:" + self.lang);
        }


        this.ctHomePage = {
            title:{
                "cn":"朋友，您好！",
                "en":"Hello, Friend!",
            },
            p1:{
                "cn":"在家里，就可以进行规范、精确和高效的自助式视力检查",
                "en":"Help yourself to perform a professional, precise and efficient visual acuity test at home.",
            },
            p2:{
                "cn":"你只需要一个可以上网的浏览器，外加一个钱包里常见的卡片一张",
                "en":"All you need is a web browser with internet access and a pocket card.",
            },
            btn1:{
                "cn":"了解更多",
                "en":"Learn More",
            },
            btn2:{
                "cn":"试一试",
                "en":"Try it!",
            }
        };

        this.ctCorrectionPage = {
            inform:{
                "cn":"取出一张尺寸为856mm×540mm的卡片.滑动下方的滑块来缩放矩形区域，同时调整卡片位置使得它尽量与卡片重合. 完全重合即表示校准已完成.此后的操作中请不要调整屏幕分辨率以及缩放浏览器.",
                "en":"Prepare a card sized：856mm×540mm, put it onto the screen. Zoom in/out the rectangle until both overlap completely.Do NOT adjust the resolution and zoom in/out the browser after correction.",
            }
        },

        this.ctVATestPage = {
            inform:{
                "cn":"您可以选择检查某一单眼或双眼同时检查，也可以戴或不戴眼镜。检查远视力建议选择3-5m。选择一个和您差不多级别的视力以节省检查时间。 设置好后就可以点击开始了。",
                "en":"You can choose to test either eye or both with or without glasses. All are meaningful. Distance of 3-5 meters are recommended for FAR visual acuity test. Select a VA grade close to yours may save time. Click Start button when ready.",
            },
        }

    }




})();