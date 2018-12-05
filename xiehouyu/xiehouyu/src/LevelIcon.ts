class LevelIcon extends eui.Component implements  eui.UIComponent {
	public constructor() {
		super();
		this.skinName = "resource/eui_skins/LevelIcon.exml";//这里如果不指定就会出现构建错误。
		
	}
	
	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}
	protected childrenCreated():void
	{
		super.childrenCreated();
		this.imgGuankadi.touchEnabled = true;
		this.addEventListener(egret.TouchEvent.TOUCH_TAP,this.toGame,this);
	}
	
	public levelLabel:eui.Label;

	private  bitlabel_levelIndex:eui.BitmapLabel;
	private  imgLock:eui.Image;
	public   imgGuankadi:eui.Image;

	private toGame()
	{
		LevelDataManager.isBack = true;
		LevelDataManager.curMoneyNum = 1;//改变钱包次数
		egret.Tween.get(this.imgGuankadi).to({scaleX:0.8,scaleY:0.8},100).to({scaleX:1,scaleY:1});
		let index = parseInt(this.levelLabel.text);
		if(index <= LevelDataManager.getInstance().GetCurIndex())//只能在前往小于最远关卡
		{
			index --;
			let icon = index * 5 + 1;
			LevelDataManager.getInstance().curIcon = icon;
			SceneGame.getInstance().InitLevel(icon);//进入对应关卡游戏
			//界面消失
			SceneGame.getInstance().levelScene.visible = false;	
		}
	}

	public set Level(value: number) {//初始化数字。
		this.levelLabel.text = value.toString();
	}

	public get Level() {
		return parseInt(this.levelLabel.text);
	}
	//小于这个关卡全部显示

	public isCanShow(status:boolean)
	{
		if(status == false)
		{
			this.imgLock.alpha = 1;//锁
			this.touchEnabled = false;
			this.imgGuankadi.alpha = 0;
		}
		else if(status == true)
		{
			this.imgLock.alpha = 0;//锁
			this.touchEnabled = true;
			this.imgGuankadi.alpha = 1;
		}
		
	}
	
}

window["LevelIcon"] = LevelIcon;