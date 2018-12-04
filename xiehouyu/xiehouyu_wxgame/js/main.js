var egret = window.egret;var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var Word = (function (_super) {
    __extends(Word, _super);
    function Word() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.onclick_tap, _this);
        return _this;
    }
    //点击到自己后
    Word.prototype.onclick_tap = function () {
        SoundManager.getInstance().answerSoundChanel = SoundManager.getInstance().answerSound.play(0, 1);
        SoundManager.getInstance().answerSoundChanel.volume = 1;
        console.log("onclike" + this.label_answer.text);
        SceneGame.getInstance().onclick_Word(this);
    };
    Word.prototype.SetWordText = function (value) {
        this.label_answer.text = value;
    };
    Word.prototype.GetWordText = function () {
        return this.label_answer.text;
    };
    Word.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    Word.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    return Word;
}(eui.Component));
__reflect(Word.prototype, "Word", ["eui.UIComponent", "egret.DisplayObject"]);
window["Word"] = Word;
var Query = AV.Query, User = AV.User;
var WeChatPlatform = (function () {
    /**
     * 构造函数
     */
    function WeChatPlatform() {
        this._init();
    }
    /**
     * 平台初始化
     */
    WeChatPlatform.prototype._init = function () {
        this.openDataContext = new WxOpenDataContext();
    };
    WeChatPlatform.prototype.shareCloud = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        return __awaiter(this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                if (LevelDataManager.isshipin == true) {
                                    LevelDataManager.getInstance().SetShare(1);
                                    console.log("shareCloud isshipin" + LevelDataManager.isshipin);
                                }
                                else if (LevelDataManager.isshipin == false) {
                                    LevelDataManager.getInstance().SetShare(0);
                                    console.log("shareCloud isshipin" + LevelDataManager.isshipin);
                                }
                                ;
                                resolve();
                                return [2 /*return*/];
                            });
                        });
                    })];
            });
        });
    };
    WeChatPlatform.prototype.shouAD = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
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
                            bannerWidth = 320;
                            bannerHeight = 100;
                            adleft = 35;
                            console.log("111111");
                        }
                        else if (bi == (2208 / 1242)) {
                            bannerWidth = 320;
                            bannerHeight = 100;
                            adleft = 35;
                            console.log("2222222");
                        }
                        else if (bi == (2436 / 1125)) {
                            bannerWidth = 320;
                            bannerHeight = 100;
                            adleft = 35;
                            console.log("33333333");
                        }
                        else {
                            bannerWidth = 320;
                            bannerHeight = 100;
                            adleft = 35;
                            console.log("4444444");
                        }
                        ad = wx.createBannerAd({
                            adUnitId: "adunit-a57340565a6e2881",
                            style: {
                                left: adleft,
                                top: winSize.screenHeight - bannerHeight,
                                width: bannerWidth
                            }
                        });
                        console.log(ad.style.top + "top");
                        console.log(ad.style.left + "left");
                        console.log(winSize.screenWidth + "winSize.screenWidth");
                        console.log(winSize.screenHeight + "winSize.screenHeight");
                        ad.show();
                        LevelDataManager.oldADs = ad;
                        resolve();
                    })];
            });
        });
    };
    WeChatPlatform.prototype.restShare = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.randomShare();
                console.log(" restShare()");
                return [2 /*return*/];
            });
        });
    };
    WeChatPlatform.prototype.restartVideo = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var videoAd = wx.createRewardedVideoAd({
                            adUnitId: 'adunit-597cc618faea8408'
                        });
                        videoAd.load().then(videoAd.show().then(function () {
                            console.log("视频成功");
                        }).catch(function (err) {
                            console.log("视频失败");
                            platform.restShare();
                        }));
                        videoAd.onClose(function (res) {
                            if (res && res.isEnded || res === undefined) {
                                // 正常播放结束，可以下发游戏奖励
                                console.log("正常播放，重新开始");
                                if (LevelDataManager.shipinResult == 0) {
                                    SceneGame.getInstance().bingoLayer.errGroup.visible = false;
                                    SceneGame.getInstance().bingoLayer.visible = false;
                                    SceneGame.getInstance().bingoLayer.bingoGroup.visible = false;
                                    SceneGame.getInstance().bingoLayer.trueGroup.visible = false;
                                    SceneGame.getInstance().InitLevel(LevelDataManager.getInstance().curIcon);
                                }
                                else if (LevelDataManager.shipinResult == 1) {
                                    if (LevelDataManager.curMoney < 20) {
                                        SceneGame.getInstance().bingoLayer.btnTixian.currentState = "disabled";
                                        SceneGame.getInstance().bingoLayer.btnTixian.touchEnabled = false;
                                        SceneGame.getInstance().bingoLayer.tanImg.visible = true;
                                        setTimeout(function () {
                                            SceneGame.getInstance().bingoLayer.tanImg.visible = false;
                                        }, 1000);
                                    }
                                    else {
                                        console.log("onHongBaoTixian() 金额超出！！");
                                    }
                                }
                                else if (LevelDataManager.shipinResult == 2) {
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
                            }
                            else {
                                // 播放中途退出，不下发游戏奖励
                                console.log("提前关闭");
                            }
                        });
                        videoAd.onError(function (err) {
                            console.log("错误信息", err.errMsg, err.errCode);
                            console.log("执行了");
                        });
                        resolve();
                    })];
            });
        });
    };
    WeChatPlatform.prototype.showVideoAD = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var video = wx.createRewardedVideoAd({ adUnitId: "adunit-be82bc3d51b4e7b9" });
                        video.load().then(video.show().then(function () {
                            console.log("拉取视频成功");
                        }).catch(function (err) {
                            console.log("视频拉取失败");
                            platform.testShare();
                        }));
                        video.onError(function (err) {
                            console.log("错误信息", err.errMsg, err.errCode);
                        });
                        video.onClose(function (res) {
                            // 用户点击了【关闭广告】按钮
                            if (res && res.isEnded || res === undefined) {
                                // 正常播放结束，可以下发游戏奖励
                                console.log("正常播放");
                                SoundManager.getInstance().windowSoundChanel = SoundManager.getInstance().windowSound.play(0, 1);
                                SoundManager.getInstance().windowSoundChanel.volume = 1;
                                SceneGame.getInstance().bingoLayer.visible = true;
                                SceneGame.getInstance().bingoLayer.trueGroup.visible = true;
                                SceneGame.getInstance().hintBg(true);
                                SceneGame.getInstance().bingoLayer.labelresult.text =
                                    LevelDataManager.getInstance().GetLevelData(LevelDataManager.getInstance().curIcon).answer;
                                SceneGame.getInstance().bingoLayer.labelExplain.text = "解释:   " +
                                    LevelDataManager.getInstance().GetLevelData(LevelDataManager.getInstance().curIcon).answer + "   ";
                                console.log("result" + LevelDataManager.getInstance().GetLevelData(LevelDataManager.getInstance().curIcon).answer);
                            }
                            else {
                                // 播放中途退出，不下发游戏奖励
                                console.log("提前关闭");
                            }
                        });
                        resolve();
                    })];
            });
        });
    };
    WeChatPlatform.prototype.tiaozhaoVideo = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var videoAd = wx.createRewardedVideoAd({
                            adUnitId: 'adunit-1d0fb93e0bab0a56'
                        });
                        videoAd.load().then(function () { return videoAd.show().then(function () {
                            console.log("解锁拉取视频成功");
                        }).catch(function (err) {
                            console.log("解锁视频拉取失败");
                            console.log(err);
                            wx.shareAppMessage({
                                title: "小学生都能答出的脑筋急转弯，看看你能答对多少？",
                                imageUrl: "resource/assets/common/title11.png"
                            });
                            egret.Tween.get(SceneGame.getInstance().bingoLayer).wait(200).call(function () {
                                SceneGame.getInstance().bingoLayer.visible = false;
                                SceneGame.getInstance().bingoLayer.comboGroup.visible = false;
                                SceneGame.getInstance().levelScene.visible = false;
                                SceneGame.getInstance().bingoLayer.bingoGroup.visible = false;
                                SceneGame.getInstance().bingoLayer.trueGroup.visible = false;
                                SceneGame.getInstance().InitLevel(LevelDataManager.getInstance().curIcon);
                            });
                        }); });
                        videoAd.onError(function (err) {
                            console.log(err);
                        });
                        videoAd.onClose(function (res) {
                            // 用户点击了【关闭广告】按钮
                            if (res && res.isEnded || res === undefined) {
                                // 正常播放结束，可以下发游戏奖励
                                SceneGame.getInstance().bingoLayer.visible = false;
                                SceneGame.getInstance().bingoLayer.comboGroup.visible = false;
                                SceneGame.getInstance().levelScene.visible = false;
                                SceneGame.getInstance().bingoLayer.bingoGroup.visible = false;
                                SceneGame.getInstance().bingoLayer.trueGroup.visible = false;
                                SceneGame.getInstance().InitLevel(LevelDataManager.getInstance().curIcon);
                            }
                            else {
                                // 播放中途退出，不下发游戏奖励
                                console.log("提前关闭");
                            }
                        });
                        resolve();
                    })];
            });
        });
    };
    WeChatPlatform.prototype.getAVUserInfo = function () {
        return __awaiter(this, void 0, void 0, function () {
            var self;
            return __generator(this, function (_a) {
                self = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        return __awaiter(this, void 0, void 0, function () {
                            var date, hour;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, self.leancloudInit()];
                                    case 1:
                                        _a.sent(); //初始化
                                        return [4 /*yield*/, self.shareCloud()];
                                    case 2:
                                        _a.sent(); //分享是否开启
                                        date = new Date();
                                        hour = date.getHours();
                                        console.log(hour + "当前小时");
                                        if (LevelDataManager.getInstance().GetCurTime() == 0) {
                                            AV.User.loginWithWeapp().then(function (user) {
                                                var userInfo = user.toJSON();
                                                LevelDataManager.openId = userInfo.authData.lc_weapp.openid;
                                                LevelDataManager.sessionKey = userInfo.authData.lc_weapp.session_key;
                                                console.log(userInfo);
                                                console.log(LevelDataManager.openId);
                                                console.log(LevelDataManager.sessionKey);
                                                //存储这次登录时间
                                                LevelDataManager.getInstance().SetCurTime(hour);
                                            }).catch(function () { });
                                        }
                                        else if (Math.abs(LevelDataManager.getInstance().GetCurTime() - hour) >= 1.5) {
                                            AV.User.loginWithWeapp().then(function (user) {
                                                var userInfo = user.toJSON();
                                                LevelDataManager.openId = userInfo.authData.lc_weapp.openid;
                                                LevelDataManager.sessionKey = userInfo.authData.lc_weapp.session_key;
                                                console.log(userInfo);
                                                console.log(LevelDataManager.openId);
                                                console.log(LevelDataManager.sessionKey);
                                                //存储这次登录时间
                                                LevelDataManager.getInstance().SetCurTime(hour);
                                            }).catch(function () { });
                                        }
                                        resolve();
                                        return [2 /*return*/];
                                }
                            });
                        });
                    })];
            });
        });
    };
    WeChatPlatform.prototype.AVshare = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        return __awaiter(this, void 0, void 0, function () {
                            var pajson;
                            return __generator(this, function (_a) {
                                pajson = {
                                    gameId: 1002,
                                    openId: LevelDataManager.openId,
                                    sessionKey: LevelDataManager.sessionKey,
                                    iv: LevelDataManager.iv,
                                    encryptedData: LevelDataManager.encryptedData
                                };
                                console.log("gameId  " + pajson.gameId);
                                console.log("openId  " + pajson.openId);
                                console.log("sessionKey " + pajson.sessionKey);
                                console.log("iv  " + pajson.iv);
                                console.log("evcryteData   " + pajson.encryptedData);
                                AV.Cloud.run("share", pajson).then(function (data) {
                                    console.log(data + "分享成功data");
                                    console.log(data.openId + "分享成功dataOPenID");
                                    resolve(data);
                                }, function (err) {
                                });
                                return [2 /*return*/];
                            });
                        });
                    })];
            });
        });
    };
    WeChatPlatform.prototype.testShare = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this.randomShare();
                        resolve();
                        egret.Tween.get(SceneGame.getInstance().bingoLayer).wait(200).call(function () {
                            SoundManager.getInstance().windowSoundChanel = SoundManager.getInstance().windowSound.play(0, 1);
                            SoundManager.getInstance().windowSoundChanel.volume = 1;
                            SceneGame.getInstance().bingoLayer.visible = true;
                            SceneGame.getInstance().bingoLayer.trueGroup.visible = true;
                            SceneGame.getInstance().bingoLayer.daandi.visible = true;
                            SceneGame.getInstance().hintBg(true);
                            SceneGame.getInstance().bingoLayer.labelresult.text =
                                LevelDataManager.getInstance().GetLevelData(LevelDataManager.getInstance().curIcon).answer;
                            SceneGame.getInstance().bingoLayer.labelExplain.text = "解释:   " +
                                LevelDataManager.getInstance().GetLevelData(LevelDataManager.getInstance().curIcon).answer + "   ";
                        });
                    })];
            });
        });
    };
    WeChatPlatform.prototype.leancloudInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _selt;
            return __generator(this, function (_a) {
                _selt = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        return __awaiter(this, void 0, void 0, function () {
                            var options;
                            return __generator(this, function (_a) {
                                options = {
                                    appId: "ihRY3sOSgyBwNpfgdfOTxayc-gzGzoHsz",
                                    appKey: "tUbmQwyYk48bAghMg5mUERNl",
                                };
                                AV.init(options);
                                resolve();
                                return [2 /*return*/];
                            });
                        });
                    })];
            });
        });
    };
    WeChatPlatform.prototype.shareMyAppMessage = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.randomShare();
                return [2 /*return*/];
            });
        });
    };
    WeChatPlatform.prototype.randomShare = function () {
        var date = new Date();
        var time = date.getTime() + 2000;
        wx.setStorageSync("nextshareTime", time);
        var sinfo = LevelDataManager.getShareToInfo();
        console.log("pull share, info", sinfo);
        wx.shareAppMessage({
            title: sinfo.title,
            imageUrl: sinfo.imgURL,
            query: ""
        });
    };
    return WeChatPlatform;
}());
__reflect(WeChatPlatform.prototype, "WeChatPlatform", ["Platform"]);
//扩展开放域
var WxOpenDataContext = (function () {
    function WxOpenDataContext() {
    }
    WxOpenDataContext.prototype.createDisplayObject = function (type, width, height) {
        var sharedCanvas = window["sharedCanvas"];
        var bitmapdata = new egret.BitmapData(sharedCanvas);
        bitmapdata.$deleteSource = false;
        var texture = new egret.Texture();
        texture._setBitmapData(bitmapdata);
        var bitmap = new egret.Bitmap(texture);
        bitmap.width = width;
        bitmap.height = height;
        if (egret.Capabilities.renderMode == "webgl") {
            var renderContext = egret.wxgame.WebGLRenderContext.getInstance();
            var context = renderContext.context;
            ////需要用到最新的微信版本
            ////调用其接口WebGLRenderingContext.wxBindCanvasTexture(number texture, Canvas canvas)
            ////如果没有该接口，会进行如下处理，保证画面渲染正确，但会占用内存。
            if (!context.wxBindCanvasTexture) {
                egret.startTick(function (timeStarmp) {
                    egret.WebGLUtils.deleteWebGLTexture(bitmapdata.webGLTexture);
                    bitmapdata.webGLTexture = null;
                    return false;
                }, this);
            }
        }
        return bitmap;
    };
    WxOpenDataContext.prototype.postMessage = function (data) {
        // const openDataContext = wx.getOpenDataContext();
        var openDataContext = wx.getOpenDataContext();
        openDataContext.postMessage(data);
    };
    return WxOpenDataContext;
}());
__reflect(WxOpenDataContext.prototype, "WxOpenDataContext");
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
            SceneGame.getInstance().levelScene.ImgName.source = LevelScene.getInstance().chenghuImgArray[0];
            SceneGame.getInstance().levelScene.ImgName.width = 86;
        }
        else if (index >= 91 && index <= 180) {
            SceneGame.getInstance().levelScene.ImgName.source = LevelScene.getInstance().chenghuImgArray[1];
            SceneGame.getInstance().levelScene.ImgName.width = 86;
        }
        else if (index >= 181 && index <= 270) {
            SceneGame.getInstance().levelScene.ImgName.source = LevelScene.getInstance().chenghuImgArray[2];
            SceneGame.getInstance().levelScene.ImgName.width = 86;
        }
        else if (index >= 271 && index <= 360) {
            SceneGame.getInstance().levelScene.ImgName.source = LevelScene.getInstance().chenghuImgArray[3];
            SceneGame.getInstance().levelScene.ImgName.width = 86;
        }
        else if (index >= 361 && index <= 450) {
            SceneGame.getInstance().levelScene.ImgName.source = LevelScene.getInstance().chenghuImgArray[4];
            SceneGame.getInstance().levelScene.ImgName.width = 86;
        }
        else if (index >= 451 && index <= 540) {
            SceneGame.getInstance().levelScene.ImgName.source = LevelScene.getInstance().chenghuImgArray[5];
            SceneGame.getInstance().levelScene.ImgName.width = 86;
        }
        else if (index >= 541 && index <= 630) {
            SceneGame.getInstance().levelScene.ImgName.source = LevelScene.getInstance().chenghuImgArray[6];
            SceneGame.getInstance().levelScene.ImgName.width = 86;
        }
        else if (index >= 631 && index <= 720) {
            SceneGame.getInstance().levelScene.ImgName.source = LevelScene.getInstance().chenghuImgArray[7];
            SceneGame.getInstance().levelScene.ImgName.width = 147;
        }
        else if (index >= 721 && index <= 810) {
            SceneGame.getInstance().levelScene.ImgName.source = LevelScene.getInstance().chenghuImgArray[8];
            SceneGame.getInstance().levelScene.ImgName.width = 147;
        }
        else if (index >= 811 && index <= 900) {
            SceneGame.getInstance().levelScene.ImgName.source = LevelScene.getInstance().chenghuImgArray[9];
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
// class  LevelDataItem
// {
//     public result:string;//答案
//     public question:string;//题目
//     public chaotic:string;//选择内容  固定14
//     public explain:string;
// }
var LevelDataItemXie = (function () {
    function LevelDataItemXie() {
    }
    return LevelDataItemXie;
}());
__reflect(LevelDataItemXie.prototype, "LevelDataItemXie");
var LevelDataManager = (function () {
    function LevelDataManager() {
        this.curIcon = 1;
        this.curIndex = 1; //当前关卡数
        this.isShare = false;
        //关卡数据的数据组
        this.levelDataItemList = [];
        //使用RES读取和构建JSON数据。Json数据可以直接解析到目标结构
        this.levelDataItemList = RES.getRes("xietiku_json");
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
window["LevelDataItemXie"] = LevelDataItemXie;
window["LevelDataManager"] = LevelDataManager;
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
var LevelScene = (function (_super) {
    __extends(LevelScene, _super);
    function LevelScene() {
        var _this = _super.call(this) || this;
        _this.maxPageNum = 57;
        _this.minPageNum = 1;
        /**等级称呼数组 */
        _this.gradeStringArray = ["小书生", "童生", "附生秀才", "增生秀才", "禀生秀才", "监生", "贡生", "举人", "解元", "贡士", "会元", "三甲进士", "二甲进士", "一甲进士", "探花", "榜眼", "状元", "大学士", "翰林文圣"];
        //称呼数组
        _this.chenghuImgArray = ["1_png", "2_png", "3_png", "4_png", "5_png", "6_png", "7_png", "8_png", "9_png", "10_png"];
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
        else if (this.pageIndex == 513) {
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
        if (this.pageIndex == this.minPageNum) {
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
        if (this.pageIndex == this.maxPageNum) {
            console.log("最后一关");
            this.btn_next.visible = false;
        }
        else if (this.pageIndex < this.maxPageNum) {
            this.btn_before.visible = true;
        }
    };
    /** 每3页换一个 每一页一颗星 */
    LevelScene.prototype.updataName = function () {
        var chenghuNum = this.pageIndex / 3;
        var num = this.pageIndex % 3;
        // xxx.text = this.gradeStringArray[num];
        // xxx.source = this. chenghuImgArray[num];
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
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var LoadingUI = (function (_super) {
    __extends(LoadingUI, _super);
    function LoadingUI() {
        var _this = _super.call(this) || this;
        _this.createView();
        return _this;
    }
    LoadingUI.prototype.createView = function () {
        this.textField = new egret.TextField();
        this.addChild(this.textField);
        this.textField.y = 300;
        this.textField.width = 480;
        this.textField.height = 100;
        this.textField.textAlign = "center";
    };
    LoadingUI.prototype.onProgress = function (current, total) {
        this.textField.text = "Loading..." + current + "/" + total;
        //加载条x缩放
    };
    return LoadingUI;
}(egret.Sprite));
__reflect(LoadingUI.prototype, "LoadingUI", ["RES.PromiseTaskReporter"]);
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isdisplay = false;
        return _this;
    }
    // private player:PlayerData;
    // private isMD:boolean = false;
    Main.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        egret.lifecycle.addLifecycleListener(function (context) {
            // custom lifecycle plugin
        });
        egret.lifecycle.onPause = function () {
            egret.ticker.pause();
        };
        egret.lifecycle.onResume = function () {
            egret.ticker.resume();
        };
        //inject the custom material parser
        //注入自定义的素材解析器
        var assetAdapter = new AssetAdapter();
        egret.registerImplementation("eui.IAssetAdapter", assetAdapter);
        egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter());
        this.runGame().catch(function (e) {
            console.log(e);
        });
    };
    Main.prototype.runGame = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var updateManager, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        wx.updateShareMenu({
                            withShareTicket: true
                        });
                        wx.showShareMenu();
                        wx.onShareAppMessage(function () {
                            // 用户点击了“转发”按钮
                            return {
                                title: "小学生都能答出的脑筋急转弯，看看你能答对多少？",
                                imageUrl: "resource/assets/common/title11.png"
                            };
                        });
                        try {
                            if (wx.getUpdateManager()) {
                                updateManager = wx.getUpdateManager();
                                updateManager.onCheckForUpdate(function (res) { console.warn("onCheckForUpdate", res.hasUpdate); });
                                updateManager.onUpdateReady(function () { updateManager.applyUpdate(); });
                                updateManager.onUpdateFailed(function () { });
                            }
                        }
                        catch (ex) { }
                        return [4 /*yield*/, this.loadShareCode()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.loadResource()];
                    case 2:
                        _a.sent();
                        this.createGameScene();
                        wx.onShow(function (res) {
                            console.log("wx.onShow", res);
                            if (res) {
                                _this.loadShareCode();
                                _this.checkShipin();
                                var date = new Date();
                                var time = date.getTime();
                                var beforeTime = parseInt((wx.getStorageSync("nextshareTime") || "1"));
                                if (time > beforeTime) {
                                    LevelDataManager.isShareTime = false;
                                }
                                else {
                                    LevelDataManager.isShareTime = true;
                                }
                                if (LevelDataManager.onshowNum == 1) {
                                    _this.showViedeoOrShare();
                                }
                                else if (LevelDataManager.onshowNum == 2) {
                                    _this.showResult();
                                }
                                else if (LevelDataManager.onshowNum == 3) {
                                    _this.dian();
                                }
                                else if (LevelDataManager.onshowNum == 4) {
                                    _this.jiesuo();
                                }
                                else if (LevelDataManager.onshowNum == 5) {
                                    _this.xuaoyao();
                                }
                                console.log("LevelDataManager.isShareTime" + LevelDataManager.isShareTime);
                            }
                        });
                        return [4 /*yield*/, RES.getResAsync("description_json")];
                    case 3:
                        result = _a.sent();
                        // const userInfo = await (platform as any).getAVUserInfo();//resolve()
                        console.log("游戏初始化");
                        console.log("用户信息没得了");
                        return [2 /*return*/];
                }
            });
        });
    };
    Main.prototype.dian = function () {
        if (LevelDataManager.isShareTime == false) {
            egret.Tween.get(SceneGame.getInstance().dianImg).wait(200).call(function () {
                SceneGame.getInstance().dianImg.visible = false;
            }).wait(300000).call(function () { SceneGame.getInstance().dianImg.visible = true; }); //1000ms = 1s   3000 0  0 3s00
            LevelDataManager.onshowNum = 0;
        }
        else {
            wx.showModal({
                title: "提示",
                content: "分享失败",
                showCancel: false,
                success: function (res) {
                    if (res.confirm == true) {
                        wx.shareAppMessage({
                            title: "小学生都能答出的脑筋急转弯，看看你能答对多少？",
                            imageUrl: "resource/assets/common/title11.png"
                        });
                        platform.randomShare();
                        LevelDataManager.onshowNum = 3;
                    }
                }
            });
        }
    };
    Main.prototype.xuaoyao = function () {
        if (LevelDataManager.isShareTime) {
            wx.showModal({
                title: "提示",
                content: "分享失败",
                showCancel: false,
                success: function (res) {
                    if (res.confirm == true) {
                        wx.shareAppMessage({
                            title: "小学生都能答出的脑筋急转弯，看看你能答对多少？",
                            imageUrl: "resource/assets/common/title11.png"
                        });
                        platform.randomShare();
                        LevelDataManager.onshowNum = 5;
                    }
                }
            });
        }
        else {
            LevelDataManager.onshowNum = 0;
        }
    };
    Main.prototype.checkShipin = function () {
        if (LevelDataManager.isshipin == true) {
            LevelDataManager.getInstance().SetShare(1);
            console.log("isshipin" + LevelDataManager.isshipin);
        }
        else if (LevelDataManager.isshipin == false) {
            LevelDataManager.getInstance().SetShare(0);
            console.log("isshipin" + LevelDataManager.isshipin);
        }
        ;
    };
    Main.prototype.showViedeoOrShare = function () {
        console.log("showViedeoOrShare  ");
        if (!LevelDataManager.isShareTime) {
            if (LevelDataManager.shipinResult == 0) {
                SceneGame.getInstance().bingoLayer.errGroup.visible = false;
                SceneGame.getInstance().bingoLayer.visible = false;
                SceneGame.getInstance().bingoLayer.bingoGroup.visible = false;
                SceneGame.getInstance().bingoLayer.trueGroup.visible = false;
                SceneGame.getInstance().InitLevel(LevelDataManager.getInstance().curIcon);
            }
            else if (LevelDataManager.shipinResult == 1) {
                if (LevelDataManager.curMoney < 20) {
                    SceneGame.getInstance().bingoLayer.btnTixian.currentState = "disabled";
                    SceneGame.getInstance().bingoLayer.btnTixian.touchEnabled = false;
                    SceneGame.getInstance().bingoLayer.tanImg.visible = true;
                    setTimeout(function () {
                        SceneGame.getInstance().bingoLayer.tanImg.visible = false;
                    }, 1000);
                }
                else {
                    console.log("onHongBaoTixian() 金额超出！！");
                }
            }
            else if (LevelDataManager.shipinResult == 2) {
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
        }
        else {
            console.log("showViedeoOrShare()在2s内");
        }
        LevelDataManager.onshowNum = 0;
    };
    Main.prototype.showResult = function () {
        if (!LevelDataManager.isShareTime) {
            if (LevelDataManager.shareNum % 3 == 1) {
                egret.Tween.get(this).wait(200).call(function () {
                    SoundManager.getInstance().windowSoundChanel = SoundManager.getInstance().windowSound.play(0, 1);
                    SoundManager.getInstance().windowSoundChanel.volume = 1;
                    SceneGame.getInstance().bingoLayer.visible = true;
                    SceneGame.getInstance().bingoLayer.trueGroup.visible = true;
                    SceneGame.getInstance().hintBg(true);
                    SceneGame.getInstance().bingoLayer.labelresult.text =
                        LevelDataManager.getInstance().GetLevelData(LevelDataManager.getInstance().curIcon).answer;
                    if (LevelDataManager.getInstance().curIcon > 902) {
                        SceneGame.getInstance().bingoLayer.labelExplain.visible = false;
                    }
                    SceneGame.getInstance().bingoLayer.labelExplain.text = "解释:   " +
                        LevelDataManager.getInstance().GetLevelData(LevelDataManager.getInstance().curIcon).answer + "   ";
                    console.log("result" + LevelDataManager.getInstance().GetLevelData(LevelDataManager.getInstance().curIcon).answer);
                    LevelDataManager.shareNum++;
                    LevelDataManager.onshowNum = 0;
                    console.log(" LevelDataManager.shareNum" + LevelDataManager.shareNum);
                });
            }
            else {
                egret.Tween.get(this).wait(200).call(function () {
                    wx.showModal({
                        title: "提示",
                        content: "别总骚扰这个群的朋友啦，换个群分享吧~",
                        showCancel: false,
                        success: function (res) {
                            if (res.confirm == true) {
                                platform.shareMyAppMessage();
                                LevelDataManager.onshowNum = 2;
                                LevelDataManager.shareNum++;
                            }
                        }
                    });
                    console.log(" LevelDataManager.shareNum" + LevelDataManager.shareNum);
                });
            }
        }
        else {
            console.log("showResult()在2s内");
        }
        LevelDataManager.onshowNum = 0;
    };
    Main.prototype.jiesuo = function () {
        if (!LevelDataManager.isShareTime) {
            if (LevelDataManager.shareNum % 3 == 1) {
                egret.Tween.get(SceneGame.getInstance().bingoLayer).wait(200).call(function () {
                    SceneGame.getInstance().bingoLayer.visible = false;
                    SceneGame.getInstance().bingoLayer.comboGroup.visible = false;
                    SceneGame.getInstance().levelScene.visible = false;
                    SceneGame.getInstance().bingoLayer.bingoGroup.visible = false;
                    SceneGame.getInstance().bingoLayer.trueGroup.visible = false;
                    SceneGame.getInstance().InitLevel(LevelDataManager.getInstance().curIcon);
                });
                LevelDataManager.shareNum++;
                LevelDataManager.onshowNum = 0;
            }
            else {
                wx.showModal({
                    title: "提示",
                    content: "解锁失败，需要分享到不同的群",
                    showCancel: false,
                    success: function (res) {
                        if (res.confirm == true) {
                            platform.randomShare();
                            LevelDataManager.onshowNum = 4;
                            LevelDataManager.shareNum++;
                        }
                    }
                });
            }
            console.log("jiesuo不在时间内");
        }
        else {
            console.log("jiesuo()在2s内");
        }
    };
    /**
     * await 后面跟的是返回 promise 的函数。这个函数也可以是async   await只能在async函数中用。
       async   return返回的都是一个Promise对象同时async适用于任何类型的函数上。这样await得到的就是一个Promise对象(如果不是Promise对象的话那async返回的是什么 就是什么)；
     */
    Main.prototype.loadResource = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loadingView, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        loadingView = new LoadingUI();
                        this.addChild(loadingView);
                        return [4 /*yield*/, RES.loadConfig("resource/default.res.json", "resource/")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.loadTheme()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, RES.loadGroup("preload", 0, loadingView)];
                    case 3:
                        _a.sent();
                        this.removeChild(loadingView);
                        return [3 /*break*/, 5];
                    case 4:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    Main.prototype.loadShareCode = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            Util.req(R.url_code, null, function (res) {
                LevelDataManager.readShareCodeRes(res);
                resolve();
            }, _this);
        });
    };
    Main.prototype.loadTheme = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // load skin theme configuration file, you can manually modify the file. And replace the default skin.
            //加载皮肤主题配置文件,可以手动修改这个文件。替换默认皮肤。
            var theme = new eui.Theme("resource/default.thm.json", _this.stage);
            theme.addEventListener(eui.UIEvent.COMPLETE, function () {
                resolve();
            }, _this);
        });
    };
    Main.prototype.createGameScene = function () {
        var videoAd = wx.createRewardedVideoAd({
            adUnitId: 'adunit-1d0fb93e0bab0a56'
        });
        console.log("游戏初始化了");
        SoundManager.getInstance();
        LevelDataManager.getInstance();
        SceneGame.getInstance();
        this.addChild(SceneGame.getInstance());
        var data = LevelDataManager.getInstance().GetMileStone(); //218 8
        if (data > 1) {
            var mod = data % 10; //8
            var num = data + (10 - mod); //218 + (10 - 8) = 220
            var curindex = num / 10; //220 / 10 22
            LevelDataManager.getInstance().SetCurIndex(curindex);
        }
        LevelDataManager.getInstance().curIcon = data;
        SceneGame.getInstance().InitLevel(data);
        console.log(data);
        LevelDataManager.getInstance().getAd(); //手动拉AD
    };
    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
    Main.prototype.createBitmapByName = function (name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        return result;
    };
    Main.prototype.onButtonClick = function (e) {
        console.log('点击btnClose按钮');
        var platform = window.platform;
        if (this.isdisplay) {
            this.bitmap.parent && this.bitmap.parent.removeChild(this.bitmap);
            this.rankingListMask.parent && this.rankingListMask.parent.removeChild(this.rankingListMask);
            this.isdisplay = false;
            platform.openDataContext.postMessage({
                isDisplay: this.isdisplay,
                text: 'hello',
                year: (new Date()).getFullYear(),
                command: "close",
                type: "closedata"
            });
        }
        else {
            //处理遮罩，避免开放数据域事件影响主域。
            this.rankingListMask = new egret.Shape();
            this.rankingListMask.graphics.beginFill(0x000000, 1);
            this.rankingListMask.graphics.drawRect(0, 0, this.stage.width, this.stage.height);
            this.rankingListMask.graphics.endFill();
            this.rankingListMask.alpha = 0.5;
            this.rankingListMask.touchEnabled = true;
            this.addChild(this.rankingListMask);
            //简单实现，打开这关闭使用一个按钮。
            this.addChild(this.btnOpen);
            //主要示例代码开始
            this.bitmap = platform.openDataContext.createDisplayObject(null, this.stage.stageWidth, this.stage.stageHeight);
            this.addChild(this.bitmap);
            //主域向子域发送自定义消息
            platform.openDataContext.postMessage({
                isDisplay: this.isdisplay,
                text: 'hello',
                year: (new Date()).getFullYear(),
                command: "open",
                type: "opendata"
            });
            //主要示例代码结束            
            this.isdisplay = true;
        }
    };
    return Main;
}(eui.UILayer));
__reflect(Main.prototype, "Main");
/**
 * 平台数据接口。
 * 由于每款游戏通常需要发布到多个平台上，所以提取出一个统一的接口用于开发者获取平台数据信息
 * 推荐开发者通过这种方式封装平台逻辑，以保证整体结构的稳定
 * 由于不同平台的接口形式各有不同，白鹭推荐开发者将所有接口封装为基于 Promise 的异步形式
 */
var Query = AV.Query, User = AV.User;
if (!window.platform) {
    window.platform = new WeChatPlatform();
}
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var AssetAdapter = (function () {
    function AssetAdapter() {
    }
    /**
     * @language zh_CN
     * 解析素材
     * @param source 待解析的新素材标识符
     * @param compFunc 解析完成回调函数，示例：callBack(content:any,source:string):void;
     * @param thisObject callBack的 this 引用
     */
    AssetAdapter.prototype.getAsset = function (source, compFunc, thisObject) {
        function onGetRes(data) {
            compFunc.call(thisObject, data, source);
        }
        if (RES.hasRes(source)) {
            var data = RES.getRes(source);
            if (data) {
                onGetRes(data);
            }
            else {
                RES.getResAsync(source, onGetRes, this);
            }
        }
        else {
            RES.getResByUrl(source, onGetRes, this, RES.ResourceItem.TYPE_IMAGE);
        }
    };
    return AssetAdapter;
}());
__reflect(AssetAdapter.prototype, "AssetAdapter", ["eui.IAssetAdapter"]);
var R = (function () {
    function R() {
    }
    R.webPath = "https://huanle.hn.shqi7.net/njjzw/";
    R.apiPath = "https://huanle.hn.shqi7.net:8082/njjzw/";
    R.url_code = R.apiPath + "code";
    return R;
}());
__reflect(R.prototype, "R");
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
        this.xuanyaoBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onxuanyao, this);
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
    SceneGame.prototype.onxuanyao = function () {
        LevelDataManager.onshowNum = 5;
        platform.randomShare();
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
    SceneGame.prototype.getSelectWords = function (index) {
        var oldstr = "";
        for (var i = 0; i < 20; i++) {
            oldstr += LevelDataManager.getInstance().GetLevelData(index + i + 1).word[1]; //取到后面20关的答案
        }
        var myreult = "";
        //本关的答案
        myreult += LevelDataManager.getInstance().GetLevelData(index).answer;
        //筛选8个字出来
        var newstr = "";
        for (var i = 0; i < 10 - myreult.length; i++) {
            var p = Math.floor(Math.random() * oldstr.length);
            //检索不到在相加
            if (myreult.indexOf(oldstr.charAt(p)) == -1 && oldstr.indexOf(oldstr.charAt(p))) {
                newstr += oldstr.charAt(p);
            }
        }
        myreult += newstr;
        return myreult;
    };
    SceneGame.prototype.InitLevel = function (index) {
        this.levelIndex = index;
        this.labelLevel.text = this.levelIndex.toString();
        var levelData = LevelDataManager.getInstance().GetLevelData(index); //得到关卡数据
        //将字段接起来
        //要展示的数据
        var showData = this.getSelectWords(index);
        //对字段重新排列
        var wordList = []; //["","",]代表这是字符串数组。
        for (var i = 0; i < showData.length; i++) {
            wordList.push(showData.charAt(i));
        }
        wordList = this.randomList(wordList, index);
        //内容区域赋值  大于150关   变为15字
        // this.changeWord();//改变选择区域字数  统一两行
        for (var i = 0; i < this.group_Chaotic.numChildren; i++) {
            var wordRect = this.group_Chaotic.getChildAt(i);
            wordRect.SetWordText(wordList[i]);
            wordRect.visible = true;
        }
        //添加答案区
        this.group_Result.removeChildren();
        var len = levelData.word[1].length;
        while (len) {
            var temp = new AnswerWord();
            temp.width = 75;
            temp.height = 75;
            this.group_Result.addChild(temp);
            len--;
        }
        //答案区域重置一些状态
        var resultArray = [];
        for (var i = 0; i < levelData.word[1].length; i++) {
            resultArray.push(levelData.word[1].charAt(i));
        }
        for (var i = 0; i < this.group_Result.numChildren; i++) {
            var answerRect = this.group_Result.getChildAt(i);
            answerRect.visible = true;
            answerRect.SetSelectWord(resultArray[i]);
            answerRect.selectWord = resultArray[i];
        }
        //显示问题
        this.label_Question.text = this.chatAtQuestion(levelData.word[0]);
        this.hongbao20();
    };
    /**将原字符串改为自己想要的样子 */
    SceneGame.prototype.chatAtQuestion = function (str) {
        var strArr = "    ";
        for (var i = 0; i < str.length; i++) {
            if (i == str.length - 1) {
                strArr += str.charAt(i);
                break;
            }
            strArr += str.charAt(i) + " ";
        }
        return strArr;
    };
    SceneGame.prototype.hongbao20 = function () {
        if (LevelDataManager.enableHongBao) {
            var max = LevelDataManager.getInstance().GetMileStone();
            if (max % 5 == 0 || max % 7 == 0) {
                LevelDataManager.curMoneyNum = LevelDataManager.unlockMoneyNum;
                LevelDataManager.beforeUnlockMoneyNum = LevelDataManager.unlockMoneyNum;
                console.log("重新来");
            }
            if (LevelDataManager.curMoneyNum <= 5) {
                if (max == 3 || max == 6 || max == 12 || max == 18 || max == 25) {
                    //领红包逻辑
                    if (LevelDataManager.unlockMoneyNum == LevelDataManager.curMoneyNum && LevelDataManager.unlockMoneyNum == LevelDataManager.beforeUnlockMoneyNum) {
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
            else {
                //领红包逻辑
                if (max % 20 == 5 && LevelDataManager.unlockMoneyNum == LevelDataManager.curMoneyNum && LevelDataManager.unlockMoneyNum == LevelDataManager.beforeUnlockMoneyNum) {
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
    SceneGame.prototype.randomList = function (list, index) {
        var arr = [];
        if (index >= 150) {
            while (list.length > 0) {
                var i = Math.floor(Math.random() * list.length);
                arr.push(list[i]);
                list.splice(i, 1); //删除i位置
            }
            return arr;
        }
        else {
            return list;
        }
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
            if (str == LevelDataManager.getInstance().GetLevelData(this.levelIndex).word[1]) {
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
var testWord = (function (_super) {
    __extends(testWord, _super);
    function testWord() {
        return _super.call(this) || this;
    }
    testWord.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    testWord.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    return testWord;
}(Word));
__reflect(testWord.prototype, "testWord");
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var ThemeAdapter = (function () {
    function ThemeAdapter() {
    }
    /**
     * 解析主题
     * @param url 待解析的主题url
     * @param onSuccess 解析完成回调函数，示例：compFunc(e:egret.Event):void;
     * @param onError 解析失败回调函数，示例：errorFunc():void;
     * @param thisObject 回调的this引用
     */
    ThemeAdapter.prototype.getTheme = function (url, onSuccess, onError, thisObject) {
        var _this = this;
        function onResGet(e) {
            onSuccess.call(thisObject, e);
        }
        function onResError(e) {
            if (e.resItem.url == url) {
                RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, onResError, null);
                onError.call(thisObject);
            }
        }
        if (typeof generateEUI !== 'undefined') {
            egret.callLater(function () {
                onSuccess.call(thisObject, generateEUI);
            }, this);
        }
        else if (typeof generateEUI2 !== 'undefined') {
            RES.getResByUrl("resource/gameEui.json", function (data, url) {
                window["JSONParseClass"]["setData"](data);
                egret.callLater(function () {
                    onSuccess.call(thisObject, generateEUI2);
                }, _this);
            }, this, RES.ResourceItem.TYPE_JSON);
        }
        else {
            RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, onResError, null);
            RES.getResByUrl(url, onResGet, this, RES.ResourceItem.TYPE_TEXT);
        }
    };
    return ThemeAdapter;
}());
__reflect(ThemeAdapter.prototype, "ThemeAdapter", ["eui.IThemeAdapter"]);
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
;window.Main = Main;