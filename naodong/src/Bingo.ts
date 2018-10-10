class Bingo extends eui.Component implements  eui.UIComponent {
	public constructor() {
		super();
		// this.skinName =  "resource/eui_skins/Bingo.exml"
	}
	public btn_share:eui.Button;
	public btn_next:eui.Button;
	public bg:eui.Image;
	public groupAll:eui.Group;
	public trueGroup:eui.Group;
	public labelresult:eui.Label;
	public erroGroup:eui.Group;
	public bingoGroup:eui.Group;
	public imgErro:eui.Image;
	// public shareFail:eui.Image;
	public erroBtn:eui.Button;

	public daandi:eui.Image;
	public labelExplain:eui.Label;//解释




	//升级的UI
	public upgradeGroup: eui.Group;
	public imgdizi: eui.Image;
	public imgDengji: eui.Image;
	public imgTouxiang: eui.Image;
	public starsGroup: eui.Group;
	public star0: eui.Image;
	public star1: eui.Image;
	public star2: eui.Image;
	public star3: eui.Image;
	public star4: eui.Image;
	public names:string[] = ["xinshou_png","xuezhe_png","dashi_png","zongshi_png","zhizhe_png","xianzhi_png"];
	private gradename:string[] = ["xinshouzi_png","xuezhezi_png","dashizi_png","zongshizi_png","zhizhezi_png","xianzhizi_png"];

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
		this.btn_next.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onNext,this);
		this.btn_share.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onShare,this);
		this.imgdizi.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onImgZidi,this);
		this.erroBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onErro,this);
		
	}
	private onErro()
	{
		platform.shareAppMessage();
	}
	private onImgZidi()
	{
		this.visible = false;
		this.upgradeGroup.visible = false;
	}
	
	private onNext()
	{
		console.log("点击下一题");
		SoundManager.getInstance().answerSoundChanel = SoundManager.getInstance().answerSound.play(0,1);
		SoundManager.getInstance().answerSoundChanel.volume = 1;
		egret.Tween.get(this.btn_next).to({scaleX:1.2,scaleY:1.2},100).to({scaleX:1,scaleY:1},100);
		this.visible = false;
		this.bingoGroup.visible = false;
		this.trueGroup.visible = false;
		LevelDataManager.getInstance().curIcon++;
		if(LevelDataManager.getInstance().curIcon > LevelDataManager.getInstance().GetMileStone())//如果大于最远
		{
			let level = LevelDataManager.getInstance().curIcon;
			LevelDataManager.getInstance().SetMileStone(level);//存储
			// (wx as any).setUserCloudStorage({
			// 	KVDataList:[{key:"score",value:level.toString()}],
			// 	success: res => {
			// 		console.log(res);
			// 		// 让子域更新当前用户的最高分，因为主域无法得到getUserCloadStorage;
			// 		let openDataContext = (wx as any).getOpenDataContext();
			// 		openDataContext.postMessage({
			// 			command:"open",
			// 			type: "updateMaxScore"
			// 		});
			// 	},
			// 	fail: res => {
			// 		console.log(res);
			// 	}
			// })
		}
		SceneGame.getInstance().InitLevel(LevelDataManager.getInstance().curIcon);
		this.imageUpdate();
		
	}
	private onShare()
	{
		console.log("分享");
		egret.Tween.get(this.btn_share).to({scaleX:1.2,scaleY:1.2},100).to({scaleX:1,scaleY:1},100);
		platform.testShare();
		this.visible = false;
		this.bingoGroup.visible = false;
		this.trueGroup.visible = false;
		LevelDataManager.getInstance().curIcon++;
		console.log(LevelDataManager.getInstance().curIcon);
		if(LevelDataManager.getInstance().curIcon > LevelDataManager.getInstance().GetMileStone())//如果大于最远
		{
			LevelDataManager.getInstance().SetMileStone(LevelDataManager.getInstance().curIcon);//存储
		}
		SceneGame.getInstance().InitLevel(LevelDataManager.getInstance().curIcon);
		this.imageUpdate();
		
		
	}

		public imageUpdate()
		{
				//记录的关卡
					let level = LevelDataManager.getInstance().GetMileStone();
					if (level == 1) {
						this.visible = true;
						this.upgradeGroup.visible = true;
						this.resetStart();//重置星星
						//一星
						this.imgTouxiang.source = this.names[0];
						this.imgDengji.source = this.gradename[0];
						this.updateStar(0);

					}
					else if (level == 31)//2
					{
						this.imgTouxiang.source = this.names[0];
						this.imgDengji.source = this.gradename[0];
						this.updateStar(1);
						this.upgradeGroup.visible = true;
						this.visible = true;
					}
					else if (level == 61) {
						this.imgTouxiang.source = this.names[0];
						this.imgDengji.source = this.gradename[0];
						this.updateStar(2);
						this.upgradeGroup.visible = true;
						this.visible = true;
					}
					else if (level == 91) {
						this.imgTouxiang.source = this.names[0];
						this.imgDengji.source = this.gradename[0];
						this.updateStar(3);
						this.upgradeGroup.visible = true;
						this.visible = true;
					}
					else if (level == 121) {
						this.imgTouxiang.source = this.names[0];
						this.imgDengji.source = this.gradename[0];
						this.updateStar(4);
						this.upgradeGroup.visible = true;
						this.visible = true;
					}
					else if (level == 151) {
						//重置
						this.resetStart();
						//一星
						this.imgTouxiang.source = this.names[1];
						this.imgDengji.source = this.gradename[1];
						this.updateStar(0);
						this.upgradeGroup.visible = true;
						this.visible = true;
					}
					else if (level == 181) {
						this.imgTouxiang.source = this.names[1];
						this.imgDengji.source = this.gradename[1];
						this.updateStar(1);
						this.upgradeGroup.visible = true;
						this.visible = true;
					}
					else if (level == 211) {
						this.imgTouxiang.source = this.names[1];
						this.imgDengji.source = this.gradename[1];
						this.updateStar(2);
						this.upgradeGroup.visible = true;
						this.visible = true;
					}
					else if (level == 241) {
						this.imgTouxiang.source = this.names[1];
						this.imgDengji.source = this.gradename[1];
						this.updateStar(3);
						this.upgradeGroup.visible = true;
						this.visible = true;
					}
					else if (level == 271) {
						this.imgTouxiang.source = this.names[1];
						this.imgDengji.source = this.gradename[1];
						this.updateStar(4);
						this.upgradeGroup.visible = true;
						this.visible = true;
					}
					else if (level == 301) {
						this.resetStart();
						//一星
						this.imgTouxiang.source = this.names[2];
						this.imgDengji.source = this.gradename[2];
						this.updateStar(0);
						this.upgradeGroup.visible = true;
						this.visible = true;
					}
					else if (level == 331) {
						this.imgTouxiang.source = this.names[2];
						this.imgDengji.source = this.gradename[2];
						this.updateStar(1);
						this.upgradeGroup.visible = true;
						this.visible = true;
					}
					else if (level == 361) {
						this.imgTouxiang.source = this.names[2];
						this.imgDengji.source = this.gradename[2];
						this.updateStar(2);
						this.upgradeGroup.visible = true;
						this.visible = true;
					}
					else if (level == 391) {
						this.imgTouxiang.source = this.names[2];
						this.imgDengji.source = this.gradename[2];
						this.updateStar(3);
						this.upgradeGroup.visible = true;
						this.visible = true;
					}
					else if (level == 421) {
						this.imgTouxiang.source = this.names[2];
						this.imgDengji.source = this.gradename[2];
						this.updateStar(4);
						this.upgradeGroup.visible = true;
						this.visible = true;
					}
					else if (level == 451) {

						this.resetStart();
						//1
						this.imgTouxiang.source = this.names[3];
						this.imgDengji.source = this.gradename[3];
						this.updateStar(0);
						this.upgradeGroup.visible = true;
						this.visible = true;

					}
					else if (level == 481) {
						this.imgTouxiang.source = this.names[3];
						this.imgDengji.source = this.gradename[3];
						this.updateStar(1);
						this.upgradeGroup.visible = true;
						this.visible = true;
					}
					else if (level == 511) {
						this.imgTouxiang.source = this.names[3];
						this.imgDengji.source = this.gradename[3];
						this.updateStar(2);
						this.upgradeGroup.visible = true;
						this.visible = true;
					}
					else if (level == 541) {
						this.imgTouxiang.source = this.names[3];
						this.imgDengji.source = this.gradename[3];
						this.updateStar(3);
						this.upgradeGroup.visible = true;
						this.visible = true;
					}
					else if (level == 571) {
						this.imgTouxiang.source = this.names[3];
						this.imgDengji.source = this.gradename[3];
						this.updateStar(4);
						this.upgradeGroup.visible = true;
						this.visible = true;
					}
					else if (level == 601) {
						this.resetStart();
						this.imgTouxiang.source = this.names[4];
						this.imgDengji.source = this.gradename[4];
						this.updateStar(0);
						this.upgradeGroup.visible = true;
						this.visible = true;

					}
					else if (level == 631) {
						this.imgTouxiang.source = this.names[4];
						this.imgDengji.source = this.gradename[4];
						this.updateStar(1);
						this.upgradeGroup.visible = true;
						this.visible = true;
					}
					else if (level == 661) {
						this.imgTouxiang.source = this.names[4];
						this.imgDengji.source = this.gradename[4];
						this.updateStar(2);
						this.upgradeGroup.visible = true;
						this.visible = true;
					}
					else if (level == 691) {
						this.imgTouxiang.source = this.names[4];
						this.imgDengji.source = this.gradename[4];
						this.updateStar(3);
						this.upgradeGroup.visible = true;
						this.visible = true;
					}
					else if (level == 721) {
						this.imgTouxiang.source = this.names[4];
						this.imgDengji.source = this.gradename[4];
						this.updateStar(4);
						this.upgradeGroup.visible = true;
						this.visible = true;
					}
					else if (level == 751) {
						this.resetStart();
						this.imgTouxiang.source = this.names[5];
						this.imgDengji.source = this.gradename[5];
						this.updateStar(0);
						this.upgradeGroup.visible = true;
						this.visible = true;

					}
					else if (level == 781) {
							this.imgTouxiang.source = this.names[5];
						this.imgDengji.source = this.gradename[5];
						this.updateStar(1);
						this.upgradeGroup.visible = true;
						this.visible = true;
					}
					else if (level == 811) {
							this.imgTouxiang.source = this.names[5];
						this.imgDengji.source = this.gradename[5];
						this.updateStar(2);
						this.upgradeGroup.visible = true;
						this.visible = true;
					}
					else if (level == 841) {
							this.imgTouxiang.source = this.names[5];
						this.imgDengji.source = this.gradename[5];
						this.updateStar(3);
						this.upgradeGroup.visible = true;
						this.visible = true;
					}
					else if (level == 871) {
							this.imgTouxiang.source = this.names[5];
						this.imgDengji.source = this.gradename[5];
						this.updateStar(4);
						this.upgradeGroup.visible = true;
						this.visible = true;
					}
					else if (level == 900) {
						this.imgTouxiang.source = this.names[6];
						this.imgDengji.source = this.gradename[6];
						this.upgradeGroup.visible = true;
						this.visible = true;
						console.log("无敌");
					}
		}
		public updateStar(index)
		{
			if(index > this.starsGroup.numChildren)
			{
				console.log("超出star数组");
				return ;
			}
			for(let i = 0;i <= index;i++)
			{
				this.starsGroup.getChildAt(i).visible = true;
			}
		}
		public resetStart()
		{
			for(let i = 0;i < this.starsGroup.numChildren;i++)
			{
				this.starsGroup.getChildAt(i).visible = false;
			}
		}
}

window["Bingo"] = Bingo;