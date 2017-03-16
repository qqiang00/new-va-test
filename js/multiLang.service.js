(function () {
    var app = angular.module("VATestApp");

    app.service("mls", function () {
        var self = this;
        this.lang = 'en';

        this.$ = function (obj) {
            if (obj === null)
                return null;
            if (obj === undefined)
                return undefined;
            if (obj.hasOwnProperty(self.lang)) {
                return obj[self.lang];
            }
            else if (obj.hasOwnProperty("en")){
                return obj["en"];
            }else{
                return obj;
            }
        };

        this.switchLanguage = function (lang) {
            self.lang = lang;
            // console.log("Cur lan:" + self.lang);
        };

        this.appName = {
            "cn": "在线视力检查",
            "en": "Online Visual Acuity Test",
            "fr": "Le test d'acuité visuelle en Ligne"
        };
        this.appSmallName = {
            "cn": " —— 规范、准确、高效",
            "en": " - Professional, Precise and Efficient",
            "fr": " - Professional, précise et efficace",
        };
        this.author = { "cn": "叶强", "en": "Qiang YE", "fr":"Pierre YE" };
        this.lastUpdateDate = { 
            "en": "latest updated on 17 Mar 2017", 
            "cn": "最近一次更新于2017年3月17日",
            "fr": "Mise à jour le 17 mars 2017",
        };
        this.copyright = "Copyright 2010 - 2020 All rights reserved.";

        this.ou = { "cn": "双眼", "en": "Both", "fr":"Les deux"};           // 双眼
        this.os = { "cn": "左眼", "en": "Left", "fr":"Gauche" };           // 左眼
        this.od = { "cn": "右眼", "en": "Right", "fr":"Droite"};
        this.naked = { "cn": "裸眼", "en": "Naked", "fr":"Sans lunettes"};
        this.withGlasses = { "cn": "戴镜", "en": "Avec des lunettes" };
        this.nearVA = { "cn": "近视力", "en": "Near","fr":"Près" };
        this.farVA = { "cn": "远视力", "en": "Far","fr":"Loin" };
        this.unknown = { "cn": "未知", "en": "Unknown","fr":"Inconnu" };
        this.lessThan0_1 = { 
            "cn": "低于 0.1 (4.0)", 
            "en": "Less than 0.1 (4.0)",
            "fr": "Moins de 0.1 (4.0)" 
        };
        this.orGreater1_0 = { 
            "cn": "1.0 (5.0) 或更好", 
            "en": "1.0 (5.0) or greater",
            "fr": "1.0 (5.0) ou plus"
        };
        this.home = { "cn": "首页", "en": "Home", "fr":"Accueil" };
        this.calibration = { "cn": "校准", "en": "Calibration","fr":"Calibration" };
        this.vaTest = { "cn": "视力检查", "en": "Visual Acuity Test", "fr":"Test d'acuité visuelle" };
        this.qa = { "cn": "常见问答", "en": "Q&A", "fr":"Q&R"};
        this.aboutAuthor = { "cn": "关于作者", "en": "About Author","fr":"A propos de l'auteur" };
        this.m = { "cn": "米", "en": "M","fr":"M" };
        this.cm = { "cn": "厘米", "en": "CM","fr":"CM" };

        this.messages = {
            click_to_start: { 
                "cn": "点击'开始'按钮开始检查", 
                "en": "Click start to begin",
                "fr": "Cliquez pour commencer"
            },
            make_choice: { 
                "cn": "开始您的选择", 
                "en": "Make your choice",
                "fr": "Faites votre choix",
            },
            answer_right: { 
                "cn": "真棒", 
                "en": "Correct Choice",
                "fr": "Bon choix"
            },
            answer_wrong: { 
                "cn": "很遗憾，选错了", 
                "en": "Wrong Choice",
                "fr": "Mauvais choix"
            },
            test_complete: { 
                "cn": "检查已经结束", 
                "en": "Test Completed",
                "fr": "Test terminé"
            },
        };


        this.ctHomePage = {
            title: {
                "cn": "朋友，您好！",
                "en": "Hello, Friend!",
                "fr": "Bonjour!"
            },
            p1: {
                "cn": "在家里，就可以进行规范、精确和高效的自助式视力检查",
                "en": "Help yourself perform a professional, precise and efficient visual acuity test at home.",
                "fr": "Aidez-vous à effectuer un test d'acuité visuelle professionnel, précis et efficace à la maison."
            },
            p2: {
                "cn": "你只需要一个可以上网的浏览器，外加一张常见的钱包卡片",
                "en": "All you need is a web browser with internet access and a pocket card.",
                "fr": "Tout ce dont vous avez besoin est un navigateur Web avec accès à Internet et une carte de poche."
            },
            btn1: {
                "cn": "了解更多",
                "en": "Learn More",
                "fr": "En Savoir Plus"
            },
            btn2: {
                "cn": "试一试",
                "en": "Try it!",
                "fr": "Essayez-le!"
            }
        };
        // words on Calibration Page
        this.ctCalibrationPage = {
            inform: {
                "cn": "取出一张尺寸为856mm×540mm的卡片.滑动下方的滑块来缩放矩形区域，同时调整卡片位置使得它尽量与卡片重合. 完全重合即表示校准已完成.此后的操作中请不要调整屏幕分辨率以及缩放浏览器.校准完毕后点击'视力检查'菜单进入视力检查页面",
                "en": "Prepare a card sized：856mm×540mm, put it onto the screen. Zoom in/out the rectangle until it is completely overlapped. Do NOT adjust the resolution and zoom in/out the browser after Calibration. Now, go to 'Visual Acuity Test' Page.",
                "fr": "Préparez une carte de taille: 856mm × 540mm, mettez-le sur l'écran. Zoom avant / arrière le rectangle jusqu'à ce qu'il soit complètement recouvert. NE PAS ajuster la résolution et zoomer sur le navigateur après l'étalonnage. Maintenant, allez à la page 'Test d'acuité visuelle'.",
            }
        };
        // words on VA test Page
        this.ctTP = {
            warning:{
                "cn":"请确认您已经完成校准工作，如果没有，请先点击'校准'菜单进入校准页面。",
                "en":"Make sure that you performed calibration process first. If not, go to 'calibration' menu.",
                "fr":"Assurez-vous que vous avez effectué processus de la calibration en premier. Sinon, allez dans le menu 'calibration'.",
            },
            inform: {
                "cn": "您可以选择检查某一单眼或双眼同时检查，也可以戴或不戴眼镜。检查远视力建议选择3-5m。选择一个和您差不多级别的视力以节省检查时间。 调整屏幕到最大亮度和对比度。检查时保持屏幕与眼同高，使视线平行。设置好后就可以点击'开始'按钮。",
                "en": "You can choose to test either eye or both with or without glasses. The distance of 3-5 meters is recommended for FAR visual acuity(VA) test. Select a VA grade close to yours may save time. Adjust the screen brightness and contrast to the highest level, keep environment bright. Keep screen and eye same high so that you can look at the screen horizontally. Click 'Start' button when ready.",
                "fr": "Vous pouvez choisir de tester l'œil ou les deux avec ou sans lunettes. La distance de 3 à 5 mètres est recommandée pour le test d'acuité visuelle (VA) de Loin. Choisissez un niveau du VA proche de le vôtre peut gagner du temps. Réglez la luminosité et le contraste de l'écran au niveau le plus élevé, gardez l'environnement lumineux. Gardez l'écran et les yeux même haute de sorte que vous pouvez regarder l'écran horizontalement. Cliquez sur le bouton 'Commencez' lorsque vous êtes prêt.",
            },
            eye: {
                "cn": "受试眼别",
                "en": "Testing Eye",
                "fr": "l'Oeil à tester",
            },
            condition: {
                "cn": "是否戴镜",
                "en": "Condition",
                "fr": "Condition"
            },
            vaGrade: {
                "cn": "当前视力",
                "en": "Testing VA",
                "fr": "Niveau Actuel"
            },
            distance: {
                "cn": "检查距离",
                "en": "Distance",
                "fr": "Distance",
            },
            btnStart: {
                "cn": "开始",
                "en": "Start",
                "fr": "Commencez"
            },
            btnAbort: {
                "cn": "放弃",
                "en": "Abort",
                "fr": "Abandonnez"
            },
            btnReset: {
                "cn": "重置",
                "en": "Reset",
                "fr": "Réinitialisez"
            },
            btnUp: {
                "cn": "上",
                "en": "U",
            },
            btnRight: {
                "cn": "右",
                "en": "R",
            },
            btnDown: {
                "cn": "下",
                "en": "D",
            },
            btnLeft: {
                "cn": "左",
                "en": "L",
            },
            btnClear: {
                "cn": "清楚",
                "en": "Clear",
                "fr": "Clair",
            },
            btnNotClear: {
                "cn": "不清楚",
                "en": "Not Clear",
                "fr": "Pas Clair",
            },
            btnEdit: {
                "cn": "修改",
                "en": "Edit",
            },
            btnOk: {
                "cn": "确定",
                "en": "OK",
            },
            btnShowReport: {
                "cn": "查看报告",
                "en": "See Report",
                "fr": "Voir le rapport",
            },
        };

        this.ctReport = {
            title: { "cn": "视力检查报告", "en": "Visual Acuity Test Report", "fr":"rapport de test d'acuité visuelle" },
            datetime: { "cn": "日期/时间", "en": "Date/Time", "fr":"Date/Heure" },
            yourVAGrade: { "cn": "您的视力", "en": "Your Visual Acuity", "fr":"Votre niveau de VA" },
        };

        this.ctAuthor = {
            name: { "cn": "叶强", "en": "YE Qiang" },
            title: {
                "cn": "眼科医师, 软件工程师",
                "en": "Ophthalmologist, Software Engineer",
                "fr": "Ophtalmologiste, Ingénieur Logiciel"
            },
            university: {
                "cn": "毕业于上海交通大学",
                "en": "Graduated from Shanghai JiaoTong University",
                "fr": "Diplômé de l'Université de JiaoTong à Shanghai",
            },
            degree: {
                "cn": "医学博士(临床医学)，工学学士(材料科学&计算机科学)",
                "en": "Medical Doctor(Clinical Medicine), Bachelor of Engineering(Material Science & Computer Science)",
                "fr": "Docteur en médecine (médecine clinique), baccalauréat en génie (Science Matérielle & Informatique)"
            },
            p1: {
                "cn": "十余年眼科临床工作经验。热爱计算机技术，对机器学习、深度学习等人工智能技术有浓厚的兴趣。",
                "en": "Ten years clinical exeprience. Strong background and interest in Machine Learning, Deep Learning and other Artificial Intelligence techonogies.",
                "fr": "Dix ans d'expérience clinique. Fort de fond et l'intérêt pour Machine Learning, Deep Learning et d'autres techonogies Intelligence Artificielle."
            },
            srcDownload: { "cn": "下载本程序源代码", "en": "Download source code", "fr": "Téléchargez le code source" },
        };

        this.qas = [
            {
                q: {
                    "en": "Q:What are the factors contributing to the precision of visual test results?",
                    "cn": "问题：影响视力检查结果准确程度的因素主要有哪些?"
                },
                a: {
                    "en": "A:To be translated [有非常多的因素可以影响到视力检查结果的准确程度。其中重要的有：检查距离的选择，屏幕E字符宽度的准确显示，受试者观察E字符时视线是否水平，环境亮度以及E字符的对比度等。这些因素综合决定了一次视力检查结的准确程度]",
                    "cn": "有非常多的因素可以影响到视力检查结果的准确程度。其中重要的有：检查距离的选择，屏幕E字符宽度的准确显示，受试者观察E字符时视线是否水平，环境亮度以及E字符的对比度等。这些因素综合决定了一次视力检查结的准确程度。"
                }
            },
            {
                q: {
                    "en": "Q: Compared to traditional VA test instrument, what are the benefits and shortcomings of this online test application?",
                    "cn": "问题：与传统视力设备相比，这个在线系统有什么优点和缺点?"
                },
                a: {
                    "en": "A:To be translated [该系统的优点是规范、精确、方便。在设计这个程序时完全基于视力度量的科学原理，同时充分利用了电子设备体积小的优势，检查时方便迅速。相比传统设备，我们系统会根据您的检查距离决定显示的E字符的大小。缺点是，一切过程是自助的，您可能需要一个助手。同时检查前的校准工作非常重要。]",
                    "cn": "该系统的优点是规范、精确、方便。在设计这个程序时完全基于视力度量的科学原理，同时充分利用了电子设备体积小的优势，检查时方便迅速。相比传统设备，我们系统会根据您的检查距离决定显示的E字符的大小。缺点是，一切过程是自助的，您可能需要一个助手。同时检查前的校准工作非常重要。另外当检查距离特别近（比如20cm）时，在测试较高视力等级时E字符的显示精度会达不到要求。这一临界距离因设备不同而不同，"
                }
            },
            {
                q: {
                    "en": "Q:Why is 'Calibration' step so important? Can computer do the process itself?",
                    "cn": "问题：为什么校准那么重要？能让电脑自动帮我校准吗？"
                },
                a: {
                    "en": "A:To be translated [准确的校准步骤对于得到一个准确、可信的检查结果是非常关键的。系统将依据校准得到的参数来决定向你显示多大的E字符，以及这样大小的E字符在当前检查距离下代表的视力级别是多少。由于不同的设备屏幕分辨率设置不一样，浏览器的缩放也不受限制，因此很难通过程序来自动调整。正因为如此，我们要求在完成校准工作后，应避免再进行分辨率调整、缩放浏览器、横屏转竖屏等操作。]",
                    "cn": "准确的校准步骤对于得到一个准确、可信的检查结果是非常关键的。系统将依据校准得到的参数来决定向你显示多大的E字符，以及这样大小的E字符在当前检查距离下代表的视力级别是多少。由于不同的设备屏幕分辨率设置不一样，浏览器的缩放也不受限制，因此很难通过程序来自动调整。正因为如此，我们要求在完成校准工作后，应避免再进行分辨率调整、缩放浏览器、横屏转竖屏等操作。"
                }
            },

            {
                q: {
                    "en": "Q:Should I wear the glasses or not to perform the test?",
                    "cn": "问题：我可以戴眼镜检查吗？"
                },
                a: {
                    "en": "A:",
                    "cn": "完全可以。您甚至可以戴着眼镜检查一次，不戴眼镜再检查一次。这些结果都是有意义的。通常较高的那个视力被认为是您的视力。此外，，特别对于中老年人来说，不同距离检查的结果也有不同的意义。一般来讲，对于青少年，可以使用2.5米距离的检查来表示看远的视力；检查看近处的视力时可以选择30cm的距离。"
                }
            },

            {
                q: {
                    "en": "Q:How do I report my online test result to doctors?",
                    "cn": "问题：我应该如何向医生反映我的在线视力检查结果？"
                },
                a: {
                    "en": "A:To be translated [正如我们向您提供的视力检查报告一样，您最好将‘检查日期’、‘检查眼别’、‘检查距离’、‘是否戴镜’和‘视力值’一道向医生汇报，仅仅提供最后的视力值有的时候不能为医生提供准确的信息。同样您的年龄等因素也是医生在评估您视力时考虑的一个不可或缺的因素。]",
                    "cn": "正如我们向您提供的视力检查报告一样，您最好将‘检查日期’、‘检查眼别’、‘检查距离’、‘是否戴镜’和‘视力值’一道向医生汇报，仅仅提供最后的视力值有的时候不能为医生提供准确的信息。同样您的年龄等因素也是医生在评估您视力时考虑的一个不可或缺的因素。"
                }
            },

            {
                q: {
                    "en": "Q:What status should the other eye keep, when on eye is being examined?",
                    "cn": "问题：在检查一只眼时，另外一只眼应保持什么状态？"
                },
                a: {
                    "en": "A:To be translated [我们建议在检查一只眼时，另一只眼用不透光的物体遮挡住，但同时也保持睁开状态，因为主动闭眼会对正在检查的眼睛有影响。]",
                    "cn": "一般建议在检查一只眼时，另一只眼用不透光的物品遮挡住，但同时也保持睁开状态，应为主动闭眼会对正在检查的眼睛有影响。"
                }
            },
            {
                q: {
                    "en": "Q:To perform the test, should the browser be connecting to Internet ?",
                    "cn": "问题：使用该程序一定要链接互联网吗？"
                },
                a: {
                    "en": "A:To be translated [不是必须的。但是要能在自己的设备上运行，需要把相关代码也拷贝至设备中，我在'关于作者'栏提供了代码下载链接，只需下载解压后，用浏览器打开index.html就可以了。当然检查前不要忘了校准。]",
                    "cn": "不是必须的。但是要能在自己的设备上运行，需要把相关代码也拷贝至设备中，我在'关于作者'栏提供了代码下载链接，只需下载解压后，用浏览器打开index.html就可以了。当然检查前不要忘了校准。"
                }
            },

        ];

    });
})();