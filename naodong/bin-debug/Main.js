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
                                }
                                else if (LevelDataManager.onshowNum == 4) {
                                    _this.jiesuo();
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
                        LevelDataManager.getInstance().GetLevelData(LevelDataManager.getInstance().curIcon).result;
                    SceneGame.getInstance().bingoLayer.labelExplain.text = "解释:   " +
                        LevelDataManager.getInstance().GetLevelData(LevelDataManager.getInstance().curIcon).explain + "   ";
                    console.log("result" + LevelDataManager.getInstance().GetLevelData(LevelDataManager.getInstance().curIcon).result);
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
