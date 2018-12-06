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
            this.totolGroup.push(obj);
        }
        this.runGame();
    };
    Main.prototype.runGame = function () {
        var _this = this;
        var listContainer = new egret.DisplayObjectContainer();
        this.scrollView.setContent(listContainer);
        this.scrollView.x = 55;
        this.scrollView.y = 300;
        this.scrollView.width = 600; //bitmap.width
        this.scrollView.height = 680; //设置有几个高度的大小   默认显示几个。
        this.addChild(this.scrollView);
        this.totolGroup.forEach(//这里展示数据   每一行就是一个container
        function (value, index) {
            var item = new egret.DisplayObjectContainer();
            item.y = index * 100; //竖直方向上排序
            listContainer.addChild(item);
            var bitmap = new egret.Bitmap(_this.bgtexture);
            var rect = new egret.Rectangle(30, 31, 40, 41);
            bitmap.scale9Grid = rect;
            bitmap.width = 530;
            bitmap.height = 95;
            item.addChild(bitmap);
            //排名
            var ranking = new egret.TextField();
            ranking.x = bitmap.x + 20;
            ranking.y = bitmap.y + bitmap.height / 2 - 20;
            ranking.size = 45;
            ranking.textColor = 0x111111;
            ranking.text = value.key + 1 + '';
            item.addChild(ranking);

          // 头像框底
          var imgTouxiangdi = new egret.ImageLoader(); //构造图片
          imgTouxiangdi.addEventListener(egret.Event.COMPLETE, function (event) {
            var imgloader = event.currentTarget;
            var texturedi = new egret.Texture();
            texturedi._setBitmapData(imgTouxiangdi.data);
            var dibitmap = new egret.Bitmap(texturedi);
            dibitmap.width = dibitmap.height = 80;
            dibitmap.x = ranking.x + 60;
            dibitmap.y = bitmap.y + 10;
            item.addChild(dibitmap);
          }, _this);
          imgTouxiangdi.load("resource/assets/opendata/touxiangkuang.png");
            //wx  头像  本质是bitmapdata = texture
            if (value.avatarUrl.length > 0) {
                var imageLoader = new egret.ImageLoader();
                egret.ImageLoader.crossOrigin = "anonymous";
                imageLoader.addEventListener(egret.Event.COMPLETE, function (event) {
                    var imageLoader = event.currentTarget;
                    var texture = new egret.Texture();
                    texture._setBitmapData(imageLoader.data);
                    var imageHead = new egret.Bitmap(texture);
                    imageHead.width = imageHead.height = 70;
                  imageHead.x = ranking.x + 65;
                  imageHead.y = bitmap.y + 15;
                    item.addChild(imageHead);
                }, _this);
                imageLoader.load(value.avatarUrl);
            }
        
            //好友名字
            var nicktxt = new egret.TextField();
            nicktxt.textColor = 0x111111;
            nicktxt.x = ranking.x + 160;
            nicktxt.y = bitmap.y + 35;
            nicktxt.size = 25;
            value.nickname = value.nickname.length <= 6 ? value.nickname : value.nickname.substr(0, 6) + "...";
            nicktxt.text = '' + value.nickname;
            item.addChild(nicktxt);
            //关卡
            var numtxt = new egret.TextField();
            numtxt.x = nicktxt.x + 200;
            numtxt.y = nicktxt.y;
            numtxt.textColor = 0xEE7621;
            numtxt.text = '关卡:' + value.scroes;
            item.addChild(numtxt);
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