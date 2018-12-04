class Word extends eui.Component implements  eui.UIComponent {
	
	protected  label_answer:eui.Label;
	
	
	public constructor() {
		super();
		
		this.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onclick_tap,this);
	}
 
//点击到自己后
	protected onclick_tap(){
		SoundManager.getInstance().answerSoundChanel =	SoundManager.getInstance().answerSound.play(0,1);
		SoundManager.getInstance().answerSoundChanel.volume = 1;
		console.log("onclike" + this.label_answer.text); 
		SceneGame.getInstance().onclick_Word(this);
	}


	public SetWordText(value:string)
	{
		this.label_answer.text = value;
	}

	public GetWordText()
	{
		return this.label_answer.text;
	}


	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
	}
	
}

window["Word"] = Word;