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


	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}
	protected childrenCreated(): void {
		super.childrenCreated();
		this.btn_next.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onNext, this);
		this.btn_share.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onShare, this);


		this.Btntiaozhan.addEventListener(egret.TouchEvent.TOUCH_TAP, this.tiaozhan, this);
		this.chachaBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onchacha, this);

		//重玩和继续的按钮方法
		this.chongwanBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onreStart, this);
		this.jixuBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onResume, this);
	}
	private onchacha(e: TouchEvent) {
		this.visible = false;
		this.comboGroup.visible = false;
		SceneGame.getInstance().levelScene.visible = false;
		SceneGame.getInstance().InitLevel(LevelDataManager.getInstance().curIcon);
	}
	private tiaozhan() {
		let videoAd = (wx as any).createRewardedVideoAd({
			adUnitId: 'adunit-1d0fb93e0bab0a56'
		});
		videoAd.onError(err => {
			console.log(err)
		})
		videoAd.show().then(() => {
			console.log("解锁拉取视频成功")
		}).catch(err => {
			console.log("解锁视频拉取失败");
			    (wx as any).shareAppMessage({
                title: "小学生都能答出的脑筋急转弯，看看你能答对多少？",
                imageUrl: "resource/assets/common/title11.png"
            });
			egret.Tween.get(this).wait(200).call(()=>{
				this.visible = false;
				this.comboGroup.visible = false;
				SceneGame.getInstance().levelScene.visible = false;
				SceneGame.getInstance().InitLevel(LevelDataManager.getInstance().curIcon);
			})
		});
		videoAd.onClose(res => {
			// 用户点击了【关闭广告】按钮
			if (res && res.isEnded || res === undefined) {
				// 正常播放结束，可以下发游戏奖励
				this.visible = false;
				this.comboGroup.visible = false;
				SceneGame.getInstance().levelScene.visible = false;
				SceneGame.getInstance().InitLevel(LevelDataManager.getInstance().curIcon);
			}
			else {
				// 播放中途退出，不下发游戏奖励
				console.log("提前关闭");
			}
		})	
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
		let level = LevelDataManager.getInstance().GetMileStone();
		this.changeImg(level);
		if (level > 1 && level % 10 == 1) {  //level 是 存储的 
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
			let label: eui.BitmapLabel = element.bitlabel_levelIndex;
			//解锁关卡的标签动画   关卡界面消失后弹出发起挑战界面
			egret.Tween.get(img).to({ alpha: 0 }, 1000).call(() => {
				egret.Tween.get(label).to({ alpha: 1 }, 1000).call(() => {
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
	public getNumCurIndex(index: number): number {
		let pageIndex = Math.ceil(index / 9);
		console.log("当前页面" + pageIndex);
		return pageIndex;
	}
	private changeImg(index: number) {
		if (index >= 1 && index <= 90) {
			SceneGame.getInstance().levelScene.ImgName.source = LevelScene.getInstance().chenghuArray[0];
			SceneGame.getInstance().levelScene.ImgName.width = 86;

		}
		else if (index >= 91 && index <= 180) {
			SceneGame.getInstance().levelScene.ImgName.source = LevelScene.getInstance().chenghuArray[1];
			SceneGame.getInstance().levelScene.ImgName.width = 86;
		}
		else if (index >= 181 && index <= 270) {
			SceneGame.getInstance().levelScene.ImgName.source = LevelScene.getInstance().chenghuArray[2];
			SceneGame.getInstance().levelScene.ImgName.width = 86;
		}
		else if (index >= 271 && index <= 360) {
			SceneGame.getInstance().levelScene.ImgName.source = LevelScene.getInstance().chenghuArray[3];
			SceneGame.getInstance().levelScene.ImgName.width = 86;
		}
		else if (index >= 361 && index <= 450) {
			SceneGame.getInstance().levelScene.ImgName.source = LevelScene.getInstance().chenghuArray[4];
			SceneGame.getInstance().levelScene.ImgName.width = 86;
		}
		else if (index >= 451 && index <= 540) {
			SceneGame.getInstance().levelScene.ImgName.source = LevelScene.getInstance().chenghuArray[5];
			SceneGame.getInstance().levelScene.ImgName.width = 86;
		}
		else if (index >= 541 && index <= 630) {
			SceneGame.getInstance().levelScene.ImgName.source = LevelScene.getInstance().chenghuArray[6];
			SceneGame.getInstance().levelScene.ImgName.width = 86;
		}
		else if (index >= 631 && index <= 720) {
			SceneGame.getInstance().levelScene.ImgName.source = LevelScene.getInstance().chenghuArray[7];
			SceneGame.getInstance().levelScene.ImgName.width = 147;
		}
		else if (index >= 721 && index <= 810) {
			SceneGame.getInstance().levelScene.ImgName.source = LevelScene.getInstance().chenghuArray[8];
			SceneGame.getInstance().levelScene.ImgName.width = 147;
		}
		else if (index >= 811 && index <= 900) {
			SceneGame.getInstance().levelScene.ImgName.source = LevelScene.getInstance().chenghuArray[9];
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
		platform.restartVideo();
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