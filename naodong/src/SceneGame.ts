class SceneGame extends eui.Component implements  eui.UIComponent {
	public constructor() {
		super();
	
	}
	private static scenegame:SceneGame;
	// private s:string;
	public static getInstance()//静态函数只能访问静态属性，能用this。
	{
		if(SceneGame.scenegame == null)
		{
			SceneGame.scenegame = new SceneGame();
		}
	
		return  SceneGame.scenegame;
	}
	public btn_paihang:eui.Button;//排行榜按钮

	public bingoLayer:Bingo;//层
	public levelScene:LevelScene;//关卡层。
	public labelLevel:eui.Label;//当前关卡数显示
	public gameBg:eui.Image;
	public group_Help:eui.Group;
	public btn_Level:eui.Button;
	public btn_result:eui.Button;
	public label_Question:eui.Label;
	public group_Result:eui.Group;
	public group_Chaotic:eui.Group;
	public levelIndex:number;//当前的关卡数
	


	private bitmap:egret.Bitmap;
	private rankingListMask: egret.Shape;
   
    private isdisplay = false;
	private myscrollView = new egret.ScrollView();
	public openGroup:eui.Group;
	public imgDibang:eui.Image;
	public closeBtn:eui.Button;
	public openScroller:eui.Scroller;
	public ToOpenGroup:eui.Group;
	private isFirst:boolean = false;

	public caiziBtn:eui.Button;
 	public InitLevel(index:number)//初始化关卡
	 {
		 this.levelIndex = index;
		 this.labelLevel.text =  this.levelIndex.toString();
		 let levelData = LevelDataManager.getInstance().GetLevelData(index);//得到关卡数据
		 //将字段接起来
		 //要展示的数据
		 let showData = levelData.chaotic;
		 //对字段重新排列
		 let wordList:string[] = [];//["","",]代表这是字符串数组。
		 for(let i = 0;i < showData.length;i++)
		 {
			 wordList.push(showData.charAt(i));
		 }
		//  wordList = this.randomList(wordList);

		 //内容区域赋值  大于150关   变为15字
		 
		 this.changeWord();//改变选择区域字数
		
		 for(let i = 0; i < this.group_Chaotic.numChildren; i++)
		 {
			 let wordRect = <Word>this.group_Chaotic.getChildAt(i);
			 wordRect.SetWordText(wordList[i]);
			 wordRect.visible = true;
		 }

		 //添加答案区
		this.group_Result.removeChildren();
		let len = levelData.result.length;
		while(len)
		{
			let temp = new AnswerWord();
			this.group_Result.addChild(temp);
			len--;
		}

		 //答案区域重置一些状态
		 for(let i = 0; i < this.group_Result.numChildren; i++)
		 {
			 let answerRect = <AnswerWord>this.group_Result.getChildAt(i);
			 answerRect.visible = true;
			 answerRect.SetSelectWord(null);
			 answerRect.selectWord = null;
		 }
		 
		 //显示问题
		 this.label_Question.text = levelData.question; 
	 }
	 private changeWord()
	 {
		  if(this.levelIndex < 150)
		 {
			 if(this.group_Chaotic.numChildren == 10)
			 {
				 return;
			 }
			 this.group_Chaotic.removeChildren();
			 let tLayout:eui.TileLayout = new eui.TileLayout();
			 tLayout.horizontalGap = 35;
			 tLayout.verticalGap = 30;
			 this.group_Chaotic.layout = tLayout;
			 for(let i = 0;i < 10;i++)
			 {
				 let word = new Word();
				 word.width = 95;
				 word.height = 103;
				 this.group_Chaotic.addChild(word);
			 }
		 }
		 else if(this.levelIndex >= 150)
		 {
			 if(this.group_Chaotic.numChildren == 15)
			 {
				 return;
			 }
			 this.group_Chaotic.removeChildren();
			 //加布局类。   eui正确设置一次就可以不变了。除非想改变布局才改。
			 let tLayout:eui.TileLayout = new eui.TileLayout();
			 tLayout.horizontalGap = 35;
			 tLayout.verticalGap = 30;
			 this.group_Chaotic.layout = tLayout;
			 for(let i = 0;i < 15;i++)
			 {
				 let word = new Word();
				 word.width = 95;//要设置  不然group中布局以子元素中最大的做基础。默认为20
				 word.height = 103;
				 this.group_Chaotic.addChild(word);
			 }
		 }
	 }
	 private randomList(list:any[]):any[]
	 {
		 let arr = [];
		 while(list.length > 0)
		 {
			 let i = Math.floor(Math.random()*list.length);
			 arr.push(list[i]);
			 list.splice(i,1);//删除i位置
		 }
		 return arr;
	 }
	 //点击字块发生逻辑  由当前字自己抛出
	 public onclick_Word(word:Word)
	 {
		 //找到一个合适的位置
		 let rect:AnswerWord = null;
		 for(let i = 0; i < this.group_Result.numChildren;i++)
		 {
			 let temp = <AnswerWord>this.group_Result.getChildAt(i);
			 if(temp.selectWord == null)
			 {
				 rect = temp;//此时赋值后rect代表空的那个答案字块
				 break;
			 }
		 }

		 //找到位置后填充
		 if(rect != null)
		 {
			 rect.SetSelectWord(word);//字显示
			 //判断是否胜利
			 let str:string = "";//每点击一次把答案都加上来判断一次。
			 for(let i = 0;i < this.group_Result.numChildren; i++)
			 {
				 let answer = <AnswerWord>this.group_Result.getChildAt(i);
				 str += answer.GetWordText();
			 }
			 if(str == LevelDataManager.getInstance().GetLevelData(this.levelIndex).result)
			 {
				 console.log("你赢了");
				  this.bingoLayer.visible = true;
				  this.bingoLayer.bingoGroup.visible = true;
				  this.hintBg(false);
				  SoundManager.getInstance().trueSoundChanel= SoundManager.getInstance().trueSound.play(0,1);
				  SoundManager.getInstance().trueSoundChanel.volume = 1;
				 
			 }
			 else if(str.length == this.group_Result.numChildren )
			 {
				 console.log("you lose")
				 this.bingoLayer.visible = true;
				 this.bingoLayer.bg.touchEnabled = true;
				 this.hintBg(true);
				 this.bingoLayer.imgErro.visible = true;
				 SoundManager.getInstance().erroSoundChanel = SoundManager.getInstance().erroSound.play(0,1);
				 SoundManager.getInstance().erroSoundChanel.volume = 1;
			 }
		 }
	 }
		public hintBg(isCan)
		{
			if(isCan == true)
			{
			 this.bingoLayer.bg.touchEnabled = isCan;
			 this.bingoLayer.bg.addEventListener(egret.TouchEvent.TOUCH_TAP,this.bgTouch,this);
			}
			else if(isCan == false)
			{
		     this.bingoLayer.bg.touchEnabled = isCan;
			 this.bingoLayer.bg.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.bgTouch,this);
			}
			
			
		}
		private bgTouch()
		{
			console.log("haha");
			egret.Tween.get(this.bingoLayer.groupAll).to({scaleX:1.5,scaleY:1.5},100).to({scaleX:1,scaleY:1},100)
			.call(()=>{
				this.bingoLayer.visible = false;
				this.bingoLayer.bingoGroup.visible = false;
				this.bingoLayer.trueGroup.visible = false;
				this.bingoLayer.imgErro.visible = false;
				this.bingoLayer.daandi.visible = false;
				this.bingoLayer.upgradeGroup.visible = false;
				this.bingoLayer.erroGroup.visible = false;
			});
			
		}
	
	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}

	
	protected childrenCreated():void
	{
		super.childrenCreated();
		
		this.bitmap = platform.openDataContext.createDisplayObject(null, this.stage.stageWidth, this.stage.stageHeight );//创建的整个开放域的大小
		this.btn_result.addEventListener(egret.TouchEvent.TOUCH_TAP,this.showResult,this);
		this.btn_Level.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onLevel,this);
		this.btn_paihang.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onpaihang,this);
		this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{
			this.openGroup.visible = false;
			this.closeBtn.visible = false;
			this.bitmap.parent && this.bitmap.parent.removeChild(this.bitmap);
			this.myscrollView.parent.removeChild(this.myscrollView);
            this.rankingListMask.parent && this.rankingListMask.parent.removeChild(this.rankingListMask);

			  

            platform.openDataContext.postMessage({
                isDisplay: this.isdisplay,
                command: "close",
                type:"closedata"
            });
		
		LevelDataManager.getInstance().getAd().show();
			},this);

		this.caiziBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.toCaizi,this);
		this.xiaoguo();
		
	}
	private xiaoguo()
	{
		
		egret.Tween.get(this.caiziBtn).to({scaleX:1.2,scaleY:1.2},1000).to({scaleX:0.8,scaleY:0.8},1000).call(()=>{
			//call方法中使用()=>{}，知道this指向。不然指向window    还可以call(this.xiaoguo,this)
			this.xiaoguo();
		});
	}
	private toCaizi()
	{
		(wx as any).navigateToMiniProgram({
			appId:"wx617cbc6f541518e6",
			path:"",
			extraData:{},
			success:()=>{
				console.log("跳转猜字");
			}

		})
	}



	private onpaihang()
	{
		//处理遮罩，避免开放数据域事件影响主域。
		this.rankingListMask = new egret.Shape();
		this.rankingListMask.graphics.beginFill(0x000000, 1);
		this.rankingListMask.graphics.drawRect(0, 0, this.stage.width, this.stage.height);
		this.rankingListMask.graphics.endFill();
		this.rankingListMask.alpha = 0.5;
		this.rankingListMask.touchEnabled = true;
		console.log("点击排行");

		//主域向子域发送自定义消息
		platform.openDataContext.postMessage({
			command: "open",
			type: "friend"
		});

		let container = new egret.DisplayObjectContainer();
		this.myscrollView.setContent(container);
		this.myscrollView.bounces = true;
		this.myscrollView.x = 0 ;//左上角位置。
		this.myscrollView.y = this.stage.height / 4 ;//左上角位置。
		this.myscrollView.width = this.stage.stageWidth;
		this.myscrollView.height = this.stage.stageHeight / 3 + 300;
		this.myscrollView.setScrollLeft(0);
		this.myscrollView.scrollSpeed = 1;

		this.openGroup.visible = true;
		this.closeBtn.visible = true;
		this.addChild(this.rankingListMask);
		container.addChild(this.bitmap);
		this.addChild(this.openGroup);
		this.addChild(this.myscrollView);
		this.addChild(this.closeBtn);
		
		//隐藏广告
		LevelDataManager.getInstance().getAd().hide();
		console.log("点击了排行榜");  
		
			

	}
	private onLevel()
	{
		SoundManager.getInstance().answerSoundChanel =  SoundManager.getInstance().answerSound.play(0,1);
		SoundManager.getInstance().answerSoundChanel.volume = 1;
		this.levelScene.showLevelIcon(LevelDataManager.getInstance().GetMileStone());
		// this.levelScene.showMaxLevelIcon(LevelDataManager.getInstance().GetMileStone());
		this.levelScene.visible = true;		
	}


	private  showResult(event:egret.TouchEvent)
	{
		egret.Tween.get(event.currentTarget).to({scaleX:1.2,scaleY:1.2},100).
		to({scaleX:1,scaleY:1},100);
		if(LevelDataManager.getInstance().GetShare() == 1)
		{
			console.log("开分享，分享开启Scene GetShare()  " + LevelDataManager.getInstance().GetShare());
			// platform.updateShareMenu();
			// platform.showVideoAD();
			platform.shareAppMessage();//无差别分享
		}
		else if(LevelDataManager.getInstance().GetShare() == 0)
		{
		  console.log("看视频，分享关闭Scene   GetShare()" +  LevelDataManager.getInstance().GetShare());
		  platform.showVideoAD();
		}
		
		
	}
}

window["SceneGame"] = SceneGame;