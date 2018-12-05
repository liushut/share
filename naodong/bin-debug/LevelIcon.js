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
var LevelIcon = (function (_super) {
    __extends(LevelIcon, _super);
    function LevelIcon() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/eui_skins/LevelIcon.exml"; //这里如果不指定就会出现构建错误。
        _this.imgGuankadi.touchEnabled = true;
        _this.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.toGame, _this);
        return _this;
    }
    LevelIcon.prototype.toGame = function () {
        LevelDataManager.isBack = true;
        LevelDataManager.curMoneyNum = 1; //改变钱包次数
        egret.Tween.get(this.imgGuankadi).to({ scaleX: 0.8, scaleY: 0.8 }, 100).to({ scaleX: 1, scaleY: 1 });
        var index = parseInt(this.bitlabel_levelIndex.text);
        if (index <= LevelDataManager.getInstance().GetCurIndex()) {
            index--;
            var icon = index * 10 + 1;
            LevelDataManager.getInstance().curIcon = icon;
            SceneGame.getInstance().InitLevel(icon); //进入对应关卡游戏
            //界面消失
            SceneGame.getInstance().levelScene.visible = false;
        }
    };
    Object.defineProperty(LevelIcon.prototype, "Level", {
        get: function () {
            return parseInt(this.bitlabel_levelIndex.text);
        },
        set: function (value) {
            this.bitlabel_levelIndex.text = value.toString();
        },
        enumerable: true,
        configurable: true
    });
    //小于这个关卡全部显示
    LevelIcon.prototype.isCanShow = function (status) {
        if (status == false) {
            this.imgLock.alpha = 1; //锁
            this.bitlabel_levelIndex.alpha = 0;
            this.touchEnabled = false;
        }
        else if (status == true) {
            this.imgLock.alpha = 0; //锁
            this.bitlabel_levelIndex.alpha = 1;
            this.touchEnabled = true;
        }
    };
    return LevelIcon;
}(eui.Component));
__reflect(LevelIcon.prototype, "LevelIcon", ["eui.UIComponent", "egret.DisplayObject"]);
window["LevelIcon"] = LevelIcon;
