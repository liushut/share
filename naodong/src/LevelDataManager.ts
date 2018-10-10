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
    public  static shareNum:number = 0;//分享次数
    public   curIcon:number = 1;;//当前关卡
    public   curIndex:number = 0;//当前段位
    public   static tempIndex = 0;//当前页面
    public    isShare:boolean = true;
    public   static isLogin:boolean = true;


    public  static encryptedData:any;
    public  static iv:any;
    public  static openId:any;
    public  static sessionKey:any;
    public static getInstance()
    {
        if(LevelDataManager.levelDataManager == null)
        {
            LevelDataManager.levelDataManager = new LevelDataManager();
        }
        return LevelDataManager.levelDataManager;
    }

   
    //关卡数据的数据组
    private levelDataItemList:LevelDataItem[] = [];

    public constructor()
    {
        //使用RES读取和构建JSON数据。Json数据可以直接解析到目标结构
        this.levelDataItemList = RES.getRes("test_json");
    }


    //通过关卡号获取数据
    public GetLevelData(level):LevelDataItem
    {
        if(level < 0)
        {
            console.log("关卡<0");
            return ;
        }
        
        if(level >= this.levelDataItemList.length)
        {
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
    public getAd()
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
            LevelDataManager.oldADs = newad;
    }
}

window["LevelDataItem"] = LevelDataItem;
window["LevelDataManager"] = LevelDataManager;