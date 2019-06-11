(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-154940d5"],{"1db1":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ArticleContentCom"},[n("articleHeader",{attrs:{title:t.title,imageSrc:t.imageSrc}}),n("AnchorScroll",{attrs:{jsonData:t.jsonData}}),n("BackTop")],1)},r=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"articleHeader",attrs:{id:"header"}},[n("transition",{attrs:{name:"fade",appear:""}},[n("div",{staticClass:"text-box"},[n("h1",[t._v(t._s(t.title))]),n("p",[t._v(t._s(t.des))])])]),n("transition",{attrs:{name:"headerShow",appear:""}},[n("span",{style:"background-image:url("+t.imageSrc+")"})])],1)},s=[],c={name:"articleHeader",props:{title:String,des:String,imageSrc:String}},o=c,l=(n("3dac"),n("2877")),m=Object(l["a"])(o,i,s,!1,null,"05b6e016",null),u=m.exports,p=n("9208"),_=n("8102"),v={name:"ArticleContentCom",props:["listItems","title","imageSrc","jsonData"],components:{articleHeader:u,BackTop:p["a"],AnchorScroll:_["a"]},beforeCreate:function(){var t=document.getElementsByClassName("global_loading");t[0].style.opacity="0"}},d=v,f=(n("3bd7"),Object(l["a"])(d,a,r,!1,null,null,null));e["a"]=f.exports},"2a56":function(t,e,n){"use strict";var a=n("54eb"),r=n.n(a);r.a},"3bd7":function(t,e,n){"use strict";var a=n("8ca4"),r=n.n(a);r.a},"3dac":function(t,e,n){"use strict";var a=n("f6d0"),r=n.n(a);r.a},4611:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ArticleContentInfo"},[n("div",{staticClass:"tags"},[t._v(t._s(t.tags()))]),n("div",{staticClass:"info"},[n("div",{staticClass:"time"},[t._v(t._s(t.listItems.time))]),n("div",{staticClass:"view"},[t._v(t._s(t.viewCount())+" 人阅读")])])])},r=[],i={name:"ArticleContentInfo",data:function(){return{listItems:this.$route.query}},methods:{viewCount:function(){return this.listItems.view},tags:function(){var t=[];t=this.$route.query.tags;for(var e=0;e<this.listItems.tags.length;e++)return t[e]+"/"+t[e+1]}}},s=i,c=(n("f24e"),n("2877")),o=Object(c["a"])(s,a,r,!1,null,"2afd15c4",null);e["a"]=o.exports},"54eb":function(t,e,n){},"7bc0":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"main"}},[n("ArticleContentCom",{attrs:{title:"滑动拼图验证背后的故事",imageSrc:"/image/list-cover-1.png",jsonData:t.jsonData}}),n("div",{staticClass:"container"},[n("ArticleContentInfo"),t._m(0),n("h1",{attrs:{id:"anchor-"+t.jsonData[0].id}},[t._v("前言")]),n("p",[t._v("互联网近几年冒出了一种新的验证形式，用户不需要填写验证码，而是用鼠标去拖动滑块便能通过验证。这种「滑动」验证被广泛应用在各种网站的登录、注册、找回密码或投票场景… 大家对这种新验证也看法不一，有人觉得很新颖，而有人会觉得，这不过又是一个噱头罢了。")]),n("p",[t._v("事实上，极验的「滑动拼图验证」上线已有 7 年，作为全球首个「行为式验证」产品，从诞生至今，已经帮助全球 26 万家企业网站和 APP 智能区分人机，每天帮助企业抵御恶意机器脚本攻击超过 10 亿次。")]),n("p",[t._v("作为极验用户体验设计团队一员，我会在这篇文章中，向大家介绍「滑块拼图验证」是如何诞生，以及聊聊我们对于安全验证产品的思考。")]),n("h1",{attrs:{id:"anchor-"+t.jsonData[1].id}},[t._v("验证码真的安全吗？")]),n("p",[t._v("验证码（CAPTCHA）是 “Completely Automated Public Turing test to tell Computers andHumans Apart”（全自动区分计算机和人类的图灵测试）的缩写，是一种区分用户是机器还是人的全自动程序。")]),t._m(1),n("p",[t._v("这些由一组数字或字母组成的图片，便是最原始的字符验证码，以能否正确识别字符为依据来判定目标是人还是机器。字符验证码是从 2001 年发明出来的，在当时，它的确能够区分出人与机器，但是随着图像识别技术的普及，这种验证码的安全性变得越来越差，其理论前提已经逐渐崩塌，面对众多成熟并且开源的破解手段，字符验证码被破解率高达 95% 以上。")]),t._m(2),n("h6",{staticClass:"各种复杂的字符验证码都有对应的破解方式"},[t._v("各种复杂的字符验证码都有对应的破解方式")]),n("p"),n("p",[t._v("为了应对不断进化的攻击者，验证码的设计者不得不对字符进行噪声、旋转、扭曲、粘连等方式处理，进一步增加机器识别验证码的难度。但是，在如今复杂的互联网环境下，人工智能技术不断发展、黑产市场日益猖獗，传统的验证码早已不能保障互联网交互的安全了。")]),n("h1",{attrs:{id:"anchor-"+t.jsonData[2].id}},[t._v("验证码耗费用户太多时间")]),n("p",[t._v("传统的字符验证码除了安全性差外，用户体验也不尽人意，在这里，我们用 GOMS 模型来进行说明。")]),n("p",[t._v("GOMS 模型是一种用于评估人机交互界面优劣的方法：")]),n("p",[t._v("Goals — 目标，指任务最终要达到的结果；")]),n("p",[t._v("Operators — 操作，在任务实现过程中所产生的行为；")]),n("p",[t._v("Methods — 方法，即实现目标的一系列操作过程；")]),n("p",[t._v("Selection Rules — 选择，当实现目标不止一种方法的时候，选择最终采取的方法所使用的准则。")]),n("p",[t._v("GOMS 模型中有一种较简易的 KLM (Keystroke-Level Model) 测试方法，可以用来评估人机交互效率。")]),t._m(3),n("p",[t._v("以字符验证的设计流程（一次成功）为例，目标是通过验证，需要填写与图片唯一对应的字符，用户将会进行一系列操作，如下：")]),n("p",[t._v("鼠标指向文本框，点击选中 —— MPK")]),n("p",[t._v("观察验证图 —— M")]),n("p",[t._v("将手移至键盘 —— H")]),n("p",[t._v("输入 4 个字符 —— MKKMKK")]),n("p",[t._v("将手移至鼠标 —— H")]),n("p",[t._v("鼠标指向确定按钮并点击 —— MPK")]),n("p",[t._v("那么用户完成一次字符验证的时间约为：MPK+M+H+MKKMKK+H+MPK=10.95 秒")]),t._m(4),n("h6",{attrs:{id:"各平台用户通过验证所耗费时间"}},[t._v("各平台用户通过验证所耗费时间")]),n("p"),n("p",[t._v("通过数据结果表明，成功通过字符验证需要较长时间，如果网站为了安全性而提高字符的识别难度，验证的通过时长还会大大增加。验证码处在两难境地，一方面不能保障网站交互端的安全，另一方面含糊不清的字符图片加大了网站的交互门槛，会导致真实用户流失。当字符验证码失去了安全性，那它对于用户体验的妥协没有任何意义了。")]),n("h1",{attrs:{id:"anchor-"+t.jsonData[3].id}},[t._v("探索更友好的验证方式")]),n("p",[t._v("在人与计算机的交互行为中，鼠标可以在图像化的系统下快速实现各种复杂的操作，效率更高也更符合直觉。而在字符验证过程中，鼠标点击与键盘输入的操作是交叉进行的，这无疑会导致效率低下。")]),t._m(5),n("p",[t._v("早期的网站，当用户需要填写出生年月时，还得按照格式手动的输入“1993.10.24”。后来，工程师为了优化体验，设计出了时间选择器，用户只需要用鼠标点击日历就可以快速选择年月日了。")]),n("p",[t._v("还有其它的例子，例如 iOS 上经典的轮盘选择器、购物网站上购买数量框旁边的 stepper（步进器）、输入场景下自动展示出的备选项… 这一系列设计，都是为了减少人机交互行为中使用键盘输入的频次。因此，用户在验证过程中，为何不能只用鼠标操作就能快速通过验证呢？")]),t._m(6),n("h6",{attrs:{id:"如何提高界面效率是 UI 设计中重要一环"}},[t._v("如何提高界面效率是 UI 设计中重要一环")]),n("p"),n("h1",{attrs:{id:"anchor-"+t.jsonData[4].id}},[t._v("「滑块」和「拼图」的有趣结合")]),n("p",[t._v("字符验证码的理论依据是：通过能否正确识别字符来判断目标是人还是机器。如果验证产品要具备分辨人机的能力，必须有判断依据。在产品构建初期，极验团队的工程师们首次提出了全新的「行为式验证」概念，希望通过分析目标的「行为」，来判定其是人或机器。")]),n("p",[t._v("为了去获取用户的行为数据，并让这些数据有一定规律、有进行机器学习的价值，我们需要设计出一个合理、直观并且流畅的验证流程，去引导用户完成某个操作。而「滑动解锁」则是一个非常合适这个场景的动作。")]),t._m(7),n("p",[t._v("「滑动解锁」这个设计本身就是一个简单的验证过程，验证你是需要使用手机还只是误触。自 2007 年发布 iPhone 以来，滑动解锁功能已伴随 iPhone 有十多年时间，许多的安卓手机也跟进了这种设计，所以「滑动解锁」有一定的用户基础，大部分人看到「滑块」、「滑槽」和「箭头」这些元素时，便会联想到「解锁」、「打开」，意识到需要去滑动。")]),n("p",[t._v("然而，如果是简单的将滑块拖至终点，所得到的行为数据信息不够丰富，无法精确的构建模型。鼠标轨迹如果要包含更多特征，必须赋予用户一个任务，这时我们找到了一个有意思的意符「拼图」。")]),t._m(8),n("p",[t._v("拼图是广受欢迎的一种智力游戏，早在 1760 年，法英两国几乎同时出现这种既流行又有益的娱乐方式：把一张图片粘在硬纸板上，把它剪成不规则的小碎片，打乱后要求人们把碎片重新排列。如果验证过程中加入「拼图」的元素，人就会自然产生「去拼合完整」的示能，我们尝试将「滑动」和「拼图」结合起来，给用户设定一个任务：将拼图移至缺口处，将图片拼合完整。")]),t._m(9),n("p",[t._v("于是，在 2012 年，极验发布了第一版「滑动拼图」行为式验证，武汉大学珞珈山水官方论坛成为我们第一个客户。验证被部署在论坛的登录页面上，师生们只需要拖动滑块将拼图移至图片的缺口上就能通过验证，大家纷纷发帖讨论这种新奇有趣的验证形式，相比以往的数字验证码更方便，验证过程也很有趣。")]),t._m(10),n("h6",{attrs:{id:"验证过程不需要用到键盘，只需拖动鼠标便可完成验证"}},[t._v("验证过程不需要用到键盘，只需拖动鼠标便可完成验证")]),n("p",[t._v("我们同样用 KLM 方法来检验这个流程，目标是通过验证（一次成功），需要拖动滑块将拼图拼合完整，用户将会进行一系列操作，如下：")]),n("p",[t._v("鼠标指向滑条控件 —— PM")]),n("p",[t._v("点击滑块后进行拖动 —— KP")]),n("p",[t._v("松开鼠标 —— K")]),n("p",[t._v("那么用户完成一次“滑动拼图”验证的时间约为：PM+KP+K= 3.95 秒")]),n("p",[t._v("相比字符验证码，「滑动拼图」验证过程整整节省了 7 秒，省去了多次键盘输入的操作，只需点击鼠标进行拖拽——松开，当用户学会并习惯方法后，验证时间还将大大缩短。")]),n("p",[t._v("抛开 KLM 模型，字符验证码除了繁琐的步骤外，人们在完成字符验证后往往有一种「嗯，写对了」的任务感，有时还会产生吃力、抵触的负面情绪，那是因为人在这个过程中同时运用到了左脑与右脑，这也是由人的思维方式决定的。")]),n("p",[t._v("右脑所表达的思维语言属于寻找类比、相关联性的，而左脑擅于线性的思考、处理事件的步骤。验证码上的字符经过图像处理，隐藏了一些原本的特征，人所看到的往往是一张图案，这时右脑必须去辨别、联想，在有信心识别后，切换到左脑去进行手头上的逻辑化操作，这个过程会占据人全部的注意力，必须是专心致志，不被打扰。")]),t._m(11),n("p",[t._v("而「滑动拼图」验证恰好避免了使用右脑，图片上的拼图和缺口，即已经提供了问题的「答案」，不用去进行联想、识别，只需要动用左脑完成简单的拖拽操作，整个过程是毫不费力的，没有思考负担，更不用左右脑切换，你完全可以一边完成验证，一边思考接下来要做的事。")]),n("p",[t._v("当「滑动拼图」验证有了基本的产品形态后，产品经理和设计师更多是在优化验证过程中的引导和减轻带给用户的负面情绪。面对新事物，人们都会有学习成本，不同用户群体的接受能力也不同，「滑动拼图」验证这几年在逻辑层面、视觉层面不断优化，尽量降低用户初次接触时的理解难度和抵触心理。")]),t._m(12),n("h6",{attrs:{id:"年极验-3.0-全新升级"}},[t._v("2016 年极验 3.0 全新升级")]),n("h1",{attrs:{id:"anchor-"+t.jsonData[5].id}},[t._v("验证产品设计的思考")]),n("p",[t._v("做产品一直所提到的用户体验，本质上其实就是人的实际感受，对于验证产品，不能一味认为通过时间短、形式有意思就是体验好，难度大、拦截率高就是安全性好，我们需要满足 B 端客户诉求的同时多站在 C 端用户角度考虑。")]),n("p",[t._v("如今只靠单一的「滑动拼图」验证无法面对日益复杂的网络安全形势了。网站主往往面对不同的攻击方式，如批量注册、撞库攻击、人工打码、暴力破解等等，但是网站又要让年轻人、年纪稍长、不同语言习惯以及视觉障碍者都能顺利通过验证，我们需要去设计不同的验证形式，根据风险等级或特定场景去推送。")]),t._m(13),n("p",[t._v("一个验证形式经历从 0 到 1 ，需要产品经理、技术安全、设计师、研发、测试、市场等部门之间的协同，由于验证产品开发难度大、安全要求苛刻，后期的策略更新和通用性拓展，这往往是一段漫长的过程。为了尽量降低开发成本，以小搏大，要求极验用户体验设计中心的同事们对方案进行更透彻的思考。")]),t._m(14),n("p",[t._v("「安全产品天秤」是公司内部对安全产品重要的指导方向，以解决实际问题为出发点，以用户为中心，把握天秤平衡。很多时候，「体验」和「安全」是此消彼长的，比如上文所提到「滑动拼图」验证收集数据的问题，用户产生的行为会一定程度上影响数据的获取，产品经理需要做出决策，强化与妥协，把控天秤的倾斜程度。")]),n("p",[t._v("实际的产品研发过程中，容易遇到分叉路口，解决方式可能不止一种，为了防止相关人员陷入「专家盲点」，在方案执行期间，除了 KLM 模型检验界面效率，还需要有一套可靠的体系去定义什么是好，什么是坏。产品的设计过程尽可能迅速，我们可以通过「验证产品三角」来给方案打分，设计师提供 Principle 可交互界面或前端工程师提供简易的 Demo，用于安全技术部门考核其获取数据量的能力、内外部普遍调研流程时长以及理解难度，从而评估方案的可行度。")]),t._m(15),n("p",[t._v("极验是一家以技术为核心，数据为驱动，从安全、运营、产品层面赋能业务发展的解决方案提供商，以让互联网交互更加美好为己任。当然，这个愿景仅仅依靠验证码是无法做到的，需要不断的技术创新，打破束缚，去扩展数据挖掘深度与安全分析广度。作为极验用户体验设计中心，在与网络黑产的安全拉锯战中，依然坚持以用户为中心的理念，探寻安全和体验之间的最佳设计方案。")])],1)],1)},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[n("img",{attrs:{src:"/articleImg/2019-05-23/image10.png",alt:""}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[n("img",{attrs:{src:"/articleImg/2019-05-23/image8.png",alt:""}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[n("img",{attrs:{src:"/articleImg/2019-05-23/image4.png",alt:""}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[n("img",{attrs:{src:"/articleImg/2019-05-23/image14.png",alt:""}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[n("img",{attrs:{src:"/articleImg/2019-05-23/image12.png",alt:" "}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[n("img",{attrs:{src:"/articleImg/2019-05-23/image1.png",alt:" "}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[n("img",{attrs:{src:"/articleImg/2019-05-23/image18.png",alt:" "}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[n("img",{attrs:{src:"/articleImg/2019-05-23/image5.png",alt:" "}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[n("img",{attrs:{src:" /articleImg/2019-05-23/image7.png",alt:" "}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[n("img",{attrs:{src:" /articleImg/2019-05-23/image20.png",alt:" "}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[n("img",{attrs:{src:" /articleImg/2019-05-23/image17.gif",alt:" "}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[n("img",{attrs:{src:" /articleImg/2019-05-23/image16.jpg",alt:" "}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[n("img",{attrs:{src:" /articleImg/2019-05-23/image9.gif",alt:" "}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[n("img",{attrs:{src:" /articleImg/2019-05-23/image11.png",alt:" "}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[n("img",{attrs:{src:" /articleImg/2019-05-23/image3.png",alt:" "}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[n("img",{attrs:{src:" /articleImg/2019-05-23/image19.png",alt:" "}})])}],i=n("1db1"),s=n("4611"),c={components:{ArticleContentCom:i["a"],ArticleContentInfo:s["a"]},data:function(){return{jsonData:[{title:"前言",id:"前言"},{title:"验证码真的安全吗？",id:"验证码真的安全吗？"},{title:"验证码耗费用户太多时间",id:"验证码耗费用户太多时间"},{title:"探索更友好的验证方式",id:"探索更友好的验证方式"},{title:"「滑块」和「拼图」的结合",id:"「滑块」和「拼图」的结合"},{title:"验证产品设计的思考",id:"验证产品设计的思考"}]}}},o=c,l=(n("2a56"),n("2877")),m=Object(l["a"])(o,a,r,!1,null,"6fd0e1c0",null);e["default"]=m.exports},8102:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"anchor-wrap"},[n("ul",{staticClass:"ul scroll"},t._l(t.jsonData,function(e,a){return n("li",{key:a},[n("a",{class:{active:a===t.nowSubIndex},attrs:{href:"javascript:void(0)"},on:{click:function(n){t.goAnchor("#anchor-"+e.id,a)}}},[t._v(t._s(e.title))])])}))])},r=[],i=(n("ac6a"),{name:"AnchorScroll",data:function(){return{nowSubIndex:0}},props:{jsonData:Array},mounted:function(){window.addEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){var t=this,e=document.documentElement.scrollTop||document.body.scrollTop,n=document.querySelectorAll(".article");n.forEach(function(n,a){e>=n.offsetTop-40&&(t.nowSubIndex=a)})},goAnchor:function(t,e){this.nowSubIndex=e;var n=document.querySelector(t),a=n.offsetTop,r=document.documentElement.scrollTop||document.body.scrollTop,i=a/50>>0;if(a>r)c();else{var s=r-a;i=s/50>>0,o()}function c(){r<a?(r+=i,document.body.scrollTop=document.documentElement.scrollTop=r,setTimeout(c,10)):document.body.scrollTop=document.documentElement.scrollTop=a}function o(){r>a?(r-=i,document.body.scrollTop=document.documentElement.scrollTop=r,setTimeout(o,10)):document.body.scrollTop=document.documentElement.scrollTop=a}}},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)}}),s=i,c=n("2877"),o=Object(c["a"])(s,a,r,!1,null,"3ea8ff1d",null);e["a"]=o.exports},"8ca4":function(t,e,n){},ac6a:function(t,e,n){for(var a=n("cadf"),r=n("0d58"),i=n("2aba"),s=n("7726"),c=n("32e9"),o=n("84f2"),l=n("2b4c"),m=l("iterator"),u=l("toStringTag"),p=o.Array,_={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},v=r(_),d=0;d<v.length;d++){var f,g=v[d],h=_[g],S=s[g],C=S&&S.prototype;if(C&&(C[m]||c(C,m,p),C[u]||c(C,u,g),o[g]=p,h))for(f in a)C[f]||i(C,f,a[f],!0)}},d401:function(t,e,n){},f24e:function(t,e,n){"use strict";var a=n("d401"),r=n.n(a);r.a},f6d0:function(t,e,n){}}]);
//# sourceMappingURL=chunk-154940d5.42c2ca28.js.map