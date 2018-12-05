var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var SceneGame = (function (_super) {
    __extends(SceneGame, _super);
    function SceneGame() {
        var _this = _super.call(this) || this;
        _this.isdisplay = false;
        _this.isFirst = false;
        _this.jumpToAppDict = {
            "wxd101b6b8f64db085": { path: "pages/index/index?from=wxcps&tag=U84Sv-g2td", extraData: {}, envVersion: "" }
        };
        _this.moreGameCount = 0;
        _this.tickid = 0;
        return _this;
    }
    // private s:string;
    SceneGame.getInstance = function () {
        if (SceneGame.scenegame == null) {
            SceneGame.scenegame = new SceneGame();
        }
        return SceneGame.scenegame;
    };
    SceneGame.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    /**
     *  /**
         * @private
         * 子类覆盖此方法可以执行一些初始化子项操作。此方法仅在组件第一次添加到舞台时回调一次。
         * 请务必调用super.createChildren()以完成父类组件的初始化
         */
    // protected createChildren(): void;初始化自定义子项(没有在EUI面板上的)操作
    /**
     * @private
     * 子项创建完成,此方法在createChildren()之后执行。
     */
    // protected childrenCreated(): void;
    //  */
    SceneGame.prototype.childrenCreated = function () {
        var _this = this;
        _super.prototype.childrenCreated.call(this);
        // let openDataContext = wx.getOpenDataContext();
        this.bitmap = platform.openDataContext.createDisplayObject(null, this.stage.stageWidth, this.stage.stageHeight);
        this.btn_result.addEventListener(egret.TouchEvent.TOUCH_TAP, this.showResult, this);
        this.btn_Level.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onLevel, this);
        this.btn_paihang.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onpaihang, this);
        this.hongbaoBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onHongbao, this);
        this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            _this.openGroup.visible = false;
            _this.closeBtn.visible = false;
            _this.bitmap.parent && _this.bitmap.parent.removeChild(_this.bitmap);
            _this.isdisplay = false;
            _this.rankingListMask.parent && _this.rankingListMask.parent.removeChild(_this.rankingListMask);
            platform.openDataContext.postMessage({
                isdisplay: _this.isdisplay,
            });
            LevelDataManager.getInstance().getAd().show();
        }, this);
        this.caiziBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.toCaizi, this);
        this.xiaoguo();
        this.xiaorenBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            LevelDataManager.onshowNum = 3;
            platform.randomShare();
        }, this);
        this.showHongBaoIcon();
        this.tickid = setInterval(function () {
            _this.updatePanel();
        }, 1000);
    };
    SceneGame.prototype.onHongbao = function () {
        this.bingoLayer.visible = true;
        this.bingoLayer.showhongbaoGroup.visible = true;
        this.bingoLayer.showYUELabel.text = LevelDataManager.curMoney.toString();
    };
    SceneGame.prototype.showHongBaoIcon = function () {
        if (LevelDataManager.enableHongBao) {
            this.hongbaoBtn.visible = true;
            // egret.Tween.get(this.hongbaoBtn).to({ scaleX: 1.2, scaleY: 1.2 }, 1000).to({ scaleX: 1, scaleY: 1 }, 1000).call(() => {
            // 	this.showHongBaoIcon();
            // })
        }
        else if (!LevelDataManager.enableHongBao) {
            this.hongbaoBtn.visible = false;
            // egret.Tween.get(this.hongbaoBtn).call(() => {
            // 		this.showHongBaoIcon();
            // })
        }
    };
    SceneGame.prototype.getSelectWords = function (str) {
    };
    SceneGame.prototype.InitLevel = function (index) {
        this.levelIndex = index;
        this.labelLevel.text = this.levelIndex.toString();
        var levelData = LevelDataManager.getInstance().GetLevelData(index); //得到关卡数据
        //将字段接起来
        //要展示的数据
        var showData = levelData.chaotic;
        //对字段重新排列
        var wordList = []; //["","",]代表这是字符串数组。
        for (var i = 0; i < showData.length; i++) {
            wordList.push(showData.charAt(i));
        }
        //  wordList = this.randomList(wordList);
        //内容区域赋值  大于150关   变为15字
        // this.changeWord();//改变选择区域字数  统一两行
        for (var i = 0; i < this.group_Chaotic.numChildren; i++) {
            var wordRect = this.group_Chaotic.getChildAt(i);
            wordRect.SetWordText(wordList[i]);
            wordRect.visible = true;
        }
        //添加答案区
        this.group_Result.removeChildren();
        var len = levelData.result.length;
        while (len) {
            var temp = new AnswerWord();
            temp.width = 75;
            temp.height = 75;
            this.group_Result.addChild(temp);
            len--;
        }
        //答案区域重置一些状态
        for (var i = 0; i < this.group_Result.numChildren; i++) {
            var answerRect = this.group_Result.getChildAt(i);
            answerRect.visible = true;
            answerRect.SetSelectWord(null);
            answerRect.selectWord = null;
        }
        //显示问题
        this.label_Question.text = this.chatAtQuestion(levelData.question);
        this.hongbao20();
    };
    /**将原字符串改为自己想要的样子 */
    SceneGame.prototype.chatAtQuestion = function (str) {
        var strArr = "";
        for (var i = 0; i < str.length; i++) {
            strArr += str.charAt(i) + " ";
            if (i == str.length - 1) {
                strArr += str.charAt(i);
            }
        }
        return strArr;
    };
    SceneGame.prototype.hongbao20 = function () {
        if (LevelDataManager.enableHongBao) {
            var max = LevelDataManager.getInstance().GetMileStone();
            if (max % 7 == 0) {
                LevelDataManager.curMoneyNum = LevelDataManager.unlockMoneyNum;
                LevelDataManager.beforeUnlockMoneyNum = LevelDataManager.unlockMoneyNum;
                console.log("重新来");
            }
            if (LevelDataManager.curMoneyNum <= 5) {
                //领红包逻辑
                if (max % 30 == 3 && LevelDataManager.unlockMoneyNum == LevelDataManager.curMoneyNum && LevelDataManager.unlockMoneyNum == LevelDataManager.beforeUnlockMoneyNum) {
                    var layer = SceneGame.getInstance().bingoLayer;
                    if (LevelDataManager.curMoney <= 19.5) {
                        //出现红包弹窗
                        this.bingoLayer.visible = true;
                        layer.hongbaoGroup.visible = true;
                        //出现红包
                        LevelDataManager.showMoney = 0.5;
                        layer.yueLabel.text = LevelDataManager.curMoney.toString();
                        layer.moneyLabel.text = LevelDataManager.showMoney.toString();
                    }
                }
                LevelDataManager.SaveHongbaoNum();
            }
            else {
                //领红包逻辑
                if (max % 20 == 0 && LevelDataManager.unlockMoneyNum == LevelDataManager.curMoneyNum && LevelDataManager.unlockMoneyNum == LevelDataManager.beforeUnlockMoneyNum) {
                    var layer = SceneGame.getInstance().bingoLayer;
                    if (LevelDataManager.curMoney <= 19.5) {
                        //出现红包弹窗
                        this.bingoLayer.visible = true;
                        layer.hongbaoGroup.visible = true;
                        //出现红包
                        LevelDataManager.showMoney = 0.5;
                        layer.yueLabel.text = LevelDataManager.curMoney.toString();
                        layer.moneyLabel.text = LevelDataManager.showMoney.toString();
                    }
                }
                LevelDataManager.SaveHongbaoNum();
            }
        }
    };
    SceneGame.prototype.changeWord = function () {
        if (this.levelIndex < 150) {
            if (this.group_Chaotic.numChildren == 10) {
                return;
            }
            this.group_Chaotic.removeChildren();
            var tLayout = new eui.TileLayout();
            tLayout.horizontalGap = 20;
            tLayout.verticalGap = 10;
            this.group_Chaotic.layout = tLayout;
            for (var i = 0; i < 10; i++) {
                var word = new Word();
                word.width = 89;
                word.height = 96;
                this.group_Chaotic.addChild(word);
            }
        }
        else if (this.levelIndex >= 150) {
            if (this.group_Chaotic.numChildren == 15) {
                return;
            }
            this.group_Chaotic.removeChildren();
            //加布局类。   eui正确设置一次就可以不变了。除非想改变布局才改。
            var tLayout = new eui.TileLayout();
            tLayout.horizontalGap = 20;
            tLayout.verticalGap = 10;
            this.group_Chaotic.layout = tLayout;
            for (var i = 0; i < 15; i++) {
                var word = new Word();
                word.width = 89; //要设置  不然group中布局以子元素中最大的做基础。默认为20
                word.height = 96;
                this.group_Chaotic.addChild(word);
            }
        }
    };
    SceneGame.prototype.randomList = function (list) {
        var arr = [];
        while (list.length > 0) {
            var i = Math.floor(Math.random() * list.length);
            arr.push(list[i]);
            list.splice(i, 1); //删除i位置
        }
        return arr;
    };
    //点击字块发生逻辑  由当前字自己抛出
    SceneGame.prototype.onclick_Word = function (word) {
        //找到一个合适的位置
        var rect = null;
        for (var i = 0; i < this.group_Result.numChildren; i++) {
            var temp = this.group_Result.getChildAt(i); //找到空位置
            if (temp.selectWord == null) {
                rect = temp; //此时赋值后rect代表空的那个答案字块
                break;
            }
        }
        //找到位置后填充
        if (rect != null) {
            rect.SetSelectWord(word); //显示问题字
            //判断是否胜利   点击一次判断一次
            var str = ""; //每点击一次把答案都加上来判断一次。
            for (var i = 0; i < this.group_Result.numChildren; i++) {
                var answer = this.group_Result.getChildAt(i);
                str += answer.GetWordText();
            }
            if (str == LevelDataManager.getInstance().GetLevelData(this.levelIndex).result) {
                console.log("你赢了");
                this.bingoLayer.visible = true;
                this.bingoLayer.bingoGroup.visible = true;
                this.hintBg(false);
                SoundManager.getInstance().trueSoundChanel = SoundManager.getInstance().trueSound.play(0, 1);
                SoundManager.getInstance().trueSoundChanel.volume = 1;
            }
            else if (str.length == this.group_Result.numChildren) {
                console.log("you lose");
                this.bingoLayer.visible = true;
                this.hintBg(false);
                SoundManager.getInstance().erroSoundChanel = SoundManager.getInstance().erroSound.play(0, 1);
                SoundManager.getInstance().erroSoundChanel.volume = 1;
                //答错后
                this.answerWordWrong();
            }
        }
    };
    SceneGame.prototype.answerWordWrong = function () {
        //弹界面    重玩还是继续  
        SceneGame.getInstance().bingoLayer.errGroup.visible = true;
    };
    SceneGame.prototype.hintBg = function (isCan) {
        if (isCan == true) {
            this.bingoLayer.bg.touchEnabled = isCan;
            this.bingoLayer.bg.addEventListener(egret.TouchEvent.TOUCH_TAP, this.bgTouch, this);
        }
        else if (isCan == false) {
            this.bingoLayer.bg.touchEnabled = isCan;
            this.bingoLayer.bg.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.bgTouch, this);
        }
    };
    SceneGame.prototype.bgTouch = function () {
        var _this = this;
        console.log("haha");
        egret.Tween.get(this.bingoLayer.groupAll).to({ scaleX: 1.5, scaleY: 1.5 }, 100).to({ scaleX: 1, scaleY: 1 }, 100)
            .call(function () {
            _this.bingoLayer.visible = false;
            _this.bingoLayer.bingoGroup.visible = false;
            _this.bingoLayer.trueGroup.visible = false;
            _this.bingoLayer.comboGroup.visible = false;
            _this.bingoLayer.errGroup.visible = false;
        });
    };
    SceneGame.prototype.xiaoguo = function () {
        var _this = this;
        egret.Tween.get(this.caiziBtn).to({ scaleX: 1.2, scaleY: 1.2 }, 1000).to({ scaleX: 0.8, scaleY: 0.8 }, 1000).call(function () {
            //call方法中使用()=>{}，知道this指向。不然指向window    还可以call(this.xiaoguo,this)
            _this.xiaoguo();
        });
    };
    SceneGame.prototype.toCaizi = function () {
        if (!wx.navigateToMiniProgram) {
            wx.showModal({ title: "", content: "当前微信版本不支持跳转小程序，请升级", showCancel: false, cancelText: "", cancelColor: "", confirmText: "确定", confirmColor: "", success: function (r) { }, fail: function (r) { }, complete: function (r) { } });
            return;
        }
        var toAppid = LevelDataManager.moreGamesAppIDs[0];
        var info = this.jumpToAppDict[toAppid];
        var toPath = info ? info.path : "";
        var extraData = info ? info.extraData : "";
        var envVersion = info ? info.envVersion : "";
        wx.navigateToMiniProgram({
            appId: toAppid,
            path: toPath,
            extraData: extraData,
            envVersion: envVersion,
            success: function () { },
            fail: function () { },
            complete: function () { }
        });
    };
    SceneGame.prototype.updatePanel = function () {
        this.moreGameCount++;
        if (this.moreGameCount % 8 == 0) {
            this.moreGameCount = 0;
            LevelDataManager.moreGamesIcons.push(LevelDataManager.moreGamesIcons.shift());
            LevelDataManager.moreGamesAppIDs.push(LevelDataManager.moreGamesAppIDs.shift());
        }
        var icon = LevelDataManager.moreGamesIcons[0];
        if (icon) {
            this.caiziBtn.source = R.webPath + "imgs/" + icon;
        }
    };
    SceneGame.prototype.onpaihang = function () {
        SoundManager.getInstance().answerSoundChanel = SoundManager.getInstance().answerSound.play(0, 1);
        SoundManager.getInstance().answerSoundChanel.volume = 1;
        // let openDataContext = wx.getOpenDataContext();
        //处理遮罩，避免开放数据域事件影响主域。
        this.rankingListMask = new egret.Shape();
        this.rankingListMask.graphics.beginFill(0x000000, 1);
        this.rankingListMask.graphics.drawRect(0, 0, this.stage.width, this.stage.height);
        this.rankingListMask.graphics.endFill();
        this.rankingListMask.alpha = 0.5;
        this.rankingListMask.touchEnabled = true;
        console.log("点击排行");
        //开放域开始
        // const bitmapdata = new egret.BitmapData(window["sharedCanvas"]);
        // bitmapdata.$deleteSource = false;
        // const texture = new egret.Texture();
        // texture._setBitmapData(bitmapdata);
        // this.bitmap = new egret.Bitmap(texture);
        // this.bitmap.width = this.stage.stageWidth;//节点的大小  也就是sharedCavas作为bitmapdata的这个bitmap的大小。
        // this.bitmap.height = this.stage.stageHeight;
        this.openGroup.visible = true;
        this.closeBtn.visible = true;
        this.addChild(this.rankingListMask);
        this.addChild(this.openGroup);
        this.addChild(this.bitmap);
        this.addChild(this.closeBtn);
        //隐藏广告
        LevelDataManager.getInstance().getAd().hide();
        console.log("点击了排行榜");
        //   egret.startTick((timeStarmp: number) => {
        //         egret.WebGLUtils.deleteWebGLTexture(bitmapdata.webGLTexture);
        //         bitmapdata.webGLTexture = null;
        //         return false;
        //     }, this);
        //主域向子域发送自定义消息
        this.isdisplay = true;
        platform.openDataContext.postMessage({
            isdisplay: this.isdisplay
        });
    };
    SceneGame.prototype.onLevel = function () {
        SoundManager.getInstance().answerSoundChanel = SoundManager.getInstance().answerSound.play(0, 1);
        SoundManager.getInstance().answerSoundChanel.volume = 1;
        var page = this.bingoLayer.getNumCurIndex(LevelDataManager.getInstance().GetCurIndex());
        this.levelScene.pageIndex = page;
        this.levelScene.updataName();
        this.levelScene.updateLabel(this.levelScene.groupLevel, this.levelScene.pageIndex);
        this.levelScene.showLevelIcon(LevelDataManager.getInstance().GetCurIndex());
        this.levelScene.visible = true;
    };
    SceneGame.prototype.showResult = function (event) {
        LevelDataManager.onshowNum = 2;
        egret.Tween.get(event.currentTarget).to({ scaleX: 1.2, scaleY: 1.2 }, 100).
            to({ scaleX: 1, scaleY: 1 }, 100);
        if (LevelDataManager.isshipin) {
            console.log("视频开启LevelDataManager.isshipin  " + LevelDataManager.getInstance().GetShare());
            platform.showVideoAD();
        }
        else if (!LevelDataManager.isshipin) {
            console.log("分享开启LevelDataManager.isshipin" + LevelDataManager.getInstance().GetShare());
            platform.shareMyAppMessage(); //无差别分享
        }
    };
    return SceneGame;
}(eui.Component));
__reflect(SceneGame.prototype, "SceneGame", ["eui.UIComponent", "egret.DisplayObject"]);
window["SceneGame"] = SceneGame;
