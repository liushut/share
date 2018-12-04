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
var AnswerWord = (function (_super) {
    __extends(AnswerWord, _super);
    function AnswerWord() {
        var _this = _super.call(this) || this;
        _this.selectWord = null; //用一个变量来保存点击到的字
        return _this;
        // this.skinName = "resource/eui_skins/AnswerWord.exml";
    }
    AnswerWord.prototype.onclick_tap = function () {
        SoundManager.getInstance().answerSoundChanel = SoundManager.getInstance().answerSound.play(0, 1);
        SoundManager.getInstance().answerSoundChanel.volume = 1;
        //恢复点进来的字
        if (this.selectWord != null) {
            this.selectWord.visible = true;
            this.selectWord = null;
            this.SetWordText(""); //将自身的字清除
        }
        console.log("答案字被点击");
    };
    AnswerWord.prototype.SetSelectWord = function (word) {
        if (word != null) {
            word.visible = false;
            this.SetWordText(word.GetWordText()); //这里实现答案字显示问题字.
            this.selectWord = word; //将问题字存储在答案字，一一对应，方便后面恢复显示。
        }
        else {
            this.SetWordText("");
            this.selectWord = null;
        }
    };
    AnswerWord.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    AnswerWord.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    return AnswerWord;
}(Word));
__reflect(AnswerWord.prototype, "AnswerWord");
window["AnswerWord"] = AnswerWord;
