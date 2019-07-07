var iceGame = function () {
    var _self = this;

    var Browser = Laya.Browser;
    var WebGL = Laya.WebGL;
    var Loader = Laya.Loader;
    var Stat = Laya.Stat;

    var PreResources = [
        { url: 'images/loadBox/b1.png', type: Loader.IMAGE },
        { url: 'images/loadBox/b2.png', type: Loader.IMAGE },
        { url: 'images/loadBox/t1.png', type: Loader.IMAGE },
        { url: 'images/loadBox/t2.png', type: Loader.IMAGE },
        { url: 'images/loadBox/t3.png', type: Loader.IMAGE },
        { url: 'res/atlas/images/public.atlas', type: Loader.ATLAS },
        { url: 'res/atlas/images/loadBox.atlas', type: Loader.ATLAS }
    ];
    var Resources = [
        { url: 'images/gameBox/q.png', type: Loader.IMAGE },
        { url: 'images/indexBox/t1.png', type: Loader.IMAGE },
        { url: 'images/indexBox/t2.png', type: Loader.IMAGE },
        { url: 'images/indexBox/t3.png', type: Loader.IMAGE },
        { url: 'res/atlas/images/gameBox.atlas', type: Loader.ATLAS },
        { url: 'res/atlas/images/indexBox.atlas', type: Loader.ATLAS }
    ];

    var loadBoxUi,indexBoxUI,gameBoxUI,endDialogUI;

    _self.init = function () {
        _layaInit();
    }


    /**
     * laya初始化
     */
    function _layaInit() {
        Config.isAlpha = true;
        Laya.init(750, 1634, WebGL);
        Laya.stage.scaleMode = "fixedwidth";
        Laya.stage.alignH = "center";
        Laya.stage.alignV = "center";
        Laya.UIConfig.closeDialogOnSide = false;
        Laya.loader.load(PreResources, laya.utils.Handler.create(this, _loadUIInit), null);
        Laya.stage.bgColor = "none";
    }

    /**
     * load页面UI初始化
     */
    function _loadUIInit(){
        loadBoxUi = new loadBoxUI();
        Laya.stage.addChild(loadBoxUi);
        Laya.loader.load(Resources, laya.utils.Handler.create(this, _loadComplete), null);
    }

    /**
     * 加载进度
     */
    function _loadProgress(num){
        console.log(num);
    }

    /**
     * 加载完成
     */
    function _loadComplete(){
        console.log("complete");
    }
}

var iGame = new iceGame();
iGame.init();