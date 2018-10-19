var egret = window.egret;var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = _super.call(this) || this;
        _this.scrollView = new egret.ScrollView();
        //自己的数据   自己排序
        _this.gameData = [
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
        ];
        wx.onMessage(function (data) {
            console.log(data);
            if (data.isdisplay) {
                //获取小游戏开放数据接口
                wx.getFriendCloudStorage({
                  keyList: ["score", "myscore"],
                    success: function (res) {
                        console.log(res);
                        if (!res.data) {
                            return;
                        }
                        _this.setFriendList(res.data); //res.data    Array.<UserGameData>
                      
                    },
                    fail: function (err) {
                        console.log(err);
                    },
                    complete: function () {
                    }
                });
            }
            else {
                _this.cancelGame();
            }
        });
        //获取小游戏开放数据接口   结束
        var imageLoader = new egret.ImageLoader(); //构造图片
        imageLoader.addEventListener(egret.Event.COMPLETE, function (event) {
            var imgloader = event.currentTarget;
            _this.bgtexture = new egret.Texture();
            _this.bgtexture._setBitmapData(imgloader.data);
        }, _this);
      imageLoader.load("resource/assets/opendata/xuangxiangdi.png");

        
        var imageLoader1 = new egret.ImageLoader();
        imageLoader1.addEventListener(egret.Event.COMPLETE, function (event) {
            var imageLoader = event.currentTarget;
            _this.panel = new egret.Texture();
            _this.panel._setBitmapData(imageLoader.data);
        }, _this);
         imageLoader1.load("resource/assets/panel_bg.png"); //背景图片
        //测试点击
        _this.addEventListener(egret.TouchEvent.TOUCH_TAP, function (evt) {
            console.log('子域输出点击');
        }, _this);
        return _this;
    }
    Main.prototype.testFreind = function (list) {
        list.sort(function (a, b) {
            return b.data[0].score - a.data[0].score;
        });
    };
    Main.prototype.setFriendList = function (wxlist) {
        var dataList = [];
        wxlist.forEach(function (data) {
            if (data.KVDataList.length > 0) {
                dataList.push(data);
            }
            if (dataList.length == 0) {
                console.log("数组长度为0");
                return;
            }
            dataList.sort(function (a, b) {
                return b.KVDataList[0].value - a.KVDataList[0].value;
            });
        });
        this.totolGroup = [];
        for (var i = 0; i < dataList.length; i++) {
            var obj = {
              key: 0,
              nickname: "1",
              avatarUrl: "2",
              scroes: 0
            };
            obj.key = i;
            obj.nickname = dataList[i].nickname;
            obj.avatarUrl = dataList[i].avatarUrl;
            obj.scroes = dataList[i].KVDataList[0].value;
            console.log(obj.nickname);
          console.log(obj.scroes);
            this.totolGroup.push(obj);
        }
      this.runGame();
    };
    Main.prototype.runGame = function () {
        var _this = this;
        var bitmap = new egret.Bitmap(this.panel);
        bitmap.x = 80;
        bitmap.y = 180;
        this.addChild(bitmap);
        var listContainer = new egret.DisplayObjectContainer();
        this.scrollView.setContent(listContainer);
        this.scrollView.x = bitmap.x;
        this.scrollView.y = bitmap.y;
        this.scrollView.width = bitmap.width;
        this.scrollView.height = bitmap.height; //设置有几个高度的大小   默认显示几个。
        this.addChild(this.scrollView);
       
        this.totolGroup.forEach(//这里展示数据   每一行就是一个container
        function (value, index) {
            var item = new egret.DisplayObjectContainer();
            item.y = index * 110; //竖直方向上排序
            listContainer.addChild(item);
            var bitmap = new egret.Bitmap(_this.bgtexture);
          var rect = new egret.Rectangle(30, 31, 40, 41);
          bitmap.scale9Grid = rect;
          bitmap.width = 460;
          bitmap.height = 95;
          item.addChild(bitmap);
            var ranking = new egret.TextField();
            ranking.x = 220;
            ranking.y = 46;
            ranking.size = 32;
          ranking.textColor = 0x111111;
            ranking.text = value.key + 1 + '';
            item.addChild(ranking);


            var nicktxt = new egret.TextField();
          nicktxt.textColor = 0x111111;
            nicktxt.y = 50;
          value.nickname = value.nickname.length <= 8 ? value.nickname : value.nickname.substr(0, 8) + "...";
          nicktxt.text = '名字:' + value.nickname;
            item.addChild(nicktxt);


            var numtxt = new egret.TextField();
            numtxt.x = 260;
            numtxt.y = 50;
          numtxt.textColor = 0x111111;
            numtxt.text = '得分:' + value.scroes; 
            item.addChild(numtxt);
            //wx  头像  本质是bitmapdata
            if (value.avatarUrl.length > 0) {
                var imageLoader = new egret.ImageLoader();
                egret.ImageLoader.crossOrigin = "anonymous";
                imageLoader.addEventListener(egret.Event.COMPLETE, function (event) {
                    var imageLoader = event.currentTarget;
                    var texture = new egret.Texture();
                    texture._setBitmapData(imageLoader.data);
                    var bitmap = new egret.Bitmap(texture);
                    bitmap.width = bitmap.height = 80;
                    bitmap.x = 100;
                    bitmap.y = 10;
                    item.addChild(bitmap);
                }, _this);
                imageLoader.load(value.avatarUrl);
            }
        }, this);
    };
    Main.prototype.cancelGame = function () {
        for (var i = 0, l = this.numChildren; i < l; i++) {
            this.removeChildAt(0);
        }
        this.scrollView.removeContent();
        console.log('停止开放数据域');
    };
    return Main;
}(egret.DisplayObjectContainer));
__reflect(Main.prototype, "Main");

;window.Main = Main;