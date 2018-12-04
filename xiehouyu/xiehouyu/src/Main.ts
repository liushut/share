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

class Main extends eui.UILayer {
    // private player:PlayerData;
    // private isMD:boolean = false;
    protected createChildren(): void {
        super.createChildren();
        egret.lifecycle.addLifecycleListener((context) => {
            // custom lifecycle plugin

        })

        egret.lifecycle.onPause = () => {
            egret.ticker.pause();
        }

        egret.lifecycle.onResume = () => {
            egret.ticker.resume();
        }

        //inject the custom material parser
        //注入自定义的素材解析器
        let assetAdapter = new AssetAdapter();
        egret.registerImplementation("eui.IAssetAdapter", assetAdapter);
        egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter());
        this.runGame().catch(e => {
            console.log(e);
        })
    }
    private async runGame() {
        (wx as any).updateShareMenu({
            withShareTicket: true
        });
        (wx as any).showShareMenu();
        wx.onShareAppMessage(function () {
            // 用户点击了“转发”按钮
            return {
                title: "小学生都能答出的脑筋急转弯，看看你能答对多少？",
                imageUrl: "resource/assets/common/title11.png"
            }
        })
        try {
            if (wx.getUpdateManager()) {
                var updateManager = wx.getUpdateManager();
                updateManager.onCheckForUpdate(function (res) { console.warn("onCheckForUpdate", res.hasUpdate) });
                updateManager.onUpdateReady(function () { updateManager.applyUpdate() });
                updateManager.onUpdateFailed(function () { })
            }
        }
        catch (ex) { }
        await this.loadShareCode();
        await this.loadResource();
        this.createGameScene();
        wx.onShow((res?: any) => {
            console.log("wx.onShow", res);
            if (res) {
                this.loadShareCode();
                this.checkShipin();
                let date = new Date();
                let time = date.getTime();
                let beforeTime = parseInt((wx.getStorageSync("nextshareTime") || "1") as string);
                if (time > beforeTime) {
                    LevelDataManager.isShareTime = false;

                }
                else {
                    LevelDataManager.isShareTime = true;

                }
                if (LevelDataManager.onshowNum == 1) {
                    this.showViedeoOrShare();
                }
                else if (LevelDataManager.onshowNum == 2) {
                    this.showResult();
                }
                else if (LevelDataManager.onshowNum == 3) {
                    if (LevelDataManager.isShareTime == false) {
                        egret.Tween.get(SceneGame.getInstance().dianImg).wait(200).call(() => {
                            SceneGame.getInstance().dianImg.visible = false;
                        }).wait(300000).call(() => { SceneGame.getInstance().dianImg.visible = true; })//1000ms = 1s   3000 0  0 3s00
                        LevelDataManager.onshowNum = 0;
                    }
                    else {
                        (wx as any).showModal({
                            title: "提示",
                            content: "分享失败",
                            showCancel: false,
                            success: function (res) {
                                if (res.confirm == true) {
                                    (wx as any).shareAppMessage({
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
                else if(LevelDataManager.onshowNum == 4)
                {
                    this.jiesuo();
                }
                console.log("LevelDataManager.isShareTime" + LevelDataManager.isShareTime);
            }

        });
        const result = await RES.getResAsync("description_json");
        // const userInfo = await (platform as any).getAVUserInfo();//resolve()
        console.log("游戏初始化");
        console.log("用户信息没得了");

    }
    private checkShipin() {
        if (LevelDataManager.isshipin == true) {//1 true
            LevelDataManager.getInstance().SetShare(1);
            console.log("isshipin" + LevelDataManager.isshipin);
        }
        else if (LevelDataManager.isshipin == false) {//0 false
            LevelDataManager.getInstance().SetShare(0);
            console.log("isshipin" + LevelDataManager.isshipin);
        };
    }
    private showViedeoOrShare() {
        console.log("showViedeoOrShare  ");
        if (!LevelDataManager.isShareTime) {
            if (LevelDataManager.shipinResult == 0) {
                SceneGame.getInstance().bingoLayer.errGroup.visible = false;
                SceneGame.getInstance().bingoLayer.visible = false;
                SceneGame.getInstance().bingoLayer.bingoGroup.visible = false;
                SceneGame.getInstance().bingoLayer.trueGroup.visible = false;
                SceneGame.getInstance().InitLevel(LevelDataManager.getInstance().curIcon);
            }
            else if (LevelDataManager.shipinResult == 1) {//主界面红包
                if (LevelDataManager.curMoney < 20) {
                    SceneGame.getInstance().bingoLayer.btnTixian.currentState = "disabled";
                    SceneGame.getInstance().bingoLayer.btnTixian.touchEnabled = false;
                    SceneGame.getInstance().bingoLayer.tanImg.visible = true;
                    setTimeout(() => {
                        SceneGame.getInstance().bingoLayer.tanImg.visible = false;
                    }, 1000);
                }
                else {
                    console.log("onHongBaoTixian() 金额超出！！");
                }
            } else if (LevelDataManager.shipinResult == 2)//30关红包
            {
                LevelDataManager.curMoneyNum++;
                LevelDataManager.unlockMoneyNum++;
                console.log("LevelDataManager.curMoney", LevelDataManager.curMoney);
                console.log("LevelDataManager.showMoney", LevelDataManager.showMoney);
                LevelDataManager.curMoney += LevelDataManager.showMoney;
                console.log("相加后LevelDataManager.curMoney", LevelDataManager.curMoney)
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
    }
    private showResult() {
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
                    console.log(" LevelDataManager.shareNum" + LevelDataManager.shareNum);
                });
            }
            else {
                egret.Tween.get(this).wait(200).call(function () {
                    (wx as any).showModal({
                        title: "提示",
                        content: "别总骚扰这个群的朋友啦，换个群分享吧~",
                        showCancel: false,
                        success: function (res) {
                            if (res.confirm == true) {
                                platform.shareMyAppMessage();
                            }
                        }
                    });
                    LevelDataManager.shareNum++;
                    console.log(" LevelDataManager.shareNum" + LevelDataManager.shareNum);
                });
            }
        }
        else {
            console.log("showResult()在2s内");
        }
        LevelDataManager.onshowNum = 0;
    }
    private jiesuo()//111
    {
          if (!LevelDataManager.isShareTime) {
            if (LevelDataManager.shareNum % 3 == 1) {
                egret.Tween.get(SceneGame.getInstance().bingoLayer).wait(200).call(() => {
                     SceneGame.getInstance().bingoLayer.visible = false;
                    SceneGame.getInstance().bingoLayer.comboGroup.visible = false;
                    SceneGame.getInstance().levelScene.visible = false;
                    SceneGame.getInstance().bingoLayer.bingoGroup.visible = false;
                    SceneGame.getInstance().bingoLayer.trueGroup.visible = false;
                    SceneGame.getInstance().InitLevel(LevelDataManager.getInstance().curIcon);
                })
                LevelDataManager.shareNum++;
                LevelDataManager.onshowNum = 0;
                
            }
            else {
                (wx as any).showModal({
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
        
    }
    /**
     * await 后面跟的是返回 promise 的函数。这个函数也可以是async   await只能在async函数中用。
       async   return返回的都是一个Promise对象同时async适用于任何类型的函数上。这样await得到的就是一个Promise对象(如果不是Promise对象的话那async返回的是什么 就是什么)；
     */
    private async loadResource() {
        try {
            const loadingView = new LoadingUI();
            this.addChild(loadingView);
            await RES.loadConfig("resource/default.res.json", "resource/");
            await this.loadTheme();
            await RES.loadGroup("preload", 0, loadingView);
            this.removeChild(loadingView);
        }
        catch (e) {
            console.error(e);
        }
    }
    private loadShareCode() {
        return new Promise((resolve, reject) => {
            Util.req(R.url_code, null, (res: any) => {
                LevelDataManager.readShareCodeRes(res);
                resolve();
            }, this);
        })
    }
    private loadTheme() {
        return new Promise((resolve, reject) => {
            // load skin theme configuration file, you can manually modify the file. And replace the default skin.
            //加载皮肤主题配置文件,可以手动修改这个文件。替换默认皮肤。
            let theme = new eui.Theme("resource/default.thm.json", this.stage);
            theme.addEventListener(eui.UIEvent.COMPLETE, () => {
                resolve();
            }, this);

        })
    }

    private textfield: egret.TextField;
    /**
     * 创建场景界面
     * Create scene interface
     */

    private btnOpen: eui.Button;
    protected createGameScene(): void {
        let videoAd = (wx as any).createRewardedVideoAd({
            adUnitId: 'adunit-1d0fb93e0bab0a56'
        });
        console.log("游戏初始化了");
        SoundManager.getInstance();
        LevelDataManager.getInstance();
        SceneGame.getInstance();
        this.addChild(SceneGame.getInstance());
        let data = LevelDataManager.getInstance().GetMileStone();//218 8
        if (data > 1) {
            let mod = data % 10;//8
            let num = data + (10 - mod);//218 + (10 - 8) = 220
            let curindex = num / 10;//220 / 10 22
            LevelDataManager.getInstance().SetCurIndex(curindex);
        }
        LevelDataManager.getInstance().curIcon = data;
        SceneGame.getInstance().InitLevel(data);
        console.log(data);
        LevelDataManager.getInstance().getAd();//手动拉AD
    }


    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
    private createBitmapByName(name: string): egret.Bitmap {
        let result = new egret.Bitmap();
        let texture: egret.Texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }
    /**
     * 描述文件加载成功，开始播放动画
     * Description file loading is successful, start to play the animation
     */

    /**
     * 点击按钮
     * Click the button
     */
    private rankingListMask: egret.Shape;
    private bitmap: egret.Bitmap;
    private isdisplay = false;
    private onButtonClick(e: egret.TouchEvent) {
        console.log('点击btnClose按钮');
        let platform: any = window.platform;
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
        } else {
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

    }
}
