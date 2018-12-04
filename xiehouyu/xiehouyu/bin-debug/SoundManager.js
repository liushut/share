var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var SoundManager = (function () {
    function SoundManager() {
        this.init();
    }
    SoundManager.getInstance = function () {
        if (SoundManager.soundManager == null) {
            SoundManager.soundManager = new SoundManager();
        }
        return SoundManager.soundManager;
    };
    SoundManager.prototype.init = function () {
        this.trueSound = RES.getRes("trueSound_mp3");
        this.erroSound = RES.getRes("erroSound_mp3");
        this.wordSound = RES.getRes("word_mp3");
        this.windowSound = RES.getRes("window_wav");
        this.answerSound = RES.getRes("answer1_mp3");
    };
    return SoundManager;
}());
__reflect(SoundManager.prototype, "SoundManager");
window["SoundManager"] = SoundManager;
