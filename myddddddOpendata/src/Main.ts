class Main extends egret.DisplayObjectContainer {

    private readonly scrollView = new egret.ScrollView();
    private bgtexture:egret.Texture;
    private panel : egret.Texture;

    public constructor() {
        super();
        wx.onMessage(data =>{
            console.log(data);
            if(data.isDisplay)
            {
                //获取小游戏开放数据接口
                wx.getFriendCloudStorage({
                    keyList:["score","myscore"],
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
            else 
            {
                this.cancelGame();
            }
        });
        //获取小游戏开放数据接口   结束
        let imageLoader = new egret.ImageLoader();//构造图片
        imageLoader.addEventListener(egret.Event.COMPLETE,(event:egret.Event) =>{
            let imgloader = <egret.ImageLoader>event.currentTarget;
            this.bgtexture = new egret.Texture();
            this.bgtexture._setBitmapData(imgloader.data);
        },this);
        imageLoader.load("resource/assets/panel_shop_01.png");
        

        let imageLoader1 = new egret.ImageLoader();
        imageLoader1.addEventListener(egret.Event.COMPLETE, (event: egret.Event) => {
            let imageLoader = <egret.ImageLoader>event.currentTarget;
            this.panel = new egret.Texture();
            this.panel._setBitmapData(imageLoader.data);
        }, this);
        imageLoader1.load("resource/assets/panel_bg.png");//背景图片


         //测试点击
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, (evt: egret.TouchEvent) => {
            console.log('子域输出点击');
        }, this);
    }

   
    //自己的数据   自己排序
    private  gameData = [
        { openId: '', avatarUrl: '', nickName: 'liu', data: [{ score: 100, time: 1000 }] },
        { openId: '', avatarUrl: '', nickName: 'xu', data: [{ score: 101, time: 100 }] },
        { openId: '', avatarUrl: '', nickName: 'li', data: [{ score: 102, time: 1700 }] },
        { openId: '', avatarUrl: '', nickName: 'peony', data: [{ score: 103, time: 1800 }] },
        { openId: '', avatarUrl: '', nickName: 'peony', data: [{ score: 104, time: 1900 }] },
        { openId: '', avatarUrl: '', nickName: 'peony', data: [{ score: 105, time: 1070 }] },
        { openId: '', avatarUrl: '', nickName: 'peony', data: [{ score: 106, time: 1030 }] },
        { openId: '', avatarUrl: '', nickName: 'peony', data: [{ score: 107, time: 1010 }] },
        { openId: '', avatarUrl: '', nickName: 'peony', data: [{ score: 108, time: 1020 }] },
        { openId: '', avatarUrl: '', nickName: 'peony', data: [{ score: 109, time: 1030 }] },
        { openId: '', avatarUrl: '', nickName: 'peony', data: [{ score: 111, time: 1040 }] },
        { openId: '', avatarUrl: '', nickName: 'peony', data: [{ score: 112, time: 1050 }] },
        { openId: '', avatarUrl: '', nickName: 'peony', data: [{ score: 123, time: 1060 }] },
        { openId: '', avatarUrl: '', nickName: 'feng', data: [{ score: 123, time: 1060 }] },
        { openId: '', avatarUrl: '', nickName: 'peony', data: [{ score: 123, time: 1060 }] },
        { openId: '', avatarUrl: '', nickName: 'peony', data: [{ score: 123, time: 1060 }] },
        { openId: '', avatarUrl: '', nickName: 'peony', data: [{ score: 123, time: 1060 }] },
        { openId: '', avatarUrl: '', nickName: 'GG', data: [{ score: 11123, time: 1060 }] },
        { openId: '', avatarUrl: '', nickName: 'peony', data: [{ score: 123, time: 1060 }] },
        { openId: '', avatarUrl: '', nickName: 'tiantian', data: [{ score: 16237, time: 1080 }] }
    ]
    private testFreind(list:any)
    {
            list.sort((a,b)=>{
                return b.data[0].score - a.data[0].score;
            })

    
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
                nickname:"1",
                avatarUrl:"2",
                scroes: 0
            };
            obj.key = i;
            obj.nickname = dataList[i].nickname;
            obj.avatarUrl = dataList[i].avatarUrl;
            obj.scroes = dataList[i].KVDataList[0].value;
            this.totolGroup.push(obj);
        }
        this.runGame();
    }
   
    private  runGame() {
        let bitmap = new egret.Bitmap(this.panel);
        bitmap.x = 80;
        bitmap.y = 168;
        this.addChild(bitmap);

        const listContainer = new egret.DisplayObjectContainer();
        this.scrollView.setContent(listContainer);
        this.scrollView.x = bitmap.x;
        this.scrollView.y = bitmap.y;
        this.scrollView.width = bitmap.width;
        this.scrollView.height = bitmap.height;//设置有几个高度的大小   默认显示几个。
        this.addChild(this.scrollView);

         this.totolGroup.forEach(//这里展示数据   每一行就是一个container
            (value, index) => {//value 是元素   index 元素下标  0开始
                let item = new egret.DisplayObjectContainer();
                item.y = index * 130;//竖直方向上排序
                listContainer.addChild(item);

                let bitmap = new egret.Bitmap(this.bgtexture);
                 var rect:egret.Rectangle = new egret.Rectangle(30,31,40,41);
                 bitmap.scale9Grid = rect;
                bitmap.width = 460;
                bitmap.height = 95;
                item.addChild(bitmap);

                let ranking = new egret.TextField();
                ranking.y = 46;
                ranking.size = 32; 
                ranking.textColor = 0x111111;
                ranking.text = value.key + 1 + '';
                item.addChild(ranking);


                let nicktxt = new egret.TextField();
                nicktxt.y = 50;
                nicktxt.text = '名字:' + value.nickName;
                item.addChild(nicktxt);

                let numtxt = new egret.TextField();
                numtxt.x = 260;
                numtxt.y = 50;
                numtxt.text = '得分:' + value.data[0].scroes;
                item.addChild(numtxt);

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
                        bitmap.x = 48;
                        bitmap.y = 16;
                        item.addChild(bitmap);
                    }, this);
                    imageLoader.load(value.avatarUrl);
                }
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