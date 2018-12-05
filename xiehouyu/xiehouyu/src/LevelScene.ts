class LevelScene extends eui.Component implements  eui.UIComponent {
	public constructor() {
		super();
		// this.skinName =  "resource/eui_skins/LevelScene.exml"
	}
	//皮肤部件第一次附加时对其执行一些初始化操作，例如添加事件监听，赋值缓存的属性值等。
	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}
	//EUI元素构建好调用。创建子对象后执行任何最终处理。
	protected childrenCreated():void
	{
		super.childrenCreated();
		this.initMap();
		this.btn_next.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onNext,this);
		this.btn_before.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onBefore,this);
		this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onClose,this);
	}
		
	private maxPageNum = 57;
	private minPageNum = 1;
	/**等级称呼数组 */
	public gradeStringArray = ["小书生","童生","附生秀才","增生秀才","禀生秀才","监生","贡生","举人","解元","贡士","会元","三甲进士","二甲进士","一甲进士","探花","榜眼","状元","大学士","翰林文圣"]
	//等级称呼图片数组
	public chenghuImgArray = ["1_png","2_png","3_png","4_png","5_png","6_png","7_png","8_png","9_png","10_png","11_png","12_png","13_png","14_png","15_png",
								"16_png","17_png","18_png","19_png"];
	public ImgName:eui.Image;


	public closeBtn:eui.Button;

	public imgHead:eui.Image;
	public groupHead:eui.Group;
	public imgHeadBlack:eui.Image;
	public btn_before:eui.Button;
	public labelGrade:eui.Label;
	public groupLevel:eui.Group;//容器类
	public btn_next:eui.Button;
	public groupStars:eui.Group;//星星数组
	public levelBg:eui.Image;
	
	public xingBtn1: eui.Button;
	public xingBtn2: eui.Button;
	public xingBtn3: eui.Button;


	public pageIndex:number = 1;//当前关卡页数。  1 - 10

	
	private static levelScene:LevelScene;
	public imagehuiGrade:eui.Image;//灰横幅
	public imageGrade:eui.Image;//横幅


	public static getInstance() {
		if (LevelScene.levelScene == null) {
			LevelScene.levelScene = new LevelScene();
		}
		return LevelScene.levelScene;
	}
	private initMap() {
		//初始化group
		this.groupLevel.removeChildren();
		for (let i = 0; i < 9; i++) {
			let icon = new LevelIcon();
			icon.Level = i + 1;
			icon.width = 175;
			icon.height = 185;
			this.groupLevel.addChild(icon);
		}

		// // //将当前关卡显示正确
		this.pageIndex = SceneGame.getInstance().bingoLayer.getNumCurIndex(LevelDataManager.getInstance().GetMileStone());
		this.updateLabel(this.groupLevel, this.pageIndex);//更新这一页的icon的label
		this.updataName();	
		this.showLevelIcon(LevelDataManager.getInstance().GetCurIndex());//显示到最远的关卡
	}
	public showLevelIconTween(index:number)
	{
			for(let i = 0;i < this.groupLevel.numChildren;i++)//numChildren  9 个
		{
			let icon = <LevelIcon>this.groupLevel.getChildAt(i);
			let num = icon.Level;//开始是1 
			if(num < index)
			{
					icon.isCanShow(true);
			}
			else
			{
					icon.isCanShow(false);
			}
		}
	}

	//当前关卡的前面都显示
	public showLevelIcon(index:number)
	{
		if (this.pageIndex == 1) {
			console.log("第一关");
			this.btn_before.visible = false;	
		}
		else if(this.pageIndex == this.maxPageNum)
		{
			console.log("最后一关");
			this.btn_next.visible = false;
		}
		for(let i = 0;i < this.groupLevel.numChildren;i++)//numChildren  9 个
		{
			let icon = <LevelIcon>this.groupLevel.getChildAt(i);
			let num = icon.Level;//开始是1 
			if(num <= index)
			{
					icon.isCanShow(true);
			}
			else
			{
					icon.isCanShow(false);
			}
		}
	}

	//点击关闭按钮缩放
	private onClose()
	{
		egret.Tween.get(this).to({scaleX:1.2,scaleY:1.2},100).to({scaleX:1,scaleY:1},100)
		.call(()=>{this.visible = false});
	}
	//前一个关卡
	private onBefore()
	{
		SoundManager.getInstance().answerSound.play(0,1);
		this.pageIndex--;
		this.updateLabel(this.groupLevel, this.pageIndex);//更新这一页的icon的label
		this.updataName();
		this.showLevelIcon(LevelDataManager.getInstance().GetCurIndex());//小于最远的就更新
		if (this.pageIndex == this.minPageNum) {
			console.log("第一关");
			this.btn_before.visible = false;
			return;
		}
		else if(this.pageIndex > 1)
		{
			this.btn_next.visible = true;
		}
	}
	//看下一个关卡
	private onNext()
	{
		SoundManager.getInstance().answerSound.play(0,1);
		this.pageIndex++;
		this.updateLabel(this.groupLevel,this.pageIndex);//更新关卡
		this.updataName();
		this.showLevelIcon(LevelDataManager.getInstance().GetCurIndex());//显示关卡和头像
		if(this.pageIndex == this.maxPageNum)
		{
			console.log("最后一关");
			this.btn_next.visible = false;
		}
		else if(this.pageIndex < this.maxPageNum)
		{
			this.btn_before.visible = true;
		}
	}
	/** 每3页换一个 每一页一颗星 */
	public updataName()
	{
		//1开始  012 0   345 1 
		let chenghuNum = Math.floor((this.pageIndex - 1) / 3);
		let num = (this.pageIndex - 1) % 3;
		// xxx.text = this.gradeStringArray[num];
		this.ImgName.source = this. chenghuImgArray[chenghuNum];
		// xingxing1.group.getchildat(num).visible = true;
		// else false;
		this.xingBtn1.currentState = num >= 0?"up":"down";
		this.xingBtn2.currentState = num >= 1?"up":"down";
		this.xingBtn3.currentState = num >= 2?"up":"down";
	
	}
	//替换label显示。
	public updateLabel(group:eui.Group,num:number)//num从1开始  1- 9 numChildren  9 个
	{
		for(let i = 0;i < group.numChildren;i++)
		{
			let x = <LevelIcon>group.getChildAt(i);
			if(num == 1)
			{
				x.Level = i + 1;
			}
			else
			{
				x.Level = (num - 1) * 9 + i + 1;
			}

		}
		
	}
	
		
}
window["LevelScene"] = LevelScene;