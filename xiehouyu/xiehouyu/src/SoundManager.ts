class SoundManager {
	public constructor() {
		this.init();
	}
	private static soundManager:SoundManager;
	public static getInstance()
	{
		if(SoundManager.soundManager == null)
		{
			SoundManager.soundManager = new SoundManager();
		}
		return SoundManager.soundManager;
	}
	public wordSound:egret.Sound;//点击字的音效
	public answerSound:egret.Sound;//关卡选项和显示答案点击音效
	public windowSound:egret.Sound;//显示答案弹窗音效
	public trueSound:egret.Sound;//答对音效
	public erroSound:egret.Sound;//答错音效
	public trueSoundChanel:egret.SoundChannel;
	public erroSoundChanel:egret.SoundChannel;
	public wordSoundChanel:egret.SoundChannel;
	public answerSoundChanel:egret.SoundChannel;
	public windowSoundChanel:egret.SoundChannel;
	private init()
	{
		this.trueSound = RES.getRes("trueSound_mp3");
		this.erroSound = RES.getRes("erroSound_mp3");
		this.wordSound = RES.getRes("word_mp3");
		this.windowSound = RES.getRes("window_wav");
		this.answerSound = RES.getRes("answer1_mp3");
	
	}	
}
window["SoundManager"] = SoundManager;
