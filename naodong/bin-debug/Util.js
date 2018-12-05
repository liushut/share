var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Util = (function () {
    function Util() {
    }
    Object.defineProperty(Util, "grayFilters", {
        get: function () {
            return Util._grayFilters = Util._grayFilters || [new egret.ColorMatrixFilter([
                    0.3, 0.3, 0.3, 0, 0,
                    0.3, 0.3, 0.3, 0, 0,
                    0.3, 0.3, 0.3, 0, 0,
                    0, 0, 0, 1, 0
                ])];
        },
        enumerable: true,
        configurable: true
    });
    /**从数组里随机挑一个元素返回 */
    Util.randomChoose = function (arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    };
    /**返回用于确定某个用户的简单的唯一UID字串 */
    Util.getShareUID = function () {
        var uid = (wx.getStorageSync("shareUID") || (new Date().getTime() + "" + Math.random()));
        wx.setStorageSync("shareUID", uid);
        return uid;
    };
    /**拉起分享
     * @param withShareTicket 是否启用群分享的shareTicket
     * @param queryObj 传递给分享链接的参数，null则不传递任何参数，否则默认会传递st、rn、uid参数（分享开始时间，随机值，分享者的临时UID）
     */
    Util.share = function (withShareTicket, queryObj) {
        if (queryObj === void 0) { queryObj = {}; }
        wx.updateShareMenu({
            withShareTicket: withShareTicket,
            success: function (res) {
                console.log("wx.updateShareMenu success", res);
                var st = new Date().getTime();
                var rn = Math.random();
                var query = "st=" + st + "&rn=" + rn + "&uid=" + Util.getShareUID();
                //将分享标记存到本地，等下次再开启游戏的时候可用于检查分享奖励能否获得
                if (withShareTicket) {
                    //分享数+1
                    // Util.setShareQueryNum(Util.getShareQueryNum() + 1);
                }
                if (queryObj) {
                    for (var p in queryObj) {
                        query += "&" + p + "=" + queryObj[p];
                    }
                }
                // console.log("Util.share",queryObj);
                //分享完成回调提交正式版以后不能用的，所以不能依赖
                var sinfo = LevelDataManager.getShareToInfo(query);
                console.log("pull share, info", sinfo);
                wx.shareAppMessage({
                    title: sinfo.title,
                    imageUrl: sinfo.imgURL,
                    query: ""
                });
            },
            fail: function (res) { console.log("wx.updateShareMenu fail", res); },
            complete: function (res) { console.log("wx.updateShareMenu complete", res); }
        });
    };
    Util.getSharedQuerys = function () {
        return (wx.getStorageSync("sharedQuerys") || []);
    };
    Util.setSharedQuerys = function (querys) {
        wx.setStorageSync("sharedQuerys", querys);
    };
    Util.addSharedQuery = function (query, prescene_note, startTime, endTime) {
        var sharedQuerys = Util.getSharedQuerys();
        sharedQuerys.push({ query: query, prescene_note: prescene_note, startTime: startTime, endTime: endTime });
        Util.setSharedQuerys(sharedQuerys);
    };
    Util.req = function (url, data, back, thisobj, isJson) {
        var _this = this;
        if (isJson === void 0) { isJson = true; }
        var req = new egret.HttpRequest();
        req.open(url);
        var onOK = function () {
            doit();
        };
        var onErr = function () {
            doit();
        };
        var doit = function () {
            req.removeEventListener(egret.Event.COMPLETE, onOK, _this);
            req.removeEventListener(egret.IOErrorEvent.IO_ERROR, onErr, _this);
            back.call(thisobj, isJson ? JSON.parse(req.response) : req.response);
        };
        req.addEventListener(egret.Event.COMPLETE, onOK, this);
        req.addEventListener(egret.IOErrorEvent.IO_ERROR, onErr, this);
        data = data || {};
        data.localUID = Util.localUID;
        req.send(data);
    };
    Util.createRewardVideoAD = function (videoUnitID) {
        if (!wx["createRewardedVideoAd"]) {
            console.log("not support reward video");
            return;
        }
        var vid = Util.rewardVideoAD = wx["createRewardedVideoAd"]({ adUnitId: videoUnitID });
        vid.onError(function (err) {
            console.log("videoAD err", err);
            Util.onRewardVideoErr.call(Util.rewardVideo_thisObj);
        });
        vid.onLoad(function () {
            console.log('videoAD loaded');
        });
        vid.onClose(function (res) {
            // 用户点击了【关闭广告】按钮
            console.log("videoAD end", res);
            if (res && res.isEnded || res === undefined) {
                // 正常播放结束，可以下发游戏奖励
                Util.onRewardVideoEnd.call(Util.rewardVideo_thisObj);
            }
            else {
                // 播放中途退出，不下发游戏奖励
            }
        });
    };
    /**
     * 播放激励视频
     * @param onEnd 完整播放完成处理函数
     * @param onErr 播放失败处理函数
     * @param thisObj 回调函数的this的指向对象
     * */
    Util.showRewardVideoAD = function (onEnd, onErr, thisObj) {
        Util.onRewardVideoEnd = onEnd;
        Util.onRewardVideoErr = onErr;
        Util.rewardVideo_thisObj = thisObj;
        if (Util.rewardVideoAD) {
            Util.rewardVideoAD.show().then().catch(function (err) {
                console.log("rewardVideoAD failed,", err);
                Util.onRewardVideoErr.call(Util.rewardVideo_thisObj);
            });
        }
        else {
            Util.onRewardVideoErr.call(Util.rewardVideo_thisObj);
        }
    };
    /**由服务器给的一个随机uid标识 */
    Util.localUID = "";
    return Util;
}());
__reflect(Util.prototype, "Util");
