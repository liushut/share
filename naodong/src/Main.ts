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
    private async runGame(){
        (wx as any).updateShareMenu({
            withShareTicket: true
        });
        (wx as any).createRewardedVideoAd({ adUnitId: "adunit-be82bc3d51b4e7b9" });//初始化广告
        (wx as any).showShareMenu(); 
        wx.onShareAppMessage(function () {
            // 用户点击了“转发”按钮
            return {
                 title: "小学生都能答出的脑筋急转弯，看看你能答对多少？",
                 imageUrl: "resource/assets/common/title11.png"
            }
        })
        try{
            if(wx.getUpdateManager())
            {
                var updateManager = wx.getUpdateManager();
                updateManager.onCheckForUpdate(function(res){console.warn("onCheckForUpdate",res.hasUpdate)});
                updateManager.onUpdateReady(function(){updateManager.applyUpdate()});
                updateManager.onUpdateFailed(function(){})}
            }
            catch(ex){}
        await this.loadResource();
        this.createGameScene();
        const result = await RES.getResAsync("description_json");
        console.log(this.stage.stageWidth);
        console.log(this.stage.stageHeight);
        const userInfo = await (platform as any).getAVUserInfo();
        console.log("游戏初始化");
        console.log("用户信息" + userInfo);
        
        
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

  private btnOpen:eui.Button;
  protected createGameScene(): void {
                console.log("游戏初始化了");
                SoundManager.getInstance();
                LevelDataManager.getInstance();
                SceneGame.getInstance();
                this.addChild(SceneGame.getInstance());
                let data =  LevelDataManager.getInstance().GetMileStone();//218 8
                if(data > 1)
                {       
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
                type:"closedata"
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
                type:"opendata"
            });
            //主要示例代码结束            
            this.isdisplay = true;
        }
 
    }
}
