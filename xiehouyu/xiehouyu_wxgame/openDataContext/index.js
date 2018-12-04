/**
 * 微信开放数据域
 * 使用 Canvas2DAPI 在 SharedCanvas 渲染一个排行榜，
 * 并在主域中渲染此 SharedCanvas
 */


/**
 * 资源加载组，将所需资源地址以及引用名进行注册
 * 之后可通过assets.引用名方式进行获取
 */
var assets = {
  icon: "openDataContext/assets/touxiangkuang.png",
  box: "openDataContext/assets/xuangxiangdi.png",
  // panel: "openDataContext/assets/dibang.png",
  // button: "openDataContext/assets/cha.png"
  // title: "openDataContext/assets/rankingtitle.png"
};

/**
 * 资源加载组，将所需资源地址以及引用名进行注册
 * 之后可通过assets.引用名方式进行获取
 */

/**
 * canvas 大小
 * 这里暂时写死
 * 需要从主域传入
 */
let canvasWidth;
let canvasHeight;



//获取canvas渲染上下文
const context = sharedCanvas.getContext("2d");
context.globalCompositeOperation = "source-over";


/**
 * 所有头像数据
 * 包括姓名，头像图片，得分
 * 排位序号i会根据parge*perPageNum+i+1进行计算
 */
var totalGroup = [{
  key: 1,
  name: "1111111111",
  url: assets.icon,
  // wxicon:assets.icon,
  scroes: 10000
}
];

/**
 * 创建排行榜
 */
function drawRankPanel() {
  //起始id
  let startID = perPageMaxNum * page;
  currentGroup = totalGroup.slice(startID, startID + perPageMaxNum);
  //创建头像Bar
  drawRankByGroup(currentGroup);
  //创建按钮
  drawButton()
}
/**
 * 根据屏幕大小初始化所有绘制数据
 */
function init() {
  //排行榜绘制数据初始化,可以在此处进行修改
  rankWidth = stageWidth * 4 / 5 + 50;
  rankHeight = (perPageMaxNum + 1) * 200;
  console.log("stageWidth " + stageWidth);
  console.log("stageHeight" + stageHeight);
  console.log("rangkWidth" + rankWidth);
  console.log("rankHeight" + rankHeight);
  barWidth = rankWidth * 4 / 5;
  barHeight = rankWidth / perPageMaxNum; 
  offsetX_rankToBorder = (stageWidth - rankWidth) / 2;
  offsetY_rankToBorder = (stageHeight - rankHeight) / 2;
  preOffsetY = 100;//(rankHeight - barHeight) / (perPageMaxNum) + 5
  fontSize = Math.floor(stageWidth / 20);
  startX = offsetX_rankToBorder + (rankWidth - barWidth) / 2;//
  startY = 20;//  startY = offsetY_rankToBorder + preOffsetY;
  avatarSize = barHeight - 10;
  intervalX = barWidth / 20;
  textOffsetY = (barHeight + fontSize) / 2;
  textMaxSize = barWidth / 3;
  indexWidth = context.measureText("99").width;

  //按钮绘制数据初始化
  buttonWidth = 80;
  buttonHeight = 75;
  buttonOffset = rankWidth / 3;
  lastButtonX = offsetX_rankToBorder + buttonOffset - buttonWidth;
  nextButtonX = offsetX_rankToBorder + 2 * buttonOffset;
  nextButtonY = lastButtonY = offsetY_rankToBorder + rankHeight - 50 - buttonHeight;
  // let data = wx.getSystemInfoSync();
  // canvasWidth = data.windowWidth;
  // canvasHeight = (numFriend + 1) * 200; 
}

/**
 * 创建两个点击按钮
 */
function drawButton() {
  // context.drawImage(assets.button, nextButtonX, nextButtonY, buttonWidth, buttonHeight);
  // context_drawImage(assets.button, lastButtonX, lastButtonY, buttonWidth, buttonHeight);
}


/**
 * 根据当前绘制组绘制排行榜
 */
function drawRankByGroup(currentGroup) {
  for (let i = 0; i < currentGroup.length; i++) {
    const data = currentGroup[i];
    drawByData(data, i);
  }
}

/**
 * 根据绘制信息以及当前i绘制元素 这里做个人信息
 */
function drawByData(data, i) {
  let x = startX; 
  //绘制底框
  context_drawImage(assets.box, startX - 20, startY + i * preOffsetY, barWidth + 50+20, barHeight + 10 +20);
  x += 10;
  //设置字体
  context.font = fontSize + "px Arial";
  context.fillStyle = "red";
  //绘制序号  排名
  context.fillText(data.key + 1 + "", x - 10, startY + i * preOffsetY + textOffsetY + 5, textMaxSize + 50);
  x += indexWidth + intervalX;
  //绘制头像
  var image = wx.createImage();
  image.src = data.url;
  image.onload = function () {
    renderDirty = true;
  }
  context_drawImage(assets.icon, x , startY + i * preOffsetY + (barHeight - avatarSize) / 2 + 5, avatarSize + 20, avatarSize + 20);
  context.drawImage(image, x + 3, startY + i * preOffsetY + (barHeight - avatarSize) / 2 + 7, avatarSize -5 + 20 , avatarSize - 5 + 20);
  x += avatarSize + intervalX;

  //绘制名称
  context.fillStyle = "black";
  context.font = 40 + "px Arial";
  context.fillText(data.name + "", x + 2, startY + i * preOffsetY + textOffsetY + 5, textMaxSize + 50);
  x += textMaxSize + intervalX;
  context.fillStyle = "orange";
  context.font = fontSize + "px Arial";
  //绘制分数
  context.fillText(data.scroes + " 关", x + 100, startY + i * preOffsetY + textOffsetY + 5, textMaxSize + 20);
}

/**
 * 点击处理
 */
function onTouchEnd(event) {
  let x = event.clientX * sharedCanvas.width / canvasWidth;
  let y = event.clientY * sharedCanvas.height / canvasHeight;
  if (x > lastButtonX && x < lastButtonX + buttonWidth &&
    y > lastButtonY && y < lastButtonY + buttonHeight) {
    //在last按钮的范围内
    if (page > 0) {
      buttonClick(0);

    }
  }
  if (x > nextButtonX && x < nextButtonX + buttonWidth &&
    y > nextButtonY && y < nextButtonY + buttonHeight) {
    //在next按钮的范围内
    if ((page + 1) * perPageMaxNum < totalGroup.length) {
      buttonClick(1);
    }
  }

}
/**
 * 根据传入的buttonKey 执行点击处理
 * 0 为上一页按钮
 * 1 为下一页按钮
 */
function buttonClick(buttonKey) {
  let old_buttonY;
  if (buttonKey == 0) {
    //上一页按钮
    old_buttonY = lastButtonY;
    lastButtonY += 10;
    page--;
    renderDirty = true;
    console.log('上一页' + page);
    setTimeout(() => {
      lastButtonY = old_buttonY;
      //重新渲染必须标脏
      renderDirty = true;
    }, 100);
  } else if (buttonKey == 1) {
    //下一页按钮
    old_buttonY = nextButtonY;
    nextButtonY += 10;
    page++;
    renderDirty = true;
    console.log('下一页' + page);
    setTimeout(() => {
      nextButtonY = old_buttonY;
      //重新渲染必须标脏
      renderDirty = true;
    }, 100);
  }

}

/////////////////////////////////////////////////////////////////// 相关缓存数据

///////////////////////////////////数据相关/////////////////////////////////////

/**
 * 渲染标脏量
 * 会在被标脏（true）后重新渲染
 */
let renderDirty = true;

/**
 * 当前绘制组
 */
let currentGroup = [];
/**
 * 每页最多显示个数
 */
let perPageMaxNum = 16;
/**
 * 当前页数,默认0为第一页
 */
let page = 0;
///////////////////////////////////绘制相关///////////////////////////////
/**
 * 舞台宽
 */
let stageWidth;
/**
 * 舞台高
 */
let stageHeight;
/**
 * 排行榜宽
 */
let rankWidth;
/**
 * 排行榜高
 */
let rankHeight;


/**
 * 每个头像头目的宽
 */
let barWidth;
/*
*每个头像头目的高
*/
let barHeight;
/**
 * 条目与排行榜边界的水平距离
 */
let offsetX_barToRank
/**
 * 绘制排行榜起始点X
 */
let startX;
/**
 * 绘制排行榜起始点Y
 */
let startY;
/**
 * 每行Y轴间隔offsetY
 */
let preOffsetY;
/**
 * 按钮大小
 */
let buttonWidth;
let buttonHeight;
/**
 * 上一页按钮X坐标
 */
let lastButtonX;
/**
 * 下一页按钮x坐标
 */
let nextButtonX;
/**
 * 上一页按钮y坐标
 */
let lastButtonY;
/**
 * 下一页按钮y坐标
 */
let nextButtonY;
/**
 * 两个按钮的间距
 */
let buttonOffset;

/**
 * 字体大小
 */
let fontSize;
/**
 * 文本文字Y轴偏移量
 * 可以使文本相对于图片大小居中
 */
let textOffsetY;
/**
 * 头像大小
 */
let avatarSize;
/**
 * 名字文本最大宽度，名称会根据
 */
let textMaxSize;
/**
 * 绘制元素之间的间隔量
 */
let intervalX;
/**
 * 排行榜与舞台边界的水平距离
 */
let offsetX_rankToBorder;
/**
 * 排行榜与舞台边界的竖直距离
 */
let offsetY_rankToBorder;
/**
 * 绘制排名的最大宽度
 */
let indexWidth;

/**
 * 好友数量
 */
let numFriend;
//////////////////////////////////////////////////////////
/**
 * 监听点击
 */
wx.onTouchEnd((event) => {
  var l = event.changedTouches.length;
  for (let i = 0; i < l; i++) {
    onTouchEnd(event.changedTouches[i]);
  }
});


/**
 * 是否加载过资源的标记量
 */
let hasLoadRes;

/**
 * 资源加载
 */
function preloadAssets() {

  return new Promise((resole, reject) => {
    let preloaded = 0;
    let count = 0;
    for (var asset in assets) {
      count++;
      var img = wx.createImage();
      img.onload = () => {
        preloaded++;
        if (preloaded == count) {
          // console.log("加载完成");
          hasLoadRes = true;
          resole();
        }

      }
      img.src = assets[asset];
      assets[asset] = img;
    }
  });
}


/**
 * 绘制屏幕
 * 这个函数会在加载完所有资源之后被调用
 */
function createScene() {
  console.log("createScene");
  if (sharedCanvas.width && sharedCanvas.height) {
    // console.log('初始化完成')
    stageWidth = sharedCanvas.width;
    stageHeight = (perPageMaxNum + 1) * 200;  // sharedCanvas.height;//这个是用来计算的。最好和主域的一样。
    init();
    return true;
  } else {
    console.log('创建开放数据域失败，请检查是否加载开放数据域资源');
    return false;
  }
}


//记录requestAnimationFrame的ID
let requestAnimationFrameID;
let hasCreateScene;



function setFriendList() {
  wx.getFriendCloudStorage({
    keyList: ["score","myscore"],
    success: res => {
      console.log("getFriendCloudStorage", res);
      if (!res.data) { return; }
      console.log("qqq", 1);
      kvlist2totogroup(res.data);
    },
    fail: err => {
      console.log(err);
    },
    complete: () => {
      wx.getUserCloudStorage({
        keyList: ["score"],
        success: res => {
          console.log("myscore res ", res);
          if (!res.KVDataList) {
            return;
          }
          //自己函数
          getMyNuber(res.KVDataList);
        },
        fail: err => {
          console.error(err);
        }
      })
    }
  });

}
function getMyNuber(mydataList)
{
  let myscore = mydataList[0].value;
  console.log("MyDataList",mydataList);
  console.log("Myscore ",myscore);
  for(let i = 0;i < totalGroup.length; i++)
  {
    let score = totalGroup[i].scroes;
    if(myscore == score)
    {
      console.log("排名第 " + (i+1)); 
    }
  }


}
//把微信的数据转化成我们的数据
function kvlist2totogroup(reslist) {
  let dataList = [];
  reslist.forEach((data) => {
    if (data.KVDataList.length > 0) {
      dataList.push(data);
    }
  });
  if (dataList.length === 0) {
    return;
  }
  dataList.sort((a, b) => {
    return b.KVDataList[0].value - a.KVDataList[0].value;
  });
  totalGroup = [];
  for (var i = 0; i < dataList.length; i++) {
    var obj = {};
    obj.key = i;
    obj.name = dataList[i].nickname;
    obj.url = dataList[i].avatarUrl;
    obj.scroes = dataList[i].KVDataList[0].value;
    numFriend = i;
    totalGroup.push(obj);
  }
  console.log(numFriend + " numfreidn");
  console.log("kvlist2totogroup");
  renderDirty = true;
}

let isCanShow = false;
/**
 * 增加来自主域的监听函数
 */
function addOpenDataContextListener() {
  console.log('增加监听函数')
  wx.onMessage((data) => {
    if (data.command == 'open') {

      console.log('command:open');
      console.log(data);

      preloadAssets().then((res) => {
        if (!hasCreateScene) {
          //创建并初始化
          hasCreateScene = createScene();
        }
        totalGroup = [];
        page = 0;
        renderDirty = true;
        if (data.type == "friend") {
          setFriendList();
        }
        else if (data.type == "updateMaxScore") {
          setFriendList();
        }
        console.log("666666666668888");
        requestAnimationFrameID = requestAnimationFrame(loop);
    }).catch((error) => {
        console.log("6666");
      });


    } else if (data.command == 'close' && requestAnimationFrameID) {
      cancelAnimationFrame(requestAnimationFrameID);
      requestAnimationFrameID = null
    } else if (data.command == 'loadRes' && !hasLoadRes) {
      /**
       * 加载资源函数
       * 只需要加载一次
       */
      // console.log('加载资源')
      // preloadAssets();
    }
  });
}

addOpenDataContextListener();

/**
 * 循环函数
 * 每帧判断一下是否需要渲染
 * 如果被标脏，则重新渲染
 */
function loop() {
  if (renderDirty) {
    // console.log(`stageWidth :${stageWidth}   stageHeight:${stageHeight}`)
    context.setTransform(1, 0, 0, 1, 0, 0);
    context.clearRect(0, 0, sharedCanvas.width, sharedCanvas.height);
    drawRankPanel();
    renderDirty = false;
  }
  requestAnimationFrameID = requestAnimationFrame(loop);
}

/**
 * 图片绘制函数
 */
function context_drawImage(image, x, y, width, height) {
  if (image.width != 0 && image.height != 0 && context) {
    if (width && height) {
      context.drawImage(image, x, y, width, height);
    } else {
      context.drawImage(image, x, y);
    }
  }
}