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
var LevelScene = (function (_super) {
    __extends(LevelScene, _super);
    function LevelScene() {
        var _this = _super.call(this) || this;
        //称呼数组
        _this.chenghuArray = ["1_png", "2_png", "3_png", "4_png", "5_png", "6_png", "7_png", "8_png", "9_png", "10_png"];
        _this.pageIndex = 1; //当前关卡页数。  1 - 10
        return _this;
        // this.skinName =  "resource/eui_skins/LevelScene.exml"
    }
    //皮肤部件第一次附加时对其执行一些初始化操作，例如添加事件监听，赋值缓存的属性值等。
    LevelScene.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    //EUI元素构建好调用。创建子对象后执行任何最终处理。
    LevelScene.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.initMap();
        this.btn_next.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onNext, this);
        this.btn_before.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBefore, this);
        this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClose, this);
    };
    LevelScene.getInstance = function () {
        if (LevelScene.levelScene == null) {
            LevelScene.levelScene = new LevelScene();
        }
        return LevelScene.levelScene;
    };
    LevelScene.prototype.initMap = function () {
        //初始化group
        this.groupLevel.removeChildren();
        for (var i = 0; i < 9; i++) {
            var icon = new LevelIcon();
            icon.Level = i + 1;
            icon.width = 175;
            icon.height = 185;
            this.groupLevel.addChild(icon);
        }
        // // //将当前关卡显示正确
        this.pageIndex = SceneGame.getInstance().bingoLayer.getNumCurIndex(LevelDataManager.getInstance().GetMileStone());
        this.updateLabel(this.groupLevel, this.pageIndex); //更新这一页的icon的label
        this.updataName();
        this.showLevelIcon(LevelDataManager.getInstance().GetCurIndex()); //显示到最远的关卡
    };
    LevelScene.prototype.showLevelIconTween = function (index) {
        for (var i = 0; i < this.groupLevel.numChildren; i++) {
            var icon = this.groupLevel.getChildAt(i);
            var num = icon.Level; //开始是1 
            if (num < index) {
                icon.isCanShow(true);
            }
            else {
                icon.isCanShow(false);
            }
        }
    };
    //当前关卡的前面都显示
    LevelScene.prototype.showLevelIcon = function (index) {
        if (this.pageIndex == 1) {
            console.log("第一关");
            this.btn_before.visible = false;
        }
        else if (this.pageIndex == 10) {
            console.log("最后一关");
            this.btn_next.visible = false;
        }
        for (var i = 0; i < this.groupLevel.numChildren; i++) {
            var icon = this.groupLevel.getChildAt(i);
            var num = icon.Level; //开始是1 
            if (num <= index) {
                icon.isCanShow(true);
            }
            else {
                icon.isCanShow(false);
            }
        }
    };
    //点击关闭按钮缩放
    LevelScene.prototype.onClose = function () {
        var _this = this;
        egret.Tween.get(this).to({ scaleX: 1.2, scaleY: 1.2 }, 100).to({ scaleX: 1, scaleY: 1 }, 100)
            .call(function () { _this.visible = false; });
    };
    //前一个关卡
    LevelScene.prototype.onBefore = function () {
        SoundManager.getInstance().answerSound.play(0, 1);
        this.pageIndex--;
        this.updateLabel(this.groupLevel, this.pageIndex); //更新这一页的icon的label
        this.updataName();
        this.showLevelIcon(LevelDataManager.getInstance().GetCurIndex()); //小于最远的就更新
        if (this.pageIndex == 1) {
            console.log("第一关");
            this.btn_before.visible = false;
            return;
        }
        else if (this.pageIndex > 1) {
            this.btn_next.visible = true;
        }
    };
    //看下一个关卡
    LevelScene.prototype.onNext = function () {
        SoundManager.getInstance().answerSound.play(0, 1);
        this.pageIndex++;
        this.updateLabel(this.groupLevel, this.pageIndex); //更新关卡
        this.updataName();
        this.showLevelIcon(LevelDataManager.getInstance().GetCurIndex()); //显示关卡和头像
        if (this.pageIndex == 10) {
            console.log("最后一关");
            this.btn_next.visible = false;
        }
        else if (this.pageIndex < 10) {
            this.btn_before.visible = true;
        }
    };
    LevelScene.prototype.updataName = function () {
        if (this.pageIndex == 1) {
            this.ImgName.source = this.chenghuArray[0];
            this.ImgName.width = 86;
        }
        else if (this.pageIndex == 2) {
            this.ImgName.source = this.chenghuArray[1];
            this.ImgName.width = 86;
        }
        else if (this.pageIndex == 3) {
            this.ImgName.source = this.chenghuArray[2];
            this.ImgName.width = 86;
        }
        else if (this.pageIndex == 4) {
            this.ImgName.source = this.chenghuArray[3];
            this.ImgName.width = 86;
        }
        else if (this.pageIndex == 5) {
            this.ImgName.source = this.chenghuArray[4];
            this.ImgName.width = 86;
        }
        else if (this.pageIndex == 6) {
            this.ImgName.source = this.chenghuArray[5];
            this.ImgName.width = 86;
        }
        else if (this.pageIndex == 7) {
            this.ImgName.source = this.chenghuArray[6];
            this.ImgName.width = 86;
        }
        else if (this.pageIndex == 8) {
            this.ImgName.source = this.chenghuArray[7];
            this.ImgName.width = 147;
        }
        else if (this.pageIndex == 9) {
            this.ImgName.source = this.chenghuArray[8];
            this.ImgName.width = 147;
        }
        else if (this.pageIndex == 10) {
            this.ImgName.source = this.chenghuArray[9];
            this.ImgName.width = 147;
        }
    };
    //替换label显示。
    LevelScene.prototype.updateLabel = function (group, num) {
        for (var i = 0; i < group.numChildren; i++) {
            var x = group.getChildAt(i);
            if (num == 1) {
                x.Level = i + 1;
            }
            else {
                x.Level = (num - 1) * 9 + i + 1;
            }
        }
    };
    return LevelScene;
}(eui.Component));
__reflect(LevelScene.prototype, "LevelScene", ["eui.UIComponent", "egret.DisplayObject"]);
window["LevelScene"] = LevelScene;
