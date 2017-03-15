(function (){
    var app = angular.module("VATestApp");
    app.controller("MultiLangCtrl", MultiLangCtrl);
    
    function MultiLangCtrl(AppConfigServiceSvc) {
        
        this.appConfig = AppConfigServiceSvc;

        var self = this;

        this.lang = 'en';

        this.$ = function(obj) {
            if (obj === null)
                return null;
            if (obj === undefined)
                return undefined;
            if (obj.hasOwnProperty(self.lang)){
                return obj[self.lang];
            }
            else
                return obj;

        };
        
        this.switchLanguage = function(lang) {
            self.lang = lang;
            // console.log("Cur lan:" + self.lang);
        };


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
        // words on Correction Page
        this.ctCorrectionPage = {
            inform:{
                "cn":"取出一张尺寸为856mm×540mm的卡片.滑动下方的滑块来缩放矩形区域，同时调整卡片位置使得它尽量与卡片重合. 完全重合即表示校准已完成.此后的操作中请不要调整屏幕分辨率以及缩放浏览器.",
                "en":"Prepare a card sized：856mm×540mm, put it onto the screen. Zoom in/out the rectangle until both overlap completely.Do NOT adjust the resolution and zoom in/out the browser after correction.",
            }
        };
        // words on VA test Page
        this.ctTP = {
            inform:{
                "cn":"您可以选择检查某一单眼或双眼同时检查，也可以戴或不戴眼镜。检查远视力建议选择3-5m。选择一个和您差不多级别的视力以节省检查时间。 调整屏幕到最大亮度和对比度。检查时保持屏幕与眼同高，使视线平行。设置好后就可以点击'开始'按钮。",
                "en":"You can choose to test either eye or both with or without glasses. Distance of 3-5 meters are recommended for FAR visual acuity test. Select a VA grade close to yours may save time. Adjust screen brightness and contrast to highest level, keep environment bright. Keep screen and eye at the same height so that you can look forward horizontally. Click 'Start' button when ready.",
            },
            eye:{
                "cn":"眼别",
                "en":"Eye",
            },
            condition:{
                "cn":"是否戴镜",
                "en":"Condition",
            },
            vaGrade:{
                "cn":"当前视力",
                "en":"Testing VA",
            },
            distance:{
                "cn":"检查距离",
                "en":"Distance",
            },
            btnStart:{
                "cn":"开始",
                "en":"Start",
            },
            btnAbort:{
                "cn":"放弃",
                "en":"Abort",
            },
            btnReset:{
                "cn":"重置",
                "en":"Reset",
            },            
            btnUp:{
                "cn":"上",
                "en":"U",
            },
            btnRight:{
                "cn":"右",
                "en":"R",
            },
            btnDown:{
                "cn":"下",
                "en":"D",
            },
            btnLeft:{
                "cn":"左",
                "en":"L",
            },
            btnClear:{
                "cn":"清楚",
                "en":"Clear",
            },
            btnNotClear:{
                "cn":"不清楚",
                "en":"Not Clear",
            },
            btnEdit:{
                "cn":"修改",
                "en":"Edit",
            },
            btnOk:{
                "cn":"确定",
                "en":"OK",
            },
            btnShowReport:{
                "cn":"查看报告",
                "en":"See Report",
            },
        };
        
        this.ctReport = {
            title:{"cn":"视力检查报告","en":"Visual Acuity Test Report"},
            datetime:{"cn":"日期/时间","en":"Date/Time"},
            yourVAGrade:{"cn":"您的视力","en":"Your Visual Acuity"},
        };
        
        this.ctAuthor = {
            name:{"cn":"叶强","en":"YE Qiang"},
            title:{"cn":"眼科医师, 软件工程师",
                   "en":"Ophthalmologist, Software Engineer"},
            university:{"cn":"毕业于上海交通大学",
                        "en":"Graduated from Shanghai JiaoTong University"},
            degree:{"cn":"医学博士(临床医学)，工学学士(材料科学&计算机科学)",
                    "en":"Medical Doctor(Clinical Medicine), Bachelor of Engineering(Material Science & Computer Science)"
                   },
            p1:{"cn":"十余年眼科临床工作经验。热爱计算机技术，对机器学习、深度学习等人工智能技术有浓厚的兴趣。",
                "en":"Ten years clinical exeprience. Strong background and interest in Machine Learning, Deep Learning and other Artificial Intelligence techonogies.",
               },
            srcDownload:{"cn":"下载本程序源代码","en":"Download source code"},
        };
        
        this.qas = [
            {
                q:{
                    "en":"Q:What are the factors contributing to the precision of visual test results?",
                    "cn":"问题：影响视力检查结果准确程度的因素主要有哪些?"
                },
                a:{
                    "en":"A:To be translated [有非常多的因素可以影响到视力检查结果的准确程度。其中重要的有：检查距离的选择，屏幕E字符宽度的准确显示，受试者观察E字符时视线是否水平，环境亮度以及E字符的对比度等。这些因素综合决定了一次视力检查结的准确程度]",
                    "cn":"有非常多的因素可以影响到视力检查结果的准确程度。其中重要的有：检查距离的选择，屏幕E字符宽度的准确显示，受试者观察E字符时视线是否水平，环境亮度以及E字符的对比度等。这些因素综合决定了一次视力检查结的准确程度。"
                }
            },
            {
                q:{
                    "en":"Q: Compared to traditional VA test instrument, what are the benefits and shortcomings of this online test application?",
                    "cn":"问题：与传统视力设备相比，这个在线系统有什么优点和缺点?"
                },
                a:{
                    "en":"A:To be translated [该系统的优点是规范、精确、方便。在设计这个程序时完全基于视力度量的科学原理，同时充分利用了电子设备体积小的优势，检查时方便迅速。相比传统设备，我们系统会根据您的检查距离决定显示的E字符的大小。缺点是，一切过程是自助的，您可能需要一个助手。同时检查前的校准工作非常重要。]",
                    "cn":"该系统的优点是规范、精确、方便。在设计这个程序时完全基于视力度量的科学原理，同时充分利用了电子设备体积小的优势，检查时方便迅速。相比传统设备，我们系统会根据您的检查距离决定显示的E字符的大小。缺点是，一切过程是自助的，您可能需要一个助手。同时检查前的校准工作非常重要。另外当检查距离特别近（比如20cm）时，在测试较高视力等级时E字符的显示精度会达不到要求。这一临界距离因设备不同而不同，"
                }
            },
            {
                q:{
                    "en":"Q:Why is 'Correction' step so important? Can computer do the process itself?",
                    "cn":"问题：为什么校准那么重要？能让电脑自动帮我校准吗？"
                },
                a:{
                    "en":"A:To be translated [准确的校准步骤对于得到一个准确、可信的检查结果是非常关键的。系统将依据校准得到的参数来决定向你显示多大的E字符，以及这样大小的E字符在当前检查距离下代表的视力级别是多少。由于不同的设备屏幕分辨率设置不一样，浏览器的缩放也不受限制，因此很难通过程序来自动调整。正因为如此，我们要求在完成校准工作后，应避免再进行分辨率调整、缩放浏览器、横屏转竖屏等操作。]",
                    "cn":"准确的校准步骤对于得到一个准确、可信的检查结果是非常关键的。系统将依据校准得到的参数来决定向你显示多大的E字符，以及这样大小的E字符在当前检查距离下代表的视力级别是多少。由于不同的设备屏幕分辨率设置不一样，浏览器的缩放也不受限制，因此很难通过程序来自动调整。正因为如此，我们要求在完成校准工作后，应避免再进行分辨率调整、缩放浏览器、横屏转竖屏等操作。"
                }
            },
   
            {
                q:{
                    "en":"Q:Should I wear the glasses or not to perform the test?",
                    "cn":"问题：我可以戴眼镜检查吗？"
                },
                a:{
                    "en":"A:",
                    "cn":"完全可以。您甚至可以戴着眼镜检查一次，不戴眼镜再检查一次。这些结果都是有意义的。通常较高的那个视力被认为是您的视力。此外，，特别对于中老年人来说，不同距离检查的结果也有不同的意义。一般来讲，对于青少年，可以使用2.5米距离的检查来表示看远的视力；检查看近处的视力时可以选择30cm的距离。"
                }
            },    
            
            {
                q:{
                    "en":"Q:How do I report my online test result to doctors?",
                    "cn":"问题：我应该如何向医生反映我的在线视力检查结果？"
                },
                a:{
                    "en":"A:To be translated [正如我们向您提供的视力检查报告一样，您最好将‘检查日期’、‘检查眼别’、‘检查距离’、‘是否戴镜’和‘视力值’一道向医生汇报，仅仅提供最后的视力值有的时候不能为医生提供准确的信息。同样您的年龄等因素也是医生在评估您视力时考虑的一个不可或缺的因素。]",
                    "cn":"正如我们向您提供的视力检查报告一样，您最好将‘检查日期’、‘检查眼别’、‘检查距离’、‘是否戴镜’和‘视力值’一道向医生汇报，仅仅提供最后的视力值有的时候不能为医生提供准确的信息。同样您的年龄等因素也是医生在评估您视力时考虑的一个不可或缺的因素。"
                }
            },  
                
            {
                q:{
                    "en":"Q:What status should the other eye keep, when on eye is being examined?",
                    "cn":"问题：在检查一只眼时，另外一只眼应保持什么状态？"
                },
                a:{
                    "en":"A:To be translated [我们建议在检查一只眼时，另一只眼用不透光的物体遮挡住，但同时也保持睁开状态，因为主动闭眼会对正在检查的眼睛有影响。]",
                    "cn":"一般建议在检查一只眼时，另一只眼用不透光的物品遮挡住，但同时也保持睁开状态，应为主动闭眼会对正在检查的眼睛有影响。"
                }
            },  
            {
                q:{
                    "en":"Q:To perform the test, should the browser be connecting to Internet ?",
                    "cn":"问题：使用该程序一定要链接互联网吗？"
                },
                a:{
                    "en":"A:To be translated [不是必须的。但是要能在自己的设备上运行，需要把相关代码也拷贝至设备中，我在'关于作者'栏提供了代码下载链接，只需下载解压后，用浏览器打开index.html就可以了。当然检查前不要忘了校准。]",
                    "cn":"不是必须的。但是要能在自己的设备上运行，需要把相关代码也拷贝至设备中，我在'关于作者'栏提供了代码下载链接，只需下载解压后，用浏览器打开index.html就可以了。当然检查前不要忘了校准。"
                }
            },              
            
        ];
    }
        
})();