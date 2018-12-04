var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
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
                                    LevelDataManager.getInstance().GetLevelData(LevelDataManager.getInstance().curIcon).result;
                                SceneGame.getInstance().bingoLayer.labelExplain.text = "解释:   " +
                                    LevelDataManager.getInstance().GetLevelData(LevelDataManager.getInstance().curIcon).explain + "   ";
                                console.log("result" + LevelDataManager.getInstance().GetLevelData(LevelDataManager.getInstance().curIcon).result);
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
                                LevelDataManager.getInstance().GetLevelData(LevelDataManager.getInstance().curIcon).result;
                            SceneGame.getInstance().bingoLayer.labelExplain.text = "解释:   " +
                                LevelDataManager.getInstance().GetLevelData(LevelDataManager.getInstance().curIcon).explain + "   ";
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
