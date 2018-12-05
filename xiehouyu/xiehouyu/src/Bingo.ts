class Bingo extends eui.Component implements eui.UIComponent {
	public constructor() {
		super();
	}
	public btn_share: eui.Button;
	public btn_next: eui.Button;
	public bg: eui.Image;
	public groupAll: eui.Group;
	public trueGroup: eui.Group;
	public labelresult: eui.Label;
	public bingoGroup: eui.Group;
	public imgErro: eui.Image;
	public daandi: eui.Image;
	public labelExplain: eui.Label;//解释

	//	十连胜
	public comboGroup: eui.Group;
	public chachaBtn: eui.Button;

	public Btntiaozhan: eui.Button;
	public guanLabel: eui.Label;
	//升级的UI
	public tiaozhanBtn: eui.Button;
	public imgDengji: eui.Image;

	public imgTouxiang: eui.Image;
	public starsGroup: eui.Group;
	public star0: eui.Image;
	public star1: eui.Image;
	public star2: eui.Image;
	public star3: eui.Image;
	public star4: eui.Image;

	//回答错误
	public errGroup: eui.Group;
	public jixuBtn: eui.Button;
	public chongwanBtn: eui.Button;

	/**
	 * 红包
	 */
	public hongbaoGroup: eui.Group;
	public hongbaochaBtn: eui.Button;
	public moneyLabel: eui.Label;
	public yueLabel: eui.Label;
	public tixianBtn: eui.Button;
	public lingquBtn: eui.Button;
	public tanchuanImg: eui.Image;

	/**
	 * 主界面展示红包
	 */
	public showhongbaoGroup:eui.Group;
	public btnTixian:eui.Button;
	public tanImg:eui.Image;
	public chaHongbao:eui.Button;
	public showYUELabel:eui.Label;
	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}
	protected childrenCreated(): void {
		super.childrenCreated();
		this.btn_next.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onNext, this);
		this.btn_share.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onShare, this);
		
		this.lingquBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onLingqu, this);
		this.Btntiaozhan.addEventListener(egret.TouchEvent.TOUCH_TAP, this.tiaozhan, this);
		this.chachaBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onchacha, this);
		this.tixianBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTixian, this);
		//重玩和继续的按钮方法
		this.chongwanBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onreStart, this);
		this.jixuBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onResume, this);
		//3o关红包
		this.hongbaochaBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.guanhongbao, this);
		//主界面红包
		this.chaHongbao.addEventListener(egret.TouchEvent.TOUCH_TAP, this.guanZhuHongbao, this);
		this.btnTixian.addEventListener(egret.TouchEvent.TOUCH_TAP,this.tixian,this);
	}
	private guanhongbao()
	{
		this.visible = false;
		this.hongbaoGroup.visible = false;
		this.lingquBtn.currentState = "up";
		this.lingquBtn.touchEnabled = true;
	}
	private tixian()
	{
		LevelDataManager.onshowNum = 1;
		this.showYUELabel.text = LevelDataManager.curMoney.toString();
		LevelDataManager.shipinResult = 1;
		//开关
		if(LevelDataManager.videoOrshare)
		{
			platform.restartVideo();
		}
		else 
		{
		
			platform.restShare();
		}
		
	}
	private  guanZhuHongbao()
	{
		this.visible = false;
		this.showhongbaoGroup.visible = false;
		this.btnTixian.currentState = "up";
		this.btnTixian.touchEnabled = true;
	}	
	private onLingqu() {
		console.log("lingqu");
		LevelDataManager.beforeUnlockMoneyNum = LevelDataManager.unlockMoneyNum;
		wx.setStorageSync("beforeUnlockMoneyNum",LevelDataManager.beforeUnlockMoneyNum);
		LevelDataManager.onshowNum = 1
		LevelDataManager.shipinResult = 2;
		if(LevelDataManager.unlockMoneyNum == 1)
		{
			if (LevelDataManager.curMoney < 20) {
				LevelDataManager.curMoneyNum++;
				LevelDataManager.unlockMoneyNum++;
				console.log("LevelDataManager.curMoney", LevelDataManager.curMoney);
				console.log("LevelDataManager.showMoney", LevelDataManager.showMoney);
				LevelDataManager.curMoney += LevelDataManager.showMoney;
				console.log("相加后LevelDataManager.curMoney", LevelDataManager.curMoney)
				SceneGame.getInstance().bingoLayer.lingquBtn.currentState = "disabled";
				SceneGame.getInstance().bingoLayer.lingquBtn.touchEnabled = false;
				SceneGame.getInstance().bingoLayer.yueLabel.text = LevelDataManager.curMoney.toString();
				LevelDataManager.SaveHongbaoNum();
			}
			else {
				console.log("onHongBaoTixian() 金额超出！！");
			}
		}
		else 
		{
			if (LevelDataManager.videoOrshare) {
				platform.restartVideo();
			}
			else {
				platform.restShare();
			}
		}
		
	}
	private onTixian() {
		if (LevelDataManager.curMoney <= 20) {
			this.tanchuanImg.visible = true;
			egret.Tween.get(this.tanchuanImg).to({ visible: 0 }, 2000);
		}
		else 
		{
			console.log("onTixian()出错");
		}
	}
	private onchacha(e: TouchEvent) {
		this.visible = false;
		this.comboGroup.visible = false;
		SceneGame.getInstance().levelScene.visible = false;
		SceneGame.getInstance().InitLevel(LevelDataManager.getInstance().curIcon);
	}
	
	private tiaozhan() {
		if(LevelDataManager.isJiesuoshipin == 1)
		{
			console.log("挑战视频开关  开启");
			platform.tiaozhaoVideo();
		}
		else 
		{
			LevelDataManager.onshowNum = 4;
			platform.randomShare();
			 console.log("挑战视频开关  关闭");
                (wx as any).shareAppMessage({
                    title: "小学生都能答出的脑筋急转弯，看看你能答对多少？",
                    imageUrl: "resource/assets/common/title11.png"
                });
		}
	}
	private onNext() {
		console.log("点击下一题");
		SoundManager.getInstance().answerSoundChanel = SoundManager.getInstance().answerSound.play(0, 1);
		SoundManager.getInstance().answerSoundChanel.volume = 1;
		egret.Tween.get(this.btn_next).to({ scaleX: 1.2, scaleY: 1.2 }, 100).to({ scaleX: 1, scaleY: 1 }, 100);
		this.visible = false;
		this.bingoGroup.visible = false;
		this.trueGroup.visible = false;
		LevelDataManager.getInstance().curIcon++;
		if (LevelDataManager.getInstance().curIcon > LevelDataManager.getInstance().GetMileStone())//如果大于最远
		{
			LevelDataManager.isBack = false;
			let level = LevelDataManager.getInstance().curIcon;
			LevelDataManager.getInstance().SetMileStone(level);//存储  	{key:"myscore",value:level.toString()}
			(wx as any).setUserCloudStorage({
				KVDataList: [{ key: "score", value: level.toString() }]
			});
		}
		this.imageUpdate();
	}
	private onShare() {
		console.log("分享");
		egret.Tween.get(this.btn_share).to({ scaleX: 1.2, scaleY: 1.2 }, 100).to({ scaleX: 1, scaleY: 1 }, 100);
		(wx as any).shareAppMessage({
			title: "小学生都能答出的脑筋急转弯，看看你能答对多少？",
			imageUrl: "resource/assets/common/title11.png"
		});
	}

	public imageUpdate() {
		//记录的关卡
		if(LevelDataManager.isBack)
		{
			console.log("在前面关卡");
			SceneGame.getInstance().InitLevel(LevelDataManager.getInstance().curIcon);
		}
		else
		{
		let level = LevelDataManager.getInstance().GetMileStone();
		this.changeImg(level);
		if (level > 1 && level % 5 == 1) {  //level 是 存储的 
			let curIndex = LevelDataManager.getInstance().GetCurIndex();
			curIndex++;//每十个题目 增加一关。 1  11 2  21 3  31  4  41  5   81 9  91 10
			let replaceIndex = curIndex; //11 第2关  子元素 1
			if (curIndex > LevelDataManager.getInstance().GetCurIndex()) {
				LevelDataManager.getInstance().SetCurIndex(curIndex);//当前关卡数存储起来
			}
			wx.vibrateLong({
				success: function () {
					console.log("抖动成功");
				}
			});

			//显示当前关所在的页面
			let page = this.getNumCurIndex(curIndex);
			SceneGame.getInstance().levelScene.pageIndex = page;
			SceneGame.getInstance().levelScene.updateLabel(SceneGame.getInstance().levelScene.groupLevel, SceneGame.getInstance().levelScene.pageIndex);
			SceneGame.getInstance().levelScene.updataName();
			SceneGame.getInstance().levelScene.showLevelIconTween(curIndex);
			//关卡界面出来  就是现在的当前页面
			SceneGame.getInstance().levelScene.visible = true;
			let index = (replaceIndex - 1) % 9;//数组元素  所以要-1
			let element = SceneGame.getInstance().levelScene.groupLevel.getChildAt(index) as any; //子元素  0 8   
			let img: eui.Image = element.imgLock;
			let imgGuankadi: eui.Image = element.imgGuankadi;
			//解锁关卡的标签动画   关卡界面消失后弹出发起挑战界面
			egret.Tween.get(img).to({ alpha: 0 }, 1000).call(() => {
				egret.Tween.get(imgGuankadi).to({ alpha: 1 }, 1000).call(() => {
				})
			}).wait(1000).call(() => {
				//界面出来后进入发起挑战界面去下一题
				SceneGame.getInstance().bingoLayer.visible = true;
				SceneGame.getInstance().bingoLayer.comboGroup.visible = true;
				this.guanLabel.text = "当前解锁第" + (LevelDataManager.getInstance().GetCurIndex()) + "关"; // 2
				SoundManager.getInstance().trueSoundChanel = SoundManager.getInstance().trueSound.play(0, 1);
				SoundManager.getInstance().trueSoundChanel.volume = 1;
				console.log("发起挑战");
			})
		}
		else if (level > 1) {
			console.log("直接去下一关");
			SceneGame.getInstance().InitLevel(LevelDataManager.getInstance().curIcon);
		}
		}
		
	}
	public getNumCurIndex(index: number): number {
		let pageIndex = Math.ceil(index / 9);
		console.log("当前页面" + pageIndex);
		return pageIndex;
	}
	private changeImg(index: number) {

		let sw = Math.floor(index / 90);
		SceneGame.getInstance().levelScene.ImgName.source = LevelScene.getInstance().chenghuImgArray[sw];
		
		if (index >= 1 && index <= 90) {
			SceneGame.getInstance().levelScene.ImgName.source = LevelScene.getInstance().chenghuImgArray[0];
			SceneGame.getInstance().levelScene.ImgName.width = 86;

		}
		else if (index >= 91 && index <= 180) {
			SceneGame.getInstance().levelScene.ImgName.source = LevelScene.getInstance().chenghuImgArray[1];
			SceneGame.getInstance().levelScene.ImgName.width = 86;
		}
		else if (index >= 181 && index <= 270) {
			SceneGame.getInstance().levelScene.ImgName.source = LevelScene.getInstance().chenghuImgArray[2];
			SceneGame.getInstance().levelScene.ImgName.width = 86;
		}
		else if (index >= 271 && index <= 360) {
			SceneGame.getInstance().levelScene.ImgName.source = LevelScene.getInstance().chenghuImgArray[3];
			SceneGame.getInstance().levelScene.ImgName.width = 86;
		}
		else if (index >= 361 && index <= 450) {
			SceneGame.getInstance().levelScene.ImgName.source = LevelScene.getInstance().chenghuImgArray[4];
			SceneGame.getInstance().levelScene.ImgName.width = 86;
		}
		else if (index >= 451 && index <= 540) {
			SceneGame.getInstance().levelScene.ImgName.source = LevelScene.getInstance().chenghuImgArray[5];
			SceneGame.getInstance().levelScene.ImgName.width = 86;
		}
		else if (index >= 541 && index <= 630) {
			SceneGame.getInstance().levelScene.ImgName.source = LevelScene.getInstance().chenghuImgArray[6];
			SceneGame.getInstance().levelScene.ImgName.width = 86;
		}
		else if (index >= 631 && index <= 720) {
			SceneGame.getInstance().levelScene.ImgName.source = LevelScene.getInstance().chenghuImgArray[7];
			SceneGame.getInstance().levelScene.ImgName.width = 147;
		}
		else if (index >= 721 && index <= 810) {
			SceneGame.getInstance().levelScene.ImgName.source = LevelScene.getInstance().chenghuImgArray[8];
			SceneGame.getInstance().levelScene.ImgName.width = 147;
		}
		else if (index >= 811 && index <= 900) {
			SceneGame.getInstance().levelScene.ImgName.source = LevelScene.getInstance().chenghuImgArray[9];
			SceneGame.getInstance().levelScene.ImgName.width = 147;
			if (index == 900) {
				(wx as any).showModal({
					title: "提示",
					content: "已经到最后啦，大神~~",
					showCancel: false,
				});
			}
		}
	}
	//继续
	private onResume() {
		LevelDataManager.onshowNum = 1;
		LevelDataManager.shipinResult = 0;
		if (LevelDataManager.isshipin) {
			platform.restartVideo();
		}
		else {
			platform.restShare();
		}
	}
	//回到 161 重新开始
	private onreStart() {
		let curIcon = LevelDataManager.getInstance().curIcon;
		let remaining = curIcon % 10;//多余的关数   165   5
		curIcon -= remaining;
		LevelDataManager.getInstance().curIcon = curIcon + 1;
		SceneGame.getInstance().bingoLayer.visible = false;
		SceneGame.getInstance().bingoLayer.errGroup.visible = false;
		SceneGame.getInstance().InitLevel(LevelDataManager.getInstance().curIcon);
		console.log("答错后的关数curIcon" + LevelDataManager.getInstance().curIcon);
	}
}


window["Bingo"] = Bingo;