class AnswerWord extends Word{
	public constructor() {
		super();
		// this.skinName = "resource/eui_skins/AnswerWord.exml";
	}
	public selectWord:Word = null;//用一个变量来保存点击到的字
	protected onclick_tap()//不同的点击逻辑
	{
		SoundManager.getInstance().answerSoundChanel = SoundManager.getInstance().answerSound.play(0,1);
		SoundManager.getInstance().answerSoundChanel.volume = 1;
		//恢复点进来的字
		if(this.selectWord != null)//这里是恢复
		{
			this.selectWord.visible = true;  
			this.selectWord = null;
			this.SetWordText("");//将自身的字清除
		}
		console.log("答案字被点击")
	}

	public SetSelectWord(word:Word)//当一个答案字被点击时，把它保存到变量中,并消失
	{
		if(word!=null)
		{
			word.visible = false;
			this.SetWordText(word.GetWordText());//这里实现答案字显示问题字.
			this.selectWord = word;//将问题字存储在答案字，一一对应，方便后面恢复显示。
		}
		else
		{
			this.SetWordText("");
			this.selectWord = null;
		}
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

window["AnswerWord"] = AnswerWord;