class SceneGame extends eui.Component implements eui.UIComponent {
	public constructor() {
		super();

	}
	private static scenegame: SceneGame;
	// private s:string;
	public static getInstance()//静态函数只能访问静态属性，能用this。
	{
		if (SceneGame.scenegame == null) {
			SceneGame.scenegame = new SceneGame();
		}

		return SceneGame.scenegame;
	}
	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}

	private isdisplay = false;
	public btn_paihang: eui.Button;//排行榜按钮
	public bingoLayer: Bingo;//层
	public levelScene: LevelScene;//关卡层。
	public labelLevel: eui.Label;//当前关卡数显示
	public gameBg: eui.Image;
	public group_Help: eui.Group;
	public btn_Level: eui.Button;
	public btn_result: eui.Button;
	public label_Question: eui.Label;
	public group_Result: eui.Group;
	public group_Chaotic: eui.Group;
	public levelIndex: number;//当前的关卡数
	public xiaorenBtn: eui.Button;
	public dianImg: eui.Image;
	private bitmap: egret.Bitmap;
	private rankingListMask: egret.Shape;
	public openGroup: eui.Group;
	public imgDibang: eui.Image;
	public closeBtn: eui.Button;
	public openScroller: eui.Scroller;
	public ToOpenGroup: eui.Group;
	private isFirst: boolean = false;
	public caiziBtn: eui.Button;


	/**
	 *  /**
         * @private
         * 子类覆盖此方法可以执行一些初始化子项操作。此方法仅在组件第一次添加到舞台时回调一次。
         * 请务必调用super.createChildren()以完成父类组件的初始化
         */
        // protected createChildren(): void;初始化自定义子项(没有在EUI面板上的)操作
        /**
         * @private
         * 子项创建完成,此方法在createChildren()之后执行。
         */
        // protected childrenCreated(): void;
	//  */
	protected childrenCreated(): void {
		super.childrenCreated();
		// let openDataContext = wx.getOpenDataContext();
		this.bitmap = platform.openDataContext.createDisplayObject(null, this.stage.stageWidth, this.stage.stageHeight);
		this.btn_result.addEventListener(egret.TouchEvent.TOUCH_TAP, this.showResult, this);
		this.btn_Level.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onLevel, this);
		this.btn_paihang.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onpaihang, this);
		this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
			this.openGroup.visible = false;
			this.closeBtn.visible = false;
			this.bitmap.parent && this.bitmap.parent.removeChild(this.bitmap);
			this.isdisplay = false;
			this.rankingListMask.parent && this.rankingListMask.parent.removeChild(this.rankingListMask);
			platform.openDataContext.postMessage({
				isdisplay: this.isdisplay,
			});
			LevelDataManager.getInstance().getAd().show();
		}, this);

		this.caiziBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.toCaizi, this);
		this.xiaoguo();
		this.xiaorenBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
			(wx as any).shareAppMessage({
				title: "小学生都能答出的脑筋急转弯，看看你能答对多少？",
				imageUrl: "resource/assets/common/title11.png"
			});
			egret.Tween.get(this.dianImg).wait(200).call(() => {
				this.dianImg.visible = false;
			}).wait(10000).call(() => { this.dianImg.visible = true; })
		}, this);

	}

	public InitLevel(index: number)//初始化关卡
	{
		this.levelIndex = index;
		this.labelLevel.text = this.levelIndex.toString();
		let levelData = LevelDataManager.getInstance().GetLevelData(index);//得到关卡数据
		//将字段接起来
		//要展示的数据
		let showData = levelData.chaotic;
		//对字段重新排列
		let wordList: string[] = [];//["","",]代表这是字符串数组。
		for (let i = 0; i < showData.length; i++) {
			wordList.push(showData.charAt(i));
		}
		//  wordList = this.randomList(wordList);

		//内容区域赋值  大于150关   变为15字

		this.changeWord();//改变选择区域字数

		for (let i = 0; i < this.group_Chaotic.numChildren; i++) {
			let wordRect = <Word>this.group_Chaotic.getChildAt(i);
			wordRect.SetWordText(wordList[i]);
			wordRect.visible = true;
		}

		//添加答案区
		this.group_Result.removeChildren();
		let len = levelData.result.length;
		while (len) {
			let temp = new AnswerWord();
			temp.width = 75;
			temp.height = 75;
			this.group_Result.addChild(temp);
			len--;
		}

		//答案区域重置一些状态
		for (let i = 0; i < this.group_Result.numChildren; i++) {
			let answerRect = <AnswerWord>this.group_Result.getChildAt(i);
			answerRect.visible = true;
			answerRect.SetSelectWord(null);
			answerRect.selectWord = null;
		}

		//显示问题
		this.label_Question.text = levelData.question;
	}
	private changeWord() {
		if (this.levelIndex < 150) {
			if (this.group_Chaotic.numChildren == 10) {
				return;
			}
			this.group_Chaotic.removeChildren();
			let tLayout: eui.TileLayout = new eui.TileLayout();
			tLayout.horizontalGap = 20;
			tLayout.verticalGap = 10;
			this.group_Chaotic.layout = tLayout;
			for (let i = 0; i < 10; i++) {
				let word = new Word();
				word.width = 89;
				word.height = 96;
				this.group_Chaotic.addChild(word);
			}
		}
		else if (this.levelIndex >= 150) {
			if (this.group_Chaotic.numChildren == 15) {
				return;
			}
			this.group_Chaotic.removeChildren();
			//加布局类。   eui正确设置一次就可以不变了。除非想改变布局才改。
			let tLayout: eui.TileLayout = new eui.TileLayout();
			tLayout.horizontalGap = 20;
			tLayout.verticalGap = 10;
			this.group_Chaotic.layout = tLayout;
			for (let i = 0; i < 15; i++) {
				let word = new Word();
				word.width = 89;//要设置  不然group中布局以子元素中最大的做基础。默认为20
				word.height = 96;
				this.group_Chaotic.addChild(word);
			}
		}
	}
	private randomList(list: any[]): any[] {
		let arr = [];
		while (list.length > 0) {
			let i = Math.floor(Math.random() * list.length);
			arr.push(list[i]);
			list.splice(i, 1);//删除i位置
		}
		return arr;
	}
	//点击字块发生逻辑  由当前字自己抛出
	public onclick_Word(word: Word) {
		//找到一个合适的位置
		let rect: AnswerWord = null;
		for (let i = 0; i < this.group_Result.numChildren; i++) {
			let temp = <AnswerWord>this.group_Result.getChildAt(i);//找到空位置
			if (temp.selectWord == null) {
				rect = temp;//此时赋值后rect代表空的那个答案字块
				break;
			}
		}

		//找到位置后填充
		if (rect != null) {
			rect.SetSelectWord(word);//显示问题字
			//判断是否胜利   点击一次判断一次
			let str: string = "";//每点击一次把答案都加上来判断一次。
			for (let i = 0; i < this.group_Result.numChildren; i++) {//答案数组
				let answer = <AnswerWord>this.group_Result.getChildAt(i);
				str += answer.GetWordText();
			}
			if (str == LevelDataManager.getInstance().GetLevelData(this.levelIndex).result) {
				console.log("你赢了");
				this.bingoLayer.visible = true;
				this.bingoLayer.bingoGroup.visible = true;
				this.hintBg(false);
				SoundManager.getInstance().trueSoundChanel = SoundManager.getInstance().trueSound.play(0, 1);
				SoundManager.getInstance().trueSoundChanel.volume = 1;
			}
			else if (str.length == this.group_Result.numChildren) {
				console.log("you lose")
				this.bingoLayer.visible = true;
				this.hintBg(false);
				SoundManager.getInstance().erroSoundChanel = SoundManager.getInstance().erroSound.play(0, 1);
				SoundManager.getInstance().erroSoundChanel.volume = 1;
				//答错后
				this.answerWordWrong();
			}
		}
	}
	private answerWordWrong()
	{
		//弹界面    重玩还是继续  
		SceneGame.getInstance().bingoLayer.errGroup.visible = true;
	}

	public hintBg(isCan) {
		if (isCan == true) {
			this.bingoLayer.bg.touchEnabled = isCan;
			this.bingoLayer.bg.addEventListener(egret.TouchEvent.TOUCH_TAP, this.bgTouch, this);
		}
		else if (isCan == false) {
			this.bingoLayer.bg.touchEnabled = isCan;
			this.bingoLayer.bg.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.bgTouch, this);
		}
	}
	private bgTouch() {
		console.log("haha");
		egret.Tween.get(this.bingoLayer.groupAll).to({ scaleX: 1.5, scaleY: 1.5 }, 100).to({ scaleX: 1, scaleY: 1 }, 100)
			.call(() => {
				this.bingoLayer.visible = false;
				this.bingoLayer.bingoGroup.visible = false;
				this.bingoLayer.trueGroup.visible = false;
				this.bingoLayer.comboGroup.visible = false;
				this.bingoLayer.errGroup.visible = false;
			});
	}
	private xiaoguo() {

		egret.Tween.get(this.caiziBtn).to({ scaleX: 1.2, scaleY: 1.2 }, 1000).to({ scaleX: 0.8, scaleY: 0.8 }, 1000).call(() => {
			//call方法中使用()=>{}，知道this指向。不然指向window    还可以call(this.xiaoguo,this)
			this.xiaoguo();
		});
	}
	private toCaizi() {
		(wx as any).navigateToMiniProgram({
			appId: "wx617cbc6f541518e6",
			path: "",
			extraData: {},
			success: () => {
				console.log("跳转猜字");
			}

		})
	}
	private onpaihang() {
		// let openDataContext = wx.getOpenDataContext();
		//处理遮罩，避免开放数据域事件影响主域。
		this.rankingListMask = new egret.Shape();
		this.rankingListMask.graphics.beginFill(0x000000, 1);
		this.rankingListMask.graphics.drawRect(0, 0, this.stage.width, this.stage.height);
		this.rankingListMask.graphics.endFill();
		this.rankingListMask.alpha = 0.5;
		this.rankingListMask.touchEnabled = true;
		console.log("点击排行");

		//开放域开始
		// const bitmapdata = new egret.BitmapData(window["sharedCanvas"]);
		// bitmapdata.$deleteSource = false;
		// const texture = new egret.Texture();
		// texture._setBitmapData(bitmapdata);
		// this.bitmap = new egret.Bitmap(texture);
		// this.bitmap.width = this.stage.stageWidth;//节点的大小  也就是sharedCavas作为bitmapdata的这个bitmap的大小。
		// this.bitmap.height = this.stage.stageHeight;


		this.openGroup.visible = true;
		this.closeBtn.visible = true;
		this.addChild(this.rankingListMask);
		this.addChild(this.openGroup);
		this.addChild(this.bitmap);
		this.addChild(this.closeBtn);

		//隐藏广告
		LevelDataManager.getInstance().getAd().hide();
		console.log("点击了排行榜");

		//   egret.startTick((timeStarmp: number) => {
		//         egret.WebGLUtils.deleteWebGLTexture(bitmapdata.webGLTexture);
		//         bitmapdata.webGLTexture = null;
		//         return false;
		//     }, this);
		//主域向子域发送自定义消息
		this.isdisplay = true;
		platform.openDataContext.postMessage({
			isdisplay: this.isdisplay
		});
	}
	private onLevel() {
		SoundManager.getInstance().answerSoundChanel = SoundManager.getInstance().answerSound.play(0, 1);
		SoundManager.getInstance().answerSoundChanel.volume = 1;
		this.levelScene.showLevelIcon(LevelDataManager.getInstance().GetCurIndex());
		this.levelScene.visible = true;
	}
	private showResult(event: egret.TouchEvent) {
		egret.Tween.get(event.currentTarget).to({ scaleX: 1.2, scaleY: 1.2 }, 100).
			to({ scaleX: 1, scaleY: 1 }, 100);
		if (LevelDataManager.getInstance().GetShare() == 1) {
			console.log("开分享，分享开启Scene GetShare()  " + LevelDataManager.getInstance().GetShare());
			platform.shareAppMessage();//无差别分享
		}
		else if (LevelDataManager.getInstance().GetShare() == 0) {
			console.log("看视频，分享关闭Scene   GetShare()" + LevelDataManager.getInstance().GetShare());
			platform.showVideoAD();
		}
	}
}

window["SceneGame"] = SceneGame;