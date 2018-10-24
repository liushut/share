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
		this.levelBg.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onBg,this);
	}
		


	//称呼数组
	public chenghuArray = ["1_png","2_png","3_png","4_png","5_png","6_png","7_png","8_png","9_png","10_png"];
	public ImgName:eui.Image;


	public imgHead:eui.Image;
	public groupHead:eui.Group;
	public imgHeadBlack:eui.Image;
	public btn_before:eui.Button;
	public labelGrade:eui.Label;
	public groupLevel:eui.Group;//容器类
	public btn_next:eui.Button;
	public groupStars:eui.Group;//星星数组
	public levelBg:eui.Image;
	

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

		//将当前关卡显示正确
		this.showLevelIcon(LevelDataManager.getInstance().GetCurIndex());//显示到最远的
	}

	//当前关卡的前面都显示
	public showLevelIcon(index:number)
	{
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

	//点击背景缩放
	private onBg()
	{
		egret.Tween.get(this).to({scaleX:1.5,scaleY:1.5},100).to({scaleX:1,scaleY:1},100)
		.call(()=>{this.visible = false});
	}
	//前一个关卡
	private onBefore()
	{
		SoundManager.getInstance().answerSound.play(0,1);
		this.pageIndex--;
		this.updateLabel(this.groupLevel, this.pageIndex);
		this.updataName();
		this.showLevelIcon(LevelDataManager.getInstance().GetCurIndex());
		if (this.pageIndex == 1) {
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
		if(this.pageIndex == 10)
		{
			
			console.log("最后一关");
			this.btn_next.visible = false;
			
		}
		else if(this.pageIndex < 10)
		{
			this.btn_before.visible = true;
		}
	}
	public updataName()
	{
		if(this.pageIndex == 1)
		{
			this.ImgName.source = this.chenghuArray[0];
			this.ImgName.width = 86;
			
		}
		else if(this.pageIndex == 2)
		{
			this.ImgName.source = this.chenghuArray[1];
			this.ImgName.width = 86;
		}
		else if(this.pageIndex == 3)
		{
			this.ImgName.source = this.chenghuArray[2];
			this.ImgName.width = 86;
		}
		else if(this.pageIndex == 4)
		{
			this.ImgName.source = this.chenghuArray[3];
			this.ImgName.width = 86;
		}
		else if(this.pageIndex == 5)
		{
			this.ImgName.source = this.chenghuArray[4];
			this.ImgName.width = 86;
		}
		else if(this.pageIndex == 6)
		{
			this.ImgName.source = this.chenghuArray[5];
			this.ImgName.width = 86;
		}
		else if(this.pageIndex == 7)
		{
			this.ImgName.source = this.chenghuArray[6];
			this.ImgName.width = 86;
		}
		else if(this.pageIndex == 8)
		{
			this.ImgName.source = this.chenghuArray[7];
			this.ImgName.width = 147;
		}
		else if(this.pageIndex == 9)
		{
			this.ImgName.source = this.chenghuArray[8];
			this.ImgName.width = 147;
		}
		else if(this.pageIndex == 10)
		{
			this.ImgName.source = this.chenghuArray[9];
			this.ImgName.width = 147;
		}
	}
	//得到最远关数在第几页。
	private getCurIndexMini(level:number):number
	{
		let curIndex = 0;
		curIndex  = Math.ceil(level / 30);//只数组从0开始。其余还是遵守习惯。因为从0开始的,从1开始的就是floor
		return curIndex;
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