var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var LevelDataItem = (function () {
    function LevelDataItem() {
    }
    return LevelDataItem;
}());
__reflect(LevelDataItem.prototype, "LevelDataItem");
var LevelDataManager = (function () {
    function LevelDataManager() {
        this.curIcon = 1;
        this.curIndex = 1; //当前关卡数
        this.isShare = false;
        //关卡数据的数据组
        this.levelDataItemList = [];
        //使用RES读取和构建JSON数据。Json数据可以直接解析到目标结构
        this.levelDataItemList = RES.getRes("test_json");
        LevelDataManager.curMoneyNum = parseInt((wx.getStorageSync("curMoneyNum") || "1"));
        LevelDataManager.unlockMoneyNum = parseInt((wx.getStorageSync("unlockMoneyNum") || "1"));
        LevelDataManager.curMoney = parseInt((wx.getStorageSync("curMoney") || "0"));
        LevelDataManager.shipinResult = 0;
        LevelDataManager.beforeUnlockMoneyNum = parseInt((wx.getStorageSync("beforeUnlockMoneyNum") || "1"));
    }
    ; //当前题目数
    LevelDataManager.getInstance = function () {
        if (LevelDataManager.levelDataManager == null) {
            LevelDataManager.levelDataManager = new LevelDataManager();
        }
        return LevelDataManager.levelDataManager;
    };
    LevelDataManager.SaveHongbaoNum = function () {
        wx.setStorageSync("curMoneyNum", LevelDataManager.curMoneyNum);
        wx.setStorageSync("unlockMoneyNum", LevelDataManager.unlockMoneyNum);
        wx.setStorageSync("curMoney", LevelDataManager.curMoney);
    };
    LevelDataManager.prototype.GetShare = function () {
        var milestone = egret.localStorage.getItem("SHARE");
        if (milestone == "" || milestone == null) {
            milestone = "0"; //默认0关闭  1 为开启
        }
        return parseInt(milestone);
    };
    LevelDataManager.prototype.SetShare = function (share) {
        egret.localStorage.setItem("SHARE", share.toString());
    };
    //通过关卡号获取数据
    LevelDataManager.prototype.GetLevelData = function (level) {
        if (level < 0) {
            console.log("关卡<0");
            return;
        }
        if (level >= this.levelDataItemList.length) {
            level = this.levelDataItemList.length - 1;
        }
        return this.levelDataItemList[level];
    };
    //获取当前游戏的最远进度
    LevelDataManager.prototype.GetMileStone = function () {
        var milestone = egret.localStorage.getItem("MAX_MILESTONE");
        if (milestone == "" || milestone == null) {
            milestone = "1";
        }
        return parseInt(milestone);
    };
    //获取当前时间  小时
    LevelDataManager.prototype.GetCurTime = function () {
        var time = egret.localStorage.getItem("CURTIME");
        if (time == "" || time == null) {
            time = "0";
        }
        return parseInt(time);
    };
    //存储当前时间
    LevelDataManager.prototype.SetCurTime = function (time) {
        egret.localStorage.setItem("CURTIME", time.toString());
    };
    //设置当前游戏最远进度
    LevelDataManager.prototype.SetMileStone = function (index) {
        egret.localStorage.setItem("MAX_MILESTONE", index.toString());
    };
    //拉取banner广告
    LevelDataManager.prototype.getAd = function () {
        if (LevelDataManager.oldADs) {
            LevelDataManager.oldADs.hide();
            LevelDataManager.oldADs.destroy();
            console.log("销毁");
        }
        var newad;
        var winSize = wx.getSystemInfoSync();
        console.log(winSize);
        var pixelRatio = winSize.pixelRatio;
        var screenWidth = winSize.screenWidth * pixelRatio;
        var screenHeight = winSize.screenHeight * pixelRatio;
        var bannerHeight = 100;
        var bannerWidth = 320;
        var ad;
        var bi = screenHeight / screenWidth;
        var adleft = 35;
        if (bi == (1334 / 750)) {
            bannerWidth = 300;
            bannerHeight = 90;
            adleft = 45;
            console.log("111111");
        }
        else if (bi == (2208 / 1242)) {
            bannerWidth = 325;
            bannerHeight = 106;
            adleft = 50;
            console.log("2222222");
        }
        else if (bi == (2436 / 1125)) {
            bannerWidth = 500;
            bannerHeight = 142;
            adleft = 0;
            console.log("33333333");
        }
        else if (bi < (2208 / 1242)) {
            bannerWidth = 300;
            bannerHeight = 100;
            adleft = 40;
            console.log("55555");
        }
        else if (bi > (2436 / 1125)) {
            bannerWidth = 300;
            bannerHeight = 100;
            adleft = 30;
            console.log("6666");
        }
        newad = wx.createBannerAd({
            adUnitId: "adunit-a57340565a6e2881",
            style: {
                left: adleft,
                top: winSize.screenHeight - bannerHeight,
                width: bannerWidth
            }
        });
        console.log(winSize.screenWidth + "winSize.screenWidth");
        console.log(winSize.screenHeight + "winSize.screenHeight");
        newad.show();
        newad.onError(function (err) {
            console.log("错误信息", err.errMsg, err.errCode);
        });
        LevelDataManager.oldADs = newad;
        return LevelDataManager.oldADs;
    };
    LevelDataManager.prototype.SetCurIndex = function (index) {
        egret.localStorage.setItem("CurIndex", index.toString());
    };
    LevelDataManager.prototype.GetCurIndex = function () {
        var index = egret.localStorage.getItem("CurIndex");
        if (index == "" || index == null) {
            index = "1";
        }
        return parseInt(index);
    };
    LevelDataManager.readShareCodeRes = function (res) {
        LevelDataManager.shareTitles = res ? res.sTitles : [];
        LevelDataManager.shareImgs = res ? res.sImgs : [];
        LevelDataManager.enableHongBao = res ? res.hb : false;
        LevelDataManager.isshipin = res ? res.cv : false;
        LevelDataManager.videoOrshare = res ? res.hbcv : false;
        LevelDataManager.moreGamesIcons = res ? res.mgics || [] : [];
        LevelDataManager.moreGamesAppIDs = res ? res.mgids || [] : [];
        LevelDataManager.moreGamesAppIDs.length = LevelDataManager.moreGamesIcons.length;
        LevelDataManager.isJiesuoshipin = res ? res.ulevelNum : 3;
        console.log("res", res);
    };
    /**创建一个分享信息对象，用于拉起分享 */
    LevelDataManager.getShareToInfo = function (baseQuery) {
        var index = Math.floor(Math.random() * LevelDataManager.shareImgs.length);
        var title = LevelDataManager.shareTitles[index];
        var imgName = LevelDataManager.shareImgs[index];
        var imgURL = R.webPath + "imgs/" + imgName;
        //往微信分享参数里加入一个sImg，表示本次分享用的是第几张分享图
        var query = (baseQuery && baseQuery.length > 0 ? baseQuery + "&" : "") + ("sImg=" + imgName);
        var info = { title: title, imgURL: imgURL };
        return info;
    };
    LevelDataManager.shareNum = 1; //分享次数
    LevelDataManager.tempIndex = 0; //当前页面
    LevelDataManager.isLogin = true;
    LevelDataManager.comboTen = 1;
    /**是否返回前面的关数了 */
    LevelDataManager.isBack = false;
    /**解锁开关 其余0false分享，1true视频*/
    LevelDataManager.isJiesuoshipin = 3;
    /**红包的视频开关,true视频,false分享*/
    LevelDataManager.videoOrshare = false;
    /**1红包提现 2显示答案 3红点*/
    LevelDataManager.onshowNum = 0;
    /**分享时间是否在2s内  是则不显示答案*/
    LevelDataManager.isShareTime = false;
    /**红包次数 */
    LevelDataManager.curMoneyNum = 1;
    /**已经解锁红包次数 */
    LevelDataManager.unlockMoneyNum = 1;
    /**每个红包的数值 */
    LevelDataManager.showMoney = 0;
    /**红包余额 */
    LevelDataManager.curMoney = 0;
    /**随机分享文案 */
    LevelDataManager.shareTitles = [];
    /**随机分享图片 */
    LevelDataManager.shareImgs = [];
    /**看视频结果 */
    LevelDataManager.shipinResult = 0;
    /**视频开关 */
    LevelDataManager.isshipin = false;
    /**是否打开红包功能 */
    LevelDataManager.enableHongBao = false;
    /**更多游戏按钮的图标配置 */
    LevelDataManager.moreGamesIcons = [];
    /**更多游戏按钮的跳转appid配置 */
    LevelDataManager.moreGamesAppIDs = [];
    /**
     * 没有点击领取按钮之前的红包次数
     */
    LevelDataManager.beforeUnlockMoneyNum = 0;
    return LevelDataManager;
}());
__reflect(LevelDataManager //关卡数据管理 
.prototype, "LevelDataManager");
window["LevelDataItem"] = LevelDataItem;
window["LevelDataManager"] = LevelDataManager;
