var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
// TypeScript file
var PlayerData = (function () {
    function PlayerData() {
    }
    PlayerData.prototype.getMD = function () {
        var milestone = egret.localStorage.getItem("MD");
        if (milestone == "" || milestone == null) {
            milestone = "1";
        }
        return parseInt(milestone);
    };
    PlayerData.prototype.setMD = function (MD) {
        egret.localStorage.setItem("MD", MD.toString());
    };
    return PlayerData;
}());
__reflect(PlayerData.prototype, "PlayerData");
