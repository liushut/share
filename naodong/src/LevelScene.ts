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
		
	public imgHead:eui.Image;
	public groupHead:eui.Group;
	public imgHeadBlack:eui.Image;
	public btn_before:eui.Button;
	public labelGrade:eui.Label;
	public groupLevel:eui.Group;//容器类
	public btn_next:eui.Button;
	public groupStars:eui.Group;//星星数组
	public levelBg:eui.Image;

	private nameArray:string[] = ["xinshou_png","xuezhe_png","dashi_png","zongshi_png","zhizhe_png","xianzhi_png"];
	// private groups:eui.Group[] = [];//group数组
	private curIndex:number = 0;//当前关卡页数。  0 - 29

	// private curGroup:eui.Group;//当前
	private static levelScene:LevelScene;
	public imagehuiGrade:eui.Image;//灰横幅
	public imageGrade:eui.Image;//横幅




public static  getInstance()
{
	if(LevelScene.levelScene == null)
	{
		LevelScene.levelScene = new LevelScene();
	}
	return LevelScene.levelScene;
}
	private initMap()
	{
		//初始化group
		for(let i =  0; i<  30 ; i++)
		{
			let icon = new LevelIcon();
			icon.Level = i + 1;
			let tLayout:eui.TileLayout = new eui.TileLayout();
			tLayout.horizontalGap = 2;
			tLayout.verticalGap = 10;
			tLayout.requestedColumnCount = 6; 
			this.groupLevel.layout = tLayout;
			this.groupLevel.addChild(icon);
			
		}
		//初始化星星
		let starIndex = this.curIndex % 5;
		let group = this.groupStars;
		group.getChildAt(starIndex).alpha = 1;


		//当前头像正确
		this.imgHead.source = this.nameArray[0];
		this.imgHeadBlack.alpha = 0;

		//将当前关卡显示正确
		this.showLevelIcon(LevelDataManager.getInstance().GetMileStone());//显示到最远的
		//打开就是最远纪录的关卡
		// this.showMaxLevelIcon(LevelDataManager.getInstance().GetMileStone());

		

	}
		//打开就是最远纪录的关卡,然后在此基础上翻页
	public showMaxLevelIcon(level:number)
	{
		this.curIndex = this.getCurIndex();//得到当前的页数
	}
	//当前关卡的前面都显示
	public showLevelIcon(index:number)
	{
		for(let i = 0;i < this.groupLevel.numChildren;i++)
		{
			let icon = <LevelIcon>this.groupLevel.getChildAt(i);
			let num = icon.Level;//开始是1 
			if(num <= index)
			{
					icon.setLevelIndex(false);
			}
			else
			{
					icon.setLevelIndex(true);
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
		if (this.curIndex == 1) {
			console.log("第一关");
			this.btn_before.visible = false;
		}
		let starIndex = this.curIndex % 5;
		let group = this.groupStars;
		group.getChildAt(starIndex).alpha = 0;
		this.curIndex--;
		this.updateLabel(this.groupLevel, this.curIndex);
		this.updateGrade(this.curIndex);
		this.showLevelIcon(LevelDataManager.getInstance().GetMileStone());

	}
	//看下一个关卡
	private onNext()
	{
		SoundManager.getInstance().answerSound.play(0,1);
		if(this.curIndex == 29)
		{
			console.log("最后一关");
			this.btn_next.visible = false;
			
			return;
		}
		
		this.curIndex++;
		console.log("sss" + this.curIndex);
		this.updateLabel(this.groupLevel,this.curIndex);//更新关卡
		this.updateGrade(this.curIndex);//更新头像
		this.showLevelIcon(LevelDataManager.getInstance().GetMileStone());//显示关卡和头像
	}
	//判断最远关数在第几页
	private getCurIndex():number
	{
		let level = LevelDataManager.getInstance().GetMileStone();
		let curLevel = 0;
		if(level >= 1 && level <= 30)
		{
			curLevel = 0;
		}
		else if(level >= 31 && level <= 60)
		{
			curLevel = 1;
		}
		else if(level >= 61 && level <= 90)
		{
			curLevel = 2;
		}
		else if(level >= 91 && level <= 120)
		{
			curLevel = 3;
		}
		else if(level >= 121 && level <= 150)
		{
			curLevel = 4;
		}
		else if(level >= 151 && level <=180)
		{
			curLevel = 5;
		}
		else if(level >= 181 && level <= 210)
		{
			curLevel = 6;
		}
		else if(level >= 211 && level <= 240)
		{
			curLevel = 7;
		}
		else if(level >= 241 && level <= 270)
		{
			curLevel = 8;
		}
		else if(level >= 271 && level <= 300)
		{
			curLevel = 9;
		}
		else if(level >= 301 && level <= 330)
		{
			curLevel = 10;
		}
		else if(level >= 331 && level <= 360)
		{
			curLevel = 11;
		}
		else if(level >= 361 && level <= 390)
		{
			curLevel = 12;
		}
		else if(level >= 391 && level <= 420)
		{
			curLevel = 13;
		}
		else if(level >= 421 && level <= 450)
		{
			curLevel = 14;
		}
		else if(level >= 451 && level <= 480)
		{
			curLevel = 15;
		}
		else if(level >= 481 && level <= 510)
		{
			curLevel = 16;
		}
		else if(level >= 511 && level <= 540)
		{
			curLevel = 17;
		}
		else if(level >= 541 && level <= 570)
		{
			curLevel = 18;
		}
		else if(level >= 571 && level <= 600)
		{
			curLevel = 19;
		}
		else if(level >= 601 && level <= 630)
		{
			curLevel = 20;
		}
		else if(level >= 631 && level <= 660)
		{
			curLevel = 21;
		}
		else if(level >= 661 && level <= 690)
		{
			curLevel = 22;
		}
		else if(level >= 691 && level <= 720)
		{
			curLevel = 23;
		}
		else if(level >= 721 && level <= 750)
		{
			curLevel = 24;
		}
		else if(level >= 751 && level <= 780)
		{
			curLevel = 25;
		}
		else if(level >= 781 && level <= 810)
		{
			curLevel = 26;
		}
		else if(level >= 811 && level <= 840)
		{
			curLevel = 27;
		}
		else if(level >= 841 && level <= 870)
		{
			curLevel = 28;
		}
		else if(level >= 871 && level<= 900)
		{
			curLevel = 29;
		}

		return  curLevel;

	}
	//得到最远关数在第几页。
	private getCurIndexMini(level:number):number
	{
		let curIndex = 0;
		curIndex  = Math.ceil(level / 30);//只数组从0开始。其余还是遵守习惯。因为从0开始的,从1开始的就是floor
		return curIndex;
	}
	//更新头像级别
	private updateGrade(index:number)//30页
	{
		if(index == 0)
		{
			this.imgHead.source = this.nameArray[0];
			this.imgHeadBlack.alpha = 0;
			
		}
		else if(index >0 && index < 5)//0 4
		{
			this.imgHeadBlack.alpha = 1;
			this.btn_before.visible = true;
			this.imgHead.source = this.nameArray[0];
			this.imgHeadBlack.source = "hui" + this.nameArray[0];
			this.labelGrade.text = "新手";
			if(index == 4)
			{
					//星星重置
				for(let i = 0; i < this.groupStars.numChildren;i++)
				{
					this.groupStars.getChildAt(i).alpha = 1;
				}
			}

		}
		else if(index >= 5 && index < 10)//5 9
		{
			this.imgHead.source = this.nameArray[1];
			this.imgHeadBlack.source = "hui" + this.nameArray[1];
			this.labelGrade.text = "学者"
			if(index == 5)
			{
					//星星重置
				for(let i = 0; i < this.groupStars.numChildren;i++)
				{
					this.groupStars.getChildAt(i).alpha = 0;
				}
			}
			else if(index == 9)
			{
					//星星重置
				for(let i = 0; i < this.groupStars.numChildren;i++)
				{
					this.groupStars.getChildAt(i).alpha = 1;
				}
			}
		
		}
		else if(index >= 10 && index < 15)
		{
			this.imgHead.source = this.nameArray[2];
			this.imgHeadBlack.source = "hui" + this.nameArray[2];
			this.labelGrade.text = "大师"
			if(index == 10)
			{
					//星星重置
				for(let i = 0; i < this.groupStars.numChildren;i++)
				{
					this.groupStars.getChildAt(i).alpha = 0;
				}
			}
			else if(index == 14)
			{
						//星星重置
				for(let i = 0; i < this.groupStars.numChildren;i++)
				{
					this.groupStars.getChildAt(i).alpha = 1;
				}
			}
			
		}
		else if(index >= 15 && index < 20)
		{
			this.imgHead.source = this.nameArray[3];
			this.imgHeadBlack.source = "hui" + this.nameArray[3];
			this.labelGrade.text = "宗师"
			if(index == 15)
			{
						//星星重置
				for(let i = 0; i < this.groupStars.numChildren;i++)
				{
					this.groupStars.getChildAt(i).alpha = 0;
				}
			}
			else if(index == 19)
			{
					//星星重置
				for(let i = 0; i < this.groupStars.numChildren;i++)
				{
					this.groupStars.getChildAt(i).alpha = 1;
				}
			}
		
		}
		else if(index >=20 && index < 25 )
		{
			this.imgHead.source = this.nameArray[4];
			this.imgHeadBlack.source = "hui" + this.nameArray[4];
			this.labelGrade.text = "智者"
			if(index == 20)
			{
						//星星重置
				for(let i = 0; i < this.groupStars.numChildren;i++)
				{
					this.groupStars.getChildAt(i).alpha = 0;
				}
			}
			else if(index == 24)
			{
					//星星重置
				for(let i = 0; i < this.groupStars.numChildren;i++)
				{
					this.groupStars.getChildAt(i).alpha = 1;
				}
			}
		
		}
		else if(index >= 25 && index < 30)
		{
			this.btn_next.visible = true;
			this.imgHead.source = this.nameArray[5];
			this.imgHeadBlack.source = "hui" + this.nameArray[5];
			this.labelGrade.text = "先知";
			if(index == 25)
			{
							//星星重置
				for(let i = 0; i < this.groupStars.numChildren;i++)
				{
					this.groupStars.getChildAt(i).alpha = 0;
				}
			}
			else if(index == 29)
			{
					//星星重置
				for(let i = 0; i < this.groupStars.numChildren;i++)
				{
					this.groupStars.getChildAt(i).alpha = 1;
				}
			}

		
		}
		let starIndex = index % 5;
		let group = this.groupStars;
		group.getChildAt(starIndex).alpha = 1;
			
		//当前的页面到达指定 真实页面
		let realIndex = (LevelDataManager.getInstance().GetMileStone() / 30);//真实页面  最远关卡  0   展示页面到达5 封锁   除去realIndex == 0
		//数字可以是浮点数
		if(realIndex >= 0 && realIndex <= 5)
		{
			LevelDataManager.tempIndex = 5;  //新手
		}
		else if(realIndex > 5 && realIndex <= 10)
		{
			LevelDataManager.tempIndex =  10;//
		}
		else if(realIndex > 10 && realIndex <= 15)
		{
			LevelDataManager.tempIndex = 15;
		}
		else if(realIndex > 15 && realIndex <= 20)
		{
			LevelDataManager.tempIndex = 20;
		}
		else if(realIndex > 20 && realIndex <= 25)
		{
			LevelDataManager.tempIndex = 25;
		}
		else if(realIndex > 25 && realIndex <= 30)
		{
			LevelDataManager.tempIndex = 30
		}

		
		if (index >= LevelDataManager.tempIndex)//    150  300 450  600  750  900   
		{
			this.imagehuiGrade.visible = true;
			this.imgHeadBlack.visible = true;
		}
		else {
			this.imagehuiGrade.visible = false;
			this.imgHeadBlack.visible = false;
		}		

	}
	//替换label显示。
	private updateLabel(group:eui.Group,num:number)
	{
		for(let i = 0;i < group.numChildren;i++)
		{
			let x = <LevelIcon>group.getChildAt(i);
			if(num == 0)
			{
				x.Level = i + 1;
			}
			else
			{
				x.Level = num * 30 + 1 + i;
			}

		}
		
	}
	
		
}
window["LevelScene"] = LevelScene;