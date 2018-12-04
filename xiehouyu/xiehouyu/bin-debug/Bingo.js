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
var Bingo = (function (_super) {
    __extends(Bingo, _super);
    function Bingo() {
        return _super.call(this) || this;
    }
    Bingo.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    Bingo.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.btn_next.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onNext, this);
        this.btn_share.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onShare, this);
        this.lingquBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onLingqu, this);
        this.Btntiaozhan.addEventListener(egret.TouchEvent.TOUCH_TAP, this.tiaozhan, this);
        this.chachaBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onchacha, this);
        this.tixianBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTixian, this);
        //重玩和继续的按钮方法
        this.chongwanBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onreStart, this);
        this.jixuBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onResume, this);
        //3o关红包
        this.hongbaochaBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.guanhongbao, this);
        //主界面红包
        this.chaHongbao.addEventListener(egret.TouchEvent.TOUCH_TAP, this.guanZhuHongbao, this);
        this.btnTixian.addEventListener(egret.TouchEvent.TOUCH_TAP, this.tixian, this);
    };
    Bingo.prototype.guanhongbao = function () {
        this.visible = false;
        this.hongbaoGroup.visible = false;
        this.lingquBtn.currentState = "up";
        this.lingquBtn.touchEnabled = true;
    };
    Bingo.prototype.tixian = function () {
        LevelDataManager.onshowNum = 1;
        this.showYUELabel.text = LevelDataManager.curMoney.toString();
        LevelDataManager.shipinResult = 1;
        //开关
        if (LevelDataManager.videoOrshare) {
            platform.restartVideo();
        }
        else {
            platform.restShare();
        }
    };
    Bingo.prototype.guanZhuHongbao = function () {
        this.visible = false;
        this.showhongbaoGroup.visible = false;
        this.btnTixian.currentState = "up";
        this.btnTixian.touchEnabled = true;
    };
    Bingo.prototype.onLingqu = function () {
        console.log("lingqu");
        LevelDataManager.beforeUnlockMoneyNum = LevelDataManager.unlockMoneyNum;
        wx.setStorageSync("beforeUnlockMoneyNum", LevelDataManager.beforeUnlockMoneyNum);
        LevelDataManager.onshowNum = 1;
        LevelDataManager.shipinResult = 2;
        if (LevelDataManager.unlockMoneyNum == 1) {
            if (LevelDataManager.curMoney < 20) {
                LevelDataManager.curMoneyNum++;
                LevelDataManager.unlockMoneyNum++;
                console.log("LevelDataManager.curMoney", LevelDataManager.curMoney);
                console.log("LevelDataManager.showMoney", LevelDataManager.showMoney);
                LevelDataManager.curMoney += LevelDataManager.showMoney;
                console.log("相加后LevelDataManager.curMoney", LevelDataManager.curMoney);
                SceneGame.getInstance().bingoLayer.lingquBtn.currentState = "disabled";
                SceneGame.getInstance().bingoLayer.lingquBtn.touchEnabled = false;
                SceneGame.getInstance().bingoLayer.yueLabel.text = LevelDataManager.curMoney.toString();
                LevelDataManager.SaveHongbaoNum();
            }
            else {
                console.log("onHongBaoTixian() 金额超出！！");
            }
        }
        else {
            if (LevelDataManager.videoOrshare) {
                platform.restartVideo();
            }
            else {
                platform.restShare();
            }
        }
    };
    Bingo.prototype.onTixian = function () {
        if (LevelDataManager.curMoney <= 20) {
            this.tanchuanImg.visible = true;
            egret.Tween.get(this.tanchuanImg).to({ visible: 0 }, 2000);
        }
        else {
            console.log("onTixian()出错");
        }
    };
    Bingo.prototype.onchacha = function (e) {
        this.visible = false;
        this.comboGroup.visible = false;
        SceneGame.getInstance().levelScene.visible = false;
        SceneGame.getInstance().InitLevel(LevelDataManager.getInstance().curIcon);
    };
    Bingo.prototype.tiaozhan = function () {
        if (LevelDataManager.isJiesuoshipin == 1) {
            console.log("挑战视频开关  开启");
            platform.tiaozhaoVideo();
        }
        else {
            LevelDataManager.onshowNum = 4;
            platform.randomShare();
            console.log("挑战视频开关  关闭");
            wx.shareAppMessage({
                title: "小学生都能答出的脑筋急转弯，看看你能答对多少？",
                imageUrl: "resource/assets/common/title11.png"
            });
        }
    };
    Bingo.prototype.onNext = function () {
        console.log("点击下一题");
        SoundManager.getInstance().answerSoundChanel = SoundManager.getInstance().answerSound.play(0, 1);
        SoundManager.getInstance().answerSoundChanel.volume = 1;
        egret.Tween.get(this.btn_next).to({ scaleX: 1.2, scaleY: 1.2 }, 100).to({ scaleX: 1, scaleY: 1 }, 100);
        this.visible = false;
        this.bingoGroup.visible = false;
        this.trueGroup.visible = false;
        LevelDataManager.getInstance().curIcon++;
        if (LevelDataManager.getInstance().curIcon > LevelDataManager.getInstance().GetMileStone()) {
            LevelDataManager.isBack = false;
            var level = LevelDataManager.getInstance().curIcon;
            LevelDataManager.getInstance().SetMileStone(level); //存储  	{key:"myscore",value:level.toString()}
            wx.setUserCloudStorage({
                KVDataList: [{ key: "score", value: level.toString() }]
            });
        }
        this.imageUpdate();
    };
    Bingo.prototype.onShare = function () {
        console.log("分享");
        egret.Tween.get(this.btn_share).to({ scaleX: 1.2, scaleY: 1.2 }, 100).to({ scaleX: 1, scaleY: 1 }, 100);
        wx.shareAppMessage({
            title: "小学生都能答出的脑筋急转弯，看看你能答对多少？",
            imageUrl: "resource/assets/common/title11.png"
        });
    };
    Bingo.prototype.imageUpdate = function () {
        var _this = this;
        //记录的关卡
        if (LevelDataManager.isBack) {
            console.log("在前面关卡");
            SceneGame.getInstance().InitLevel(LevelDataManager.getInstance().curIcon);
        }
        else {
            var level = LevelDataManager.getInstance().GetMileStone();
            this.changeImg(level);
            if (level > 1 && level % 10 == 1) {
                var curIndex = LevelDataManager.getInstance().GetCurIndex();
                curIndex++; //每十个题目 增加一关。 1  11 2  21 3  31  4  41  5   81 9  91 10
                var replaceIndex = curIndex; //11 第2关  子元素 1
                if (curIndex > LevelDataManager.getInstance().GetCurIndex()) {
                    LevelDataManager.getInstance().SetCurIndex(curIndex); //当前关卡数存储起来
                }
                wx.vibrateLong({
                    success: function () {
                        console.log("抖动成功");
                    }
                });
                //显示当前关所在的页面
                var page = this.getNumCurIndex(curIndex);
                SceneGame.getInstance().levelScene.pageIndex = page;
                SceneGame.getInstance().levelScene.updateLabel(SceneGame.getInstance().levelScene.groupLevel, SceneGame.getInstance().levelScene.pageIndex);
                SceneGame.getInstance().levelScene.updataName();
                SceneGame.getInstance().levelScene.showLevelIconTween(curIndex);
                //关卡界面出来  就是现在的当前页面
                SceneGame.getInstance().levelScene.visible = true;
                var index = (replaceIndex - 1) % 9; //数组元素  所以要-1
                var element = SceneGame.getInstance().levelScene.groupLevel.getChildAt(index); //子元素  0 8   
                var img = element.imgLock;
                var label_1 = element.bitlabel_levelIndex;
                //解锁关卡的标签动画   关卡界面消失后弹出发起挑战界面
                egret.Tween.get(img).to({ alpha: 0 }, 1000).call(function () {
                    egret.Tween.get(label_1).to({ alpha: 1 }, 1000).call(function () {
                    });
                }).wait(1000).call(function () {
                    //界面出来后进入发起挑战界面去下一题
                    SceneGame.getInstance().bingoLayer.visible = true;
                    SceneGame.getInstance().bingoLayer.comboGroup.visible = true;
                    _this.guanLabel.text = "当前解锁第" + (LevelDataManager.getInstance().GetCurIndex()) + "关"; // 2
                    SoundManager.getInstance().trueSoundChanel = SoundManager.getInstance().trueSound.play(0, 1);
                    SoundManager.getInstance().trueSoundChanel.volume = 1;
                    console.log("发起挑战");
                });
            }
            else if (level > 1) {
                console.log("直接去下一关");
                SceneGame.getInstance().InitLevel(LevelDataManager.getInstance().curIcon);
            }
        }
    };
    Bingo.prototype.getNumCurIndex = function (index) {
        var pageIndex = Math.ceil(index / 9);
        console.log("当前页面" + pageIndex);
        return pageIndex;
    };
    Bingo.prototype.changeImg = function (index) {
        if (index >= 1 && index <= 90) {
            SceneGame.getInstance().levelScene.ImgName.source = LevelScene.getInstance().chenghuArray[0];
            SceneGame.getInstance().levelScene.ImgName.width = 86;
        }
        else if (index >= 91 && index <= 180) {
            SceneGame.getInstance().levelScene.ImgName.source = LevelScene.getInstance().chenghuArray[1];
            SceneGame.getInstance().levelScene.ImgName.width = 86;
        }
        else if (index >= 181 && index <= 270) {
            SceneGame.getInstance().levelScene.ImgName.source = LevelScene.getInstance().chenghuArray[2];
            SceneGame.getInstance().levelScene.ImgName.width = 86;
        }
        else if (index >= 271 && index <= 360) {
            SceneGame.getInstance().levelScene.ImgName.source = LevelScene.getInstance().chenghuArray[3];
            SceneGame.getInstance().levelScene.ImgName.width = 86;
        }
        else if (index >= 361 && index <= 450) {
            SceneGame.getInstance().levelScene.ImgName.source = LevelScene.getInstance().chenghuArray[4];
            SceneGame.getInstance().levelScene.ImgName.width = 86;
        }
        else if (index >= 451 && index <= 540) {
            SceneGame.getInstance().levelScene.ImgName.source = LevelScene.getInstance().chenghuArray[5];
            SceneGame.getInstance().levelScene.ImgName.width = 86;
        }
        else if (index >= 541 && index <= 630) {
            SceneGame.getInstance().levelScene.ImgName.source = LevelScene.getInstance().chenghuArray[6];
            SceneGame.getInstance().levelScene.ImgName.width = 86;
        }
        else if (index >= 631 && index <= 720) {
            SceneGame.getInstance().levelScene.ImgName.source = LevelScene.getInstance().chenghuArray[7];
            SceneGame.getInstance().levelScene.ImgName.width = 147;
        }
        else if (index >= 721 && index <= 810) {
            SceneGame.getInstance().levelScene.ImgName.source = LevelScene.getInstance().chenghuArray[8];
            SceneGame.getInstance().levelScene.ImgName.width = 147;
        }
        else if (index >= 811 && index <= 900) {
            SceneGame.getInstance().levelScene.ImgName.source = LevelScene.getInstance().chenghuArray[9];
            SceneGame.getInstance().levelScene.ImgName.width = 147;
            if (index == 900) {
                wx.showModal({
                    title: "提示",
                    content: "已经到最后啦，大神~~",
                    showCancel: false,
                });
            }
        }
    };
    //继续
    Bingo.prototype.onResume = function () {
        LevelDataManager.onshowNum = 1;
        LevelDataManager.shipinResult = 0;
        if (LevelDataManager.isshipin) {
            platform.restartVideo();
        }
        else {
            platform.restShare();
        }
    };
    //回到 161 重新开始
    Bingo.prototype.onreStart = function () {
        var curIcon = LevelDataManager.getInstance().curIcon;
        var remaining = curIcon % 10; //多余的关数   165   5
        curIcon -= remaining;
        LevelDataManager.getInstance().curIcon = curIcon + 1;
        SceneGame.getInstance().bingoLayer.visible = false;
        SceneGame.getInstance().bingoLayer.errGroup.visible = false;
        SceneGame.getInstance().InitLevel(LevelDataManager.getInstance().curIcon);
        console.log("答错后的关数curIcon" + LevelDataManager.getInstance().curIcon);
    };
    return Bingo;
}(eui.Component));
__reflect(Bingo.prototype, "Bingo", ["eui.UIComponent", "egret.DisplayObject"]);
window["Bingo"] = Bingo;
