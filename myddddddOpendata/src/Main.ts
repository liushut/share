class Main extends egret.DisplayObjectContainer {

    private readonly scrollView = new egret.ScrollView();
    private bgtexture:egret.Texture;
    private panel : egret.Texture;
    private xuanranTexture:egret.Texture;
    private mysocre:number;//自己的分数
    private myOpenId:string;
    private myObj:any;
    public constructor() {
        super();
        wx.onMessage(data =>{
            console.log(data);
            //把自己分数穿过来
             this.mysocre = data.mysocre;
             this.myOpenId = data.openid;
            if(data.isDisplay)
            {
                //获取小游戏开放数据接口
                wx.getFriendCloudStorage({
                    keyList:["score"],//keyList是存储的KVdata的key值   
                    success:res=>{
                        console.log(res);
                        if(!res.data)
                        {
                            return;
                        }
                        this.setFriendList(res.data);//res.data    Array.<UserGameData>   
                    },
                    fail:err=>{
                        console.log(err);
                    },
                    complete:()=>{

                    }
                })
            }
            else if(data.isGroup)
            {
                wx.getGroupCloudStorage({
                    shareTicket: "data.share",
                    keyList: ["score"],
                    success: function (res) {
                        console.log(res);
                        if (!res.data) {
                            return;
                        }
                        this.setGroupList(res.data);
                    },
                    fail: function () { },
                    complete: function () { }
                })
            }
            else {
                this.cancelGame();
            }
        });
        //获取小游戏开放数据接口   结束
        let imageLoader = new egret.ImageLoader();//构造底图片
        imageLoader.addEventListener(egret.Event.COMPLETE,(event:egret.Event) =>{
            let imgloader = <egret.ImageLoader>event.currentTarget;
            this.bgtexture = new egret.Texture();
            this.bgtexture._setBitmapData(imgloader.data);
        },this);
        imageLoader.load("resource/assets/paihangbang/diBg.png");
        
        let imageLoader1 = new egret.ImageLoader();
        imageLoader1.addEventListener(egret.Event.COMPLETE, (event: egret.Event) => {
            let imageLoader2 = <egret.ImageLoader>event.currentTarget;
            this.xuanranTexture = new egret.Texture();
            this.xuanranTexture._setBitmapData(imageLoader2.data);
        }, this);
        imageLoader1.load("resource/assets/paihangbang/xuanxiangkuang.png");//背景图片
        // let imageLoader1 = new egret.ImageLoader();
        // imageLoader1.addEventListener(egret.Event.COMPLETE, (event: egret.Event) => {
        //     let imageLoader = <egret.ImageLoader>event.currentTarget;
        //     this.panel = new egret.Texture();
        //     this.panel._setBitmapData(imageLoader.data);
        // }, this);
        // imageLoader1.load("resource/assets/panel_bg.png");//背景图片


         //测试点击
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, (evt: egret.TouchEvent) => {
            console.log('子域输出点击');
        }, this);
    }

   
    //自己的数据   自己排序
    private  gameData = [
        { openId: '', avatarUrl: '', nickName: 'liu', data: [{ score: 100, time: 1000 }]},
        { openId: '', avatarUrl: '', nickName: 'xu', data: [{ score: 101, time: 100 }] },
        { openId: '', avatarUrl: '', nickName: 'li', data: [{ score: 102, time: 1700 }] },
        { openId: '', avatarUrl: '', nickName: 'peony', data: [{ score: 103, time: 1800 }]},
        { openId: '', avatarUrl: '', nickName: 'peony', data: [{ score: 104, time: 1900 }]},
        { openId: '', avatarUrl: '', nickName: 'peony', data: [{ score: 105, time: 1070 }]}

    ]
    private setGroupList(groupList:any)
    {
        this.setFriendList(groupList);
    }
    private showMy(myscore:number)
    {
        this.myObj = {
                key: 0,
                nickname:"1",
                avatarUrl:"2",
                openid:"12",
                scroes: 0
        };
        for(let i = 0; i<this.totolGroup.length;i++)
        {
            if(this.totolGroup[i].scroes == myscore && this.myOpenId == this.totolGroup[i].openid)//openID相同才确定为同一人。
            {
                this.myObj.key = this.totolGroup[i].key;
                this.myObj.nickname = this.totolGroup[i].nickname;
                this.myObj.avatarUrl = this.totolGroup[i].avatarUrl;
                this.myObj.scroes = this.totolGroup[i].scroes;
                this.myObj.openid = this.totolGroup[i].openid;
                break;
            }
        }
         const container = new egret.DisplayObjectContainer();
         container.x = this.scrollView.x;
         container.y = this.scrollView.y + this.scrollView.height + 50;
         this.addChild(container);
         //自己图片
          let bitmapBg = new egret.Bitmap(this.bgtexture);
                var rect:egret.Rectangle = new egret.Rectangle(30,31,40,41);
                bitmapBg.scale9Grid = rect;
                bitmapBg.width = 460;
                bitmapBg.height = 95;
                container.addChild(bitmapBg);

                
                let bitmapXuanran = new egret.Bitmap(this.xuanranTexture);
                var rect1:egret.Rectangle = new egret.Rectangle(30,31,40,41);
                bitmapXuanran.scale9Grid = rect1;
                bitmapXuanran.width = 460;
                bitmapXuanran.height = 95;
                container.addChild(bitmapXuanran);

                //排名
                let ranking = new egret.TextField();
                ranking.x = bitmapBg.x + 50
                ranking.y = 46;
                ranking.size = 32;
                ranking.textColor = 0x111111;
                ranking.text = this.myObj.key;
                container.addChild(ranking);
                //头像
                var imageLoader: egret.ImageLoader = new egret.ImageLoader();
                egret.ImageLoader.crossOrigin = "anonymous";
                imageLoader.addEventListener(egret.Event.COMPLETE, (event: egret.Event) => {
                    var imageLoader = <egret.ImageLoader>event.currentTarget;
                    let texture = new egret.Texture();
                    texture._setBitmapData(imageLoader.data);
                    var bitmap: egret.Bitmap = new egret.Bitmap(texture);
                    bitmap.width = bitmap.height = 92;
                    bitmap.x = bitmapBg.x + 100;
                    bitmap.y = 16;
                    container.addChild(bitmap);
                }, this);
                imageLoader.load(this.myObj.avatarUrl);
                //名字
                let nicktxt = new egret.TextField();
                nicktxt.x = bitmapBg.x + 150;
                nicktxt.y = 50;
                nicktxt.text = '名字:' + this.myObj.nickName;
                container.addChild(nicktxt);

                let numtxt = new egret.TextField();
                numtxt.x = 260;
                numtxt.y = 50;
                numtxt.text = '得分:' + this.myObj.scroes;
                container.addChild(numtxt);

    }
    private totolGroup:Array<any>;
    private setFriendList(wxlist:any)
    {
        let dataList = [];
        wxlist.forEach((data)=>{//这个data是UserGameData元素
            if(data.KVDataList.length > 0)
            {
               dataList.push(data);
            }
            if(dataList.length == 0)
            {
                console.log("数组长度为0");
                return;
            }
            dataList.sort((a,b)=>{
                return b.KVDataList[0].value - a.KVDataList[0].value;
            })
        })
        this.totolGroup = [];
        for(let i = 0; i < dataList.length; i++)
        {
            let obj = {
                key: 0,
                nickname: "1",
                avatarUrl: "2",
                openid: "1121",
                scroes: 0
            };
            obj.key = i;
            obj.nickname = dataList[i].nickname;
            obj.avatarUrl = dataList[i].avatarUrl;
            obj.scroes = dataList[i].KVDataList[0].value;
            obj.openid = dataList[i].openid;
            this.totolGroup.push(obj);
        }
        this.runGame();
        this.showMy(this.mysocre);
    }
   
    private  runGame() {
        // let bitmap = new egret.Bitmap(this.panel);
        // bitmap.x = 80;
        // bitmap.y = 168;
        // this.addChild(bitmap);

        const listContainer = new egret.DisplayObjectContainer();
        this.scrollView.setContent(listContainer);
        this.scrollView.x = 80;
        this.scrollView.y = 168;
        this.scrollView.width = 300;
        this.scrollView.height = 400;//设置有几个高度的大小   默认显示几个。
        this.addChild(this.scrollView);

         this.totolGroup.forEach(//这里展示数据   每一行就是一个container
            (value, index) => {//value 是当前数组的元素   index 元素下标  0开始
                let item = new egret.DisplayObjectContainer();
                item.y = index * 130;//竖直方向上排序
                listContainer.addChild(item);

                let bitmapBg = new egret.Bitmap(this.bgtexture);
                var rect:egret.Rectangle = new egret.Rectangle(30,31,40,41);
                bitmapBg.scale9Grid = rect;
                bitmapBg.width = 460;
                bitmapBg.height = 95;
                item.addChild(bitmapBg);

                let bitmapXuanran = new egret.Bitmap(this.xuanranTexture);
                var rect1:egret.Rectangle = new egret.Rectangle(30,31,40,41);
                bitmapXuanran.scale9Grid = rect1;
                bitmapXuanran.width = 460;
                bitmapXuanran.height = 95;
                item.addChild(bitmapXuanran);
                //冠亚季
                if (index == 0) {
                    let imageLoader0: egret.ImageLoader = new egret.ImageLoader();
                    imageLoader0.addEventListener(egret.Event.COMPLETE, (event: egret.Event) => {
                        let imageLoader = <egret.ImageLoader>event.currentTarget;
                        let texture = new egret.Texture();
                        texture._setBitmapData(imageLoader.data);
                        var bit1: egret.Bitmap = new egret.Bitmap(texture);
                        bit1.width = bit1.height = 61;
                        bit1.x = bitmapBg.x + 50;
                        bit1.y = bitmapBg.y + bitmapBg.height / 2 - bit1.height / 2;
                        item.addChild(bit1);
                    }, this);
                    imageLoader0.load("resource/assets/paihangbang/guanjun.png");
                }
                else if (index == 1) {
                    var imageLoader1: egret.ImageLoader = new egret.ImageLoader();
                    imageLoader1.addEventListener(egret.Event.COMPLETE, (event: egret.Event) => {
                        let imageLoader = <egret.ImageLoader>event.currentTarget;
                        let texture = new egret.Texture();
                        texture._setBitmapData(imageLoader.data);
                        var bitmap1: egret.Bitmap = new egret.Bitmap(texture);
                        bitmap1.width = bitmap1.height = 61;
                        bitmap1.x = bitmapBg.x + 50;
                        bitmap1.y =  bitmapBg.y + bitmapBg.height / 2 - bitmap1.height / 2;
                        item.addChild(bitmap1);
                    }, this);
                    imageLoader1.load("resource/assets/paihangbang/yajun.png");
                }
                else if (index == 2) {
                    let imageLoader2: egret.ImageLoader = new egret.ImageLoader();
                    imageLoader2.addEventListener(egret.Event.COMPLETE, (event: egret.Event) => {
                        var imageLoader = <egret.ImageLoader>event.currentTarget;
                        let texture = new egret.Texture();
                        texture._setBitmapData(imageLoader.data);
                        var bitmap2: egret.Bitmap = new egret.Bitmap(texture);
                        bitmap2.width = bitmap2.height = 61;
                        bitmap2.x = bitmapBg.x + 50;
                        bitmap2.y =  bitmapBg.y + bitmapBg.height / 2 - bitmap2.height / 2;
                        item.addChild(bitmap2);
                    }, this);
                    imageLoader2.load("resource/assets/paihangbang/jijun.png");
                }
                else 
                {
                    //排名
                    let ranking = new egret.TextField();
                    ranking.x = bitmapBg.x + 50
                    ranking.y = 46;
                    ranking.size = 32;
                    ranking.textColor = 0x111111;
                    ranking.text = value.key + 1 + '';
                    item.addChild(ranking);
                }
                      //wx  头像  本质是bitmapdata
                if (value.avatarUrl.length > 0) {
                    var imageLoader: egret.ImageLoader = new egret.ImageLoader();
                    egret.ImageLoader.crossOrigin = "anonymous";
                    imageLoader.addEventListener(egret.Event.COMPLETE, (event: egret.Event) => {
                        var imageLoader = <egret.ImageLoader>event.currentTarget;
                        let texture = new egret.Texture();
                        texture._setBitmapData(imageLoader.data);
                        var bitmap: egret.Bitmap = new egret.Bitmap(texture);
                        bitmap.width = bitmap.height = 92;
                        bitmap.x = bitmapBg.x + 100;
                        bitmap.y = 16;
                        item.addChild(bitmap);
                    }, this);
                    imageLoader.load(value.avatarUrl);
                }
                //名字
                let nicktxt = new egret.TextField();
                nicktxt.x = bitmapBg.x + 150;
                nicktxt.y = 50;
                nicktxt.text = '名字:' + value.nickName;
                item.addChild(nicktxt);

                let numtxt = new egret.TextField();
                numtxt.x = 260;
                numtxt.y = 50;
                numtxt.text = '得分:' + value.data[0].scroes;
                item.addChild(numtxt);
            }, this);
    }
    private cancelGame(){//关闭   1
           for (let i = 0, l = this.numChildren; i < l; i++) {
            this.removeChildAt(0);
        }
        this.scrollView.removeContent();
        console.log('停止开放数据域');
    }
    
}