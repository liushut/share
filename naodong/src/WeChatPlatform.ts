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
            AV.Cloud.run('conf').then(function (data) {
                console.log(data);
                  let myshare:any;
                for (var key in data) {
                   console.log(key +  "--------------------------")
                   if(key == "share")
                   {
                       myshare = key;
                       console.log("myshare --------" + myshare);
                   }
                }
                //成功逻辑
                if (data.share == true) {
                    LevelDataManager.getInstance().SetShare(1);
                    console.log("开关开启，分享开启" + data.share + "           LevelDataManagerInstance     " + LevelDataManager.getInstance().isShare);  
                }
                else if (data.share == false) {
                    LevelDataManager.getInstance().SetShare(0);
                    console.log("开关关闭，分享关闭" + data.share + "            LevelDataManagerInstance     " + LevelDataManager.getInstance().isShare);
                };
                resolve(data.share);
            }, function (err) {
                //回调函数调用失败逻辑
                console.log("函数调用失败 --------------------- ");
                 LevelDataManager.getInstance().isShare = true;
            });
        })
    }
    public async shouAD():Promise<any>
    {
        return new Promise(function(resolve,reject){
            let winSize = (wx as any).getSystemInfoSync();
            console.log(winSize);
            let bannerHeight = 100;
            let bannerWidth = 300;
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
        })
    }
    
    async showVideoAD():Promise<any>
    {
        return new Promise(function(resolve,reject){
            let video = (wx as any).createRewardedVideoAd({ adUnitId: "adunit-be82bc3d51b4e7b9" });
            video.show().then(()=>{
                console.log("拉取视频成功")
            }).catch(err=>{
                console.log("视频拉取失败");
                // video.load().then(() => video.show())
                platform.testShare();
            });
            video.onClose(res => {
                // 用户点击了【关闭广告】按钮
                if (res && res.isEnded || res === undefined) {
                    // 正常播放结束，可以下发游戏奖励
                    console.log("正常播放");
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
                    console.log("result" + LevelDataManager.getInstance().GetLevelData(LevelDataManager.getInstance().curIcon).result);
                }
                else {
                    // 播放中途退出，不下发游戏奖励
                    console.log("提前关闭");
                }
            })
        })
    }
 
    async getAVUserInfo():Promise<any>{
        var self = this;
        return new Promise(async function (resolve, reject) {
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
               resolve(userInfo);
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
               resolve(userInfo);
               console.log(userInfo);
               console.log(LevelDataManager.openId);
               console.log(LevelDataManager.sessionKey);
               //存储这次登录时间
               LevelDataManager.getInstance().SetCurTime(hour);
            }).catch(
                () => {}
            );  
            }
        })
    }
    async AVshare():Promise<any>{
        return new Promise(async function(resole,reject){
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
                AV.Cloud.run("share",pajson).then(function(data){//用一个对象数组存。每次得到遍历数组中是否有openId相同。
                console.log(data + "分享成功data");
                console.log(data.openId + "分享成功dataOPenID");
                resole(data);
            },
            function(err)
            {

            });
        })
    }

    public async  testShare(){
    return new Promise((resole, reject)=>{
        if (LevelDataManager.getInstance().GetShare() == 1) {
            (wx as any).shareAppMessage({
                title: "小学生都能答出的脑筋急转弯，看看你能答对多少？",
                imageUrl: "resource/assets/common/title11.png",
                fail: function () {
                    console.log("fail函数有效");
                    (wx as any).showModal({
                        title: "提示",
                        content: "可以分享快乐给朋友哦~~~",
                        showCancel: false,
                        success: function (res) {
                            if (res.confirm == true) {
                                platform.testShare();
                            }
                        }
                    });
                }
            });
        }
        else if (LevelDataManager.getInstance().GetShare() == 0) {
            (wx as any).shareAppMessage({
                title: "小学生都能答出的脑筋急转弯，看看你能答对多少？",
                imageUrl: "resource/assets/common/title11.png"
            });
        }
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

   
    async shareAppMessage(){
        (wx as any).shareAppMessage({
        title: "小学生都能答出的脑筋急转弯，看看你能答对多少？",
        imageUrl: "resource/assets/common/title11.png"
      });
         if (LevelDataManager.shareNum % 2 == 0) {
                egret.Tween.get(this).wait(200).call(function () {
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
                  console.log("result" + LevelDataManager.getInstance().GetLevelData(LevelDataManager.getInstance().curIcon).result);
                  LevelDataManager.shareNum++;
                  console.log(" LevelDataManager.shareNum" + LevelDataManager.shareNum);
                });
              }
              else if (LevelDataManager.shareNum % 2 == 1) {
                egret.Tween.get(this).wait(200).call(function () {
                  (wx as any).showModal({
                    title: "提示",
                    content: "别总骚扰这个群的朋友啦，换个群分享吧~",
                    showCancel: false,
                    success: function (res) {
                      if (res.confirm == true) {
                        platform.shareAppMessage();
                      }
                    }
                  });
                  LevelDataManager.shareNum++;
                  console.log(" LevelDataManager.shareNum" + LevelDataManager.shareNum);
                });
              }
    }
   
    async updateShareMenu(){
        var self = this;
        (wx as any).shareAppMessage({
            title: "小学生都能答出的脑筋急转弯，看看你能答对多少？",
            imageUrl: "resource/assets/common/title11.png",
            success: function (res) {
                console.log("主动转发成功");
                let theTickets = res.shareTickets;
                if (res.shareTickets) {//转发群成功后判断是否能继续转发
                    (wx as any).getShareInfo({
                        shareTicket: theTickets,
                        success: function (data) {
                            LevelDataManager.encryptedData = data.encryptedData;
                            LevelDataManager.iv = data.iv;
                            console.log("encryptedData 得到" + LevelDataManager.encryptedData);
                            console.log("iv 得到" + LevelDataManager.iv);
                            let pajson = {
                                gameId: 1002,
                                openId: LevelDataManager.openId,
                                sessionKey: LevelDataManager.sessionKey,
                                iv: LevelDataManager.iv,
                                encryptedData: LevelDataManager.encryptedData
                            }
                            console.log("gameId  " + pajson.gameId);
                            console.log("openId  " + pajson.openId);
                            console.log("sessionKey " + pajson.sessionKey);
                            console.log("iv  " + pajson.iv);
                            console.log("evcryteData   " + pajson.encryptedData);
                            AV.Cloud.run("share", pajson).then(function (data) {
                                console.log(data + "分享成功data");
                                for (var key1 in data) {
                                    console.log(key1 + "why");//输出can_share
                                    var canShare = key1;
                                    console.log(data[canShare] + "这里面的指")
                                }
                                console.log("转发群,分享");
                                if(data[canShare] == true)
                                {
                                console.log("可以继续分享");
                                SceneGame.getInstance().bingoLayer.visible = false;
                                SceneGame.getInstance().bingoLayer.erroGroup.visible = false;

                                SoundManager.getInstance().windowSoundChanel = SoundManager.getInstance().windowSound.play(0, 1);
                                SoundManager.getInstance().windowSoundChanel.volume = 1;
                                SceneGame.getInstance().bingoLayer.visible = true;
                                SceneGame.getInstance().bingoLayer.trueGroup.visible = true;
                                SceneGame.getInstance().bingoLayer.daandi.visible = true;
                                SceneGame.getInstance().hintBg(true);
                                SceneGame.getInstance().bingoLayer.labelresult.text =
                                LevelDataManager.getInstance().GetLevelData(LevelDataManager.getInstance().curIcon).result;
                                SceneGame.getInstance().bingoLayer.labelExplain.text = "解释:   " +
                                    LevelDataManager.getInstance().GetLevelData(LevelDataManager.getInstance().curIcon).explain
                                    + "   ";
                                console.log("result" + LevelDataManager.getInstance().GetLevelData(LevelDataManager.getInstance().curIcon).result);
                                }
                                else if(data[canShare] == false)
                                {
                                    (wx as any).showModal({
                                        title:"不要总骚扰这个群",
                                        content:"不可以骚扰这个群的朋友啦，换个群分享吧~",
                                        showCancel:false,//不显示取消按钮
                                        success:function(res){
                                            if(res.confirm == true)
                                            {
                                                // platform.updateShareMenu();
                                            }
                                        }
                                    })
                                }


                            },
                                function (err) {
                                console.log("函数调用失败23333333");
                                SceneGame.getInstance().bingoLayer.visible = false;
                                SceneGame.getInstance().bingoLayer.erroGroup.visible = false;

                                SoundManager.getInstance().windowSoundChanel = SoundManager.getInstance().windowSound.play(0, 1);
                                SoundManager.getInstance().windowSoundChanel.volume = 1;
                                SceneGame.getInstance().bingoLayer.visible = true;
                                SceneGame.getInstance().bingoLayer.trueGroup.visible = true;
                                SceneGame.getInstance().bingoLayer.daandi.visible = true;
                                SceneGame.getInstance().hintBg(true);
                                SceneGame.getInstance().bingoLayer.labelresult.text =
                                LevelDataManager.getInstance().GetLevelData(LevelDataManager.getInstance().curIcon).result;
                                SceneGame.getInstance().bingoLayer.labelExplain.text = "解释:   " +
                                    LevelDataManager.getInstance().GetLevelData(LevelDataManager.getInstance().curIcon).explain
                                    + "   ";
                                console.log("result" + LevelDataManager.getInstance().GetLevelData(LevelDataManager.getInstance().curIcon).result);
                                });
                        }
                    });
                }
                else {
                    console.log("分享到个人");
                    SceneGame.getInstance().bingoLayer.visible = true;
                    SceneGame.getInstance().bingoLayer.erroGroup.visible = true;
                    SceneGame.getInstance().hintBg(true);
                }
          
        }
      })
    }

    
    async wxCloudInit(){}
    async wxCloudCallFunc(){}
    async wxGetCloudData(){
        return {data:""}
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
        const openDataContext = wx.getOpenDataContext();
        openDataContext.postMessage(data);
    }
}