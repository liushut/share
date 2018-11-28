var { Query, User } = AV;
class WeChatPlatform implements Platform {

    /**
     * 构造函数
     */
    public constructor() {
        this._init();
    }
     //开放数据域
    openDataContext:any;
    /**
     * 平台初始化
     */
    private _init() : void {
        this.openDataContext = new WxOpenDataContext();
    }
    
   public async shareCloud():Promise<any>
    {
        return new Promise(async function (resolve, reject) {
           if (LevelDataManager.isshipin == true) {//1看视频
                    LevelDataManager.getInstance().SetShare(1);
                  console.log("shareCloud isshipin" + LevelDataManager.isshipin); 
                }
                else if (LevelDataManager.isshipin== false) {//0 分享
                    LevelDataManager.getInstance().SetShare(0);
                    console.log("shareCloud isshipin" + LevelDataManager.isshipin);
                };
                resolve();
        })
    }
    public async shouAD():Promise<any>
    {
        return new Promise(function(resolve,reject){
            let winSize = (wx as any).getSystemInfoSync();
            console.log(winSize);
            let bannerHeight = 100;
            let bannerWidth = 320;
            let ad:any;
            if(winSize.model == "iPhone X")
            {
             ad = (wx as any).createBannerAd({
            adUnitId:"adunit-a57340565a6e2881",
            style:{
                left:50,
                top: winSize.screenHeight - bannerHeight,
                width: bannerWidth + 200
            }});
            }
            else 
            {
             ad = (wx as any).createBannerAd({
            adUnitId:"adunit-a57340565a6e2881",
            style:{
                left:35,
                top: winSize.screenHeight - bannerHeight,
                width: bannerWidth
            }});
            }
            console.log(ad.style.top + "top");
            console.log(ad.style.left + "left");
            console.log(winSize.screenWidth + "winSize.screenWidth");
            console.log(winSize.screenHeight  + "winSize.screenHeight");
            ad.show();
            LevelDataManager.oldADs = ad;
             resolve();
        })
    }
    async restShare()
    {
        this.randomShare();
        console.log(" restShare()");
    }
    async restartVideo()
    {
        return new Promise(function(resolve,reject){
            let videoAd = (wx as any).createRewardedVideoAd({
                adUnitId: 'adunit-597cc618faea8408'
            })
        videoAd.load().then(
              videoAd.show().then(()=>{
                console.log("视频成功");
            }).catch(err=>{
                console.log("视频失败");
                platform.restShare();
            }))
            videoAd.onClose(res=>{
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
                   }else if(LevelDataManager.shipinResult == 2)//30关红包
                   {
                       LevelDataManager.curMoneyNum++;
                        LevelDataManager.unlockMoneyNum++;
                        console.log("LevelDataManager.curMoney",LevelDataManager.curMoney);
                        console.log("LevelDataManager.showMoney",LevelDataManager.showMoney);
                        LevelDataManager.curMoney += LevelDataManager.showMoney;
                        console.log("相加后LevelDataManager.curMoney",LevelDataManager.curMoney)
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
            videoAd.onError(err=>{
                console.log("错误信息",err.errMsg,err.errCode);
                console.log("执行了");
            });
             resolve();
        })
    }
    async showVideoAD():Promise<any>
    {
        return new Promise(function(resolve,reject){
            let video = (wx as any).createRewardedVideoAd({ adUnitId: "adunit-be82bc3d51b4e7b9" });
            video.load().then(
                video.show().then(() => {
                    console.log("拉取视频成功")
                }).catch(err => {
                    console.log("视频拉取失败");
                    platform.testShare();
                })
            )
            
              video.onError(err=>{
                console.log("错误信息",err.errMsg,err.errCode);
            })
            video.onClose(res => {
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
        })
    }
    async tiaozhaoVideo() {
        return new Promise((resolve, reject) => {
            let videoAd = (wx as any).createRewardedVideoAd({
                adUnitId: 'adunit-1d0fb93e0bab0a56'
            });
             videoAd.load().then(() => videoAd.show().then(() => {
                console.log("解锁拉取视频成功")
            }).catch(err => {
                console.log("解锁视频拉取失败");
                console.log(err);
                (wx as any).shareAppMessage({
                    title: "小学生都能答出的脑筋急转弯，看看你能答对多少？",
                    imageUrl: "resource/assets/common/title11.png"
                });
                egret.Tween.get(SceneGame.getInstance().bingoLayer).wait(200).call(() => {
                     SceneGame.getInstance().bingoLayer.visible = false;
                    SceneGame.getInstance().bingoLayer.comboGroup.visible = false;
                    SceneGame.getInstance().levelScene.visible = false;
                    SceneGame.getInstance().bingoLayer.bingoGroup.visible = false;
                    SceneGame.getInstance().bingoLayer.trueGroup.visible = false;
                    SceneGame.getInstance().InitLevel(LevelDataManager.getInstance().curIcon);
                })
            }))
            videoAd.onError(err => {
                console.log(err)
            })
            videoAd.onClose(res => {
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
        })
    }
 
    async getAVUserInfo():Promise<any>{
        var self = this;
        return new Promise(async function ( resolve, reject) {
            await self.leancloudInit();//初始化
            await self.shareCloud();//分享是否开启
            let date = new Date();
            let hour = date.getHours();
            console.log(hour +"当前小时")
            if(LevelDataManager.getInstance().GetCurTime() == 0)
            {
                AV.User.loginWithWeapp().then(user => {
                const userInfo = user.toJSON();
                LevelDataManager.openId = userInfo.authData.lc_weapp.openid;
                LevelDataManager.sessionKey = userInfo.authData.lc_weapp.session_key;
               
               console.log(userInfo);
               console.log(LevelDataManager.openId);
               console.log(LevelDataManager.sessionKey);
               //存储这次登录时间
               LevelDataManager.getInstance().SetCurTime(hour);
            }).catch(
                () => {}
            );
            }
            else if(Math.abs(LevelDataManager.getInstance().GetCurTime() - hour) >= 1.5 )
            {
              AV.User.loginWithWeapp().then(user => {
                const userInfo = user.toJSON();
                LevelDataManager.openId = userInfo.authData.lc_weapp.openid;
                LevelDataManager.sessionKey = userInfo.authData.lc_weapp.session_key;
               
               console.log(userInfo);
               console.log(LevelDataManager.openId);
               console.log(LevelDataManager.sessionKey);
               //存储这次登录时间
               LevelDataManager.getInstance().SetCurTime(hour);
            }).catch(
                () => {}
            );  
            }  
             resolve();
        })
        
    }
    async AVshare():Promise<any>{
        return new Promise(async function(resolve,reject){
            let pajson = {
                gameId:1002,
                openId:LevelDataManager.openId,
                sessionKey:LevelDataManager.sessionKey,
                iv:LevelDataManager.iv,
                encryptedData:LevelDataManager.encryptedData}
                console.log("gameId  " + pajson.gameId);
                console.log("openId  " + pajson.openId);
                console.log("sessionKey " + pajson.sessionKey);
                console.log("iv  " + pajson.iv);
                console.log("evcryteData   " + pajson.encryptedData);
                AV.Cloud.run("share",pajson).then(function(data){
                console.log(data + "分享成功data");
                console.log(data.openId + "分享成功dataOPenID");
                resolve(data);
            },
            function(err)
            {

            });
        })
    }

    public async  testShare(){
    return new Promise((resolve, reject)=>{
            this.randomShare();
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
        
    })
  }
    public async leancloudInit()
    {
        var _selt = this;
        return new Promise(async function (resolve, reject) {
            let options = {
                appId: "ihRY3sOSgyBwNpfgdfOTxayc-gzGzoHsz",
                appKey: "tUbmQwyYk48bAghMg5mUERNl",
            };
            AV.init(options);
            resolve();
        });
    }
    
   
    async shareMyAppMessage(){
       this.randomShare();
    }

    randomShare(){
        let date = new Date();
        let time = date.getTime() + 2000;
        wx.setStorageSync("nextshareTime", time);
        let sinfo = LevelDataManager.getShareToInfo();
        console.log("pull share, info", sinfo);
        wx.shareAppMessage({
            title: sinfo.title,
            imageUrl: sinfo.imgURL,
            query: ""
        });
    }
}

//扩展开放域
class WxOpenDataContext{
     createDisplayObject(type, width, height) {
        let sharedCanvas = window["sharedCanvas"] as any;
        const bitmapdata = new egret.BitmapData(sharedCanvas);
        bitmapdata.$deleteSource = false;
        const texture = new egret.Texture();
        texture._setBitmapData(bitmapdata);
        const bitmap = new egret.Bitmap(texture);
        bitmap.width = width;
        bitmap.height = height;

        if (egret.Capabilities.renderMode == "webgl") {
            const renderContext = (egret as any).wxgame.WebGLRenderContext.getInstance();
            const context = renderContext.context;
            ////需要用到最新的微信版本
            ////调用其接口WebGLRenderingContext.wxBindCanvasTexture(number texture, Canvas canvas)
            ////如果没有该接口，会进行如下处理，保证画面渲染正确，但会占用内存。
            if (!context.wxBindCanvasTexture) {
                egret.startTick((timeStarmp) => {
                    egret.WebGLUtils.deleteWebGLTexture(bitmapdata.webGLTexture);
                    bitmapdata.webGLTexture = null;
                    return false;
                }, this);
            }
        }
        
        return bitmap;
    }
   
    postMessage(data) {
        // const openDataContext = wx.getOpenDataContext();
        let openDataContext = (wx as any).getOpenDataContext();
        openDataContext.postMessage(data);
    }
}