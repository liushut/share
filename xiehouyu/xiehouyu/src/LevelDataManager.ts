// class  LevelDataItem
// {
//     public result:string;//答案
//     public question:string;//题目
//     public chaotic:string;//选择内容  固定14
//     public explain:string;
// }
class LevelDataItemXie
{
    public word:string[];
    public answer:string
}

class LevelDataManager//关卡数据管理 
{
    public  static oldADs:any;
    private static levelDataManager:LevelDataManager;
    public  static shareNum:number = 1;//分享次数
    public   curIcon:number = 1;;//当前题目数
    private   curIndex:number = 1;//当前关卡数
    public   static tempIndex = 0;//当前页面
    public   isShare:boolean = false;
    public   static isLogin:boolean = true;

    public  static comboTen:number = 1;

    public  static encryptedData:any;
    public  static iv:any;
    public  static openId:any;
    public  static sessionKey:any;
    /**是否返回前面的关数了 */
    static isBack = false;
    /**解锁开关 其余0false分享，1true视频*/
    static isJiesuoshipin = 3;
    /**红包的视频开关,true视频,false分享*/
    static videoOrshare = false;
    /**1红包提现 2显示答案 3红点*/
    static onshowNum = 0;
    /**分享时间是否在2s内  是则不显示答案*/  
    static  isShareTime = false;
    /**红包次数 */
	static curMoneyNum = 1;
	/**已经解锁红包次数 */
	static unlockMoneyNum = 1;
    /**每个红包的数值 */
	static showMoney  = 0;
    /**红包余额 */
	static curMoney = 0;
    /**随机分享文案 */
    static shareTitles:string[] = [];
    /**随机分享图片 */
	static shareImgs:string[] = [];
    /**看视频结果 */
    static shipinResult = 0;
    /**视频开关 */
    static isshipin = false;
    /**是否打开红包功能 */
	static enableHongBao = false;
  	/**更多游戏按钮的图标配置 */
	static moreGamesIcons:string[] = [];
	/**更多游戏按钮的跳转appid配置 */
	static moreGamesAppIDs:string[] = [];
    /**
     * 没有点击领取按钮之前的红包次数
     */
    static beforeUnlockMoneyNum = 0;
    public static getInstance()
    {
        if(LevelDataManager.levelDataManager == null)
        {
            LevelDataManager.levelDataManager = new LevelDataManager();
        }
        return LevelDataManager.levelDataManager;
    }
   static SaveHongbaoNum(){
        wx.setStorageSync("curMoneyNum", LevelDataManager.curMoneyNum);
        wx.setStorageSync("unlockMoneyNum", LevelDataManager.unlockMoneyNum);
        wx.setStorageSync("curMoney",LevelDataManager.curMoney);
    }
    //关卡数据的数据组
    private levelDataItemList:LevelDataItemXie[] = [];
    public constructor()
    {
        //使用RES读取和构建JSON数据。Json数据可以直接解析到目标结构
        this.levelDataItemList = RES.getRes("xietiku_json");
        LevelDataManager.curMoneyNum = parseInt((wx.getStorageSync("curMoneyNum") || "1") as string);
		LevelDataManager.unlockMoneyNum = parseInt((wx.getStorageSync("unlockMoneyNum") || "1")as string);
        LevelDataManager.curMoney = parseInt((wx.getStorageSync("curMoney") || "0") as string);
        LevelDataManager.shipinResult = 0;
        LevelDataManager.beforeUnlockMoneyNum = parseInt((wx.getStorageSync("beforeUnlockMoneyNum") || "1") as string);
        
    }

    public GetShare()
    {
        let milestone = egret.localStorage.getItem("SHARE");
        if(milestone == "" || milestone == null)
        {
            milestone = "0";//默认0关闭  1 为开启
        }
        return parseInt(milestone);
    }
    public SetShare(share:number)
    {
         egret.localStorage.setItem("SHARE",share.toString());
    }
    //通过关卡号获取数据
    public GetLevelData(level):LevelDataItemXie
    {
        if(level < 0)
        {
            console.log("关卡<0");
            return ;
        }
      
        if (level >= this.levelDataItemList.length) {
            level = this.levelDataItemList.length - 1;
        }
        return this.levelDataItemList[level];
    }

    //获取当前游戏的最远进度
    public GetMileStone():number
    {
        let milestone = egret.localStorage.getItem("MAX_MILESTONE");
        if(milestone == "" || milestone == null)
        {
            milestone = "1";
        }
        return parseInt(milestone);
    }
    //获取当前时间  小时
    public GetCurTime():number
    {
        let time = egret.localStorage.getItem("CURTIME");
        if(time == "" || time == null)
        {
            time = "0";
        }
        return parseInt(time);
    }
    //存储当前时间
    public SetCurTime(time:number)
    {
        egret.localStorage.setItem("CURTIME",time.toString());
    }

    //设置当前游戏最远进度
    public SetMileStone(index:number)
    {
        egret.localStorage.setItem("MAX_MILESTONE",index.toString());
    }

    //拉取banner广告
    public getAd():any
    {
        if(LevelDataManager.oldADs)
        {
            LevelDataManager.oldADs.hide();
            LevelDataManager.oldADs.destroy();
            console.log("销毁");
        }
            let newad:any;
            let winSize = (wx as any).getSystemInfoSync();
            console.log(winSize);
            let pixelRatio = winSize.pixelRatio;
            let screenWidth = winSize.screenWidth*pixelRatio;
            let screenHeight = winSize.screenHeight*pixelRatio;
            let bannerHeight = 100;
            let bannerWidth = 320;
            let ad:any;
            let bi = screenHeight / screenWidth;
            let adleft = 35;
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
        else if (bi < (2208 / 1242)){
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
              newad = (wx as any).createBannerAd({
            adUnitId:"adunit-a57340565a6e2881",
            style:{
                left:adleft,
                top: winSize.screenHeight - bannerHeight,
                width: bannerWidth
            }});
           
            console.log(winSize.screenWidth + "winSize.screenWidth");
            console.log(winSize.screenHeight  + "winSize.screenHeight");
            newad.show();
            newad.onError(err=>{
                console.log("错误信息",err.errMsg,err.errCode);
            })
            LevelDataManager.oldADs = newad;
            return LevelDataManager.oldADs;
    }

    public  SetCurIndex(index:number)
    {
         egret.localStorage.setItem("CurIndex",index.toString());
    }
    public GetCurIndex()
    {
        let index = egret.localStorage.getItem("CurIndex");
        if(index == "" || index == null)
        {
            index = "1";
        }
        return parseInt(index);
    }
    
    static readShareCodeRes(res:any){
		LevelDataManager.shareTitles = res ? res.sTitles : [];
		LevelDataManager.shareImgs = res ? res.sImgs : [];
        LevelDataManager.enableHongBao = res?res.hb:false;
        LevelDataManager.isshipin = res?res.cv:false;   
        LevelDataManager.videoOrshare = res?res.hbcv:false;
        LevelDataManager.moreGamesIcons = res ? res.mgics || [] : [];
        LevelDataManager.moreGamesAppIDs = res ? res.mgids || [] : [];
		LevelDataManager.moreGamesAppIDs.length = LevelDataManager.moreGamesIcons.length;
        LevelDataManager.isJiesuoshipin = res ? res.ulevelNum : 3;
        console.log("res", res);
	}
    	/**创建一个分享信息对象，用于拉起分享 */
	static getShareToInfo(baseQuery?:string){
		let index = Math.floor(Math.random()*LevelDataManager.shareImgs.length);
		let title = LevelDataManager.shareTitles[index];
		let imgName = LevelDataManager.shareImgs[index];
		let imgURL = R.webPath + "imgs/" + imgName;
		//往微信分享参数里加入一个sImg，表示本次分享用的是第几张分享图
		let query = (baseQuery && baseQuery.length > 0 ? baseQuery + "&" : "") + `sImg=${imgName}`;
		let info = { title:title, imgURL:imgURL};
		return info;
	}
}

window["LevelDataItemXie"] = LevelDataItemXie;
window["LevelDataManager"] = LevelDataManager;