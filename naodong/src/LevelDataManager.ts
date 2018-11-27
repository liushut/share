class  LevelDataItem
{
    public result:string;//答案
    public question:string;//题目
    public chaotic:string;//选择内容  固定14
    public explain:string;
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
    
   
    /**红包要么视频要么分享,默认false视频*/
    static videoOrshare = false;
    /**1红包提现 2显示答案 */
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
    private levelDataItemList:LevelDataItem[] = [];
    public constructor()
    {
        //使用RES读取和构建JSON数据。Json数据可以直接解析到目标结构
        this.levelDataItemList = RES.getRes("test_json");
        LevelDataManager.curMoneyNum = parseInt((wx.getStorageSync("curMoneyNum") || "1") as string);
		LevelDataManager.unlockMoneyNum = parseInt((wx.getStorageSync("unlockMoneyNum") || "1")as string);
        LevelDataManager.curMoney = parseInt((wx.getStorageSync("curMoney") || "0") as string);
        LevelDataManager.shipinResult = 0;
        
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
    public GetLevelData(level):LevelDataItem
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
            let winSize = wx.getSystemInfoSync();
            console.log(winSize);
            let bannerHeight = 100;
            let bannerWidth = 300;
            let newad:any;
             if(winSize.model == "iPhone X")
            {
            newad = (wx as any).createBannerAd({
            adUnitId:"adunit-a57340565a6e2881",
            style:{
                left:0,
                top: winSize.screenHeight - bannerHeight - 40,
                width: bannerWidth + 300,
                
            }});
            }
            else if(winSize.model == "iPhone 7 Plus" || winSize.model == "iPhone 6 Plus")
            {
                newad = (wx as any).createBannerAd({
                adUnitId:"adunit-a57340565a6e2881",
                style:{
                    left:30,
                    top: winSize.screenHeight - bannerHeight - 15,
                    width: bannerWidth + 50
                }});
            }
               else if(winSize.model == "iPhone 6S Plus")
            {
             newad = (wx as any).createBannerAd({
            adUnitId:"adunit-a57340565a6e2881",
            style:{
                left:15,
                top: winSize.screenHeight - bannerHeight - 20,
                width: bannerWidth + 150
            }});
            }
            else 
            {
            newad = (wx as any).createBannerAd({
            adUnitId:"adunit-a57340565a6e2881",
            style:{
                left:35,
                top: winSize.screenHeight - bannerHeight,
                width: bannerWidth
            }});
            }
            console.log(newad.style.top + "top");
            console.log(newad.style.left + "left");
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

window["LevelDataItem"] = LevelDataItem;
window["LevelDataManager"] = LevelDataManager;