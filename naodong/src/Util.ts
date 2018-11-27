class Util {
	public constructor() {
	}
	/**由服务器给的一个随机uid标识 */
	static localUID = "";
	static _grayFilters:any[];
	static get grayFilters(){
		return Util._grayFilters = Util._grayFilters || [new egret.ColorMatrixFilter([
			0.3, 0.3, 0.3, 0, 0,
			0.3, 0.3, 0.3, 0, 0,
			0.3, 0.3, 0.3, 0, 0,
			0, 0, 0, 1, 0
		])];
	}
	/**从数组里随机挑一个元素返回 */
	static randomChoose<T>(arr:T[]):T{
		return arr[Math.floor(Math.random() * arr.length)];
	}
	/**返回用于确定某个用户的简单的唯一UID字串 */
	static getShareUID(){
		let uid = (wx.getStorageSync("shareUID") || (new Date().getTime() + "" + Math.random())) as string;
		wx.setStorageSync("shareUID", uid);
		return uid;
	}
	
	/**拉起分享
	 * @param withShareTicket 是否启用群分享的shareTicket
	 * @param queryObj 传递给分享链接的参数，null则不传递任何参数，否则默认会传递st、rn、uid参数（分享开始时间，随机值，分享者的临时UID）
	 */
	static share(withShareTicket:boolean, queryObj:any = {}){
		wx.updateShareMenu({
			withShareTicket:withShareTicket,
			success:(res?:any)=>{
				console.log("wx.updateShareMenu success", res);
				let st = new Date().getTime();
				let rn = Math.random();
				let query = `st=${st}&rn=${rn}&uid=${Util.getShareUID()}`;
				//将分享标记存到本地，等下次再开启游戏的时候可用于检查分享奖励能否获得
				if(withShareTicket){
					//分享数+1
					// Util.setShareQueryNum(Util.getShareQueryNum() + 1);
				}
				if(queryObj){
					for(let p in queryObj){
						query += "&" + p + "=" + queryObj[p];
					}
				}
				// console.log("Util.share",queryObj);
				//分享完成回调提交正式版以后不能用的，所以不能依赖
				let sinfo = LevelDataManager.getShareToInfo(query);
				console.log("pull share, info", sinfo);
				wx.shareAppMessage({
					title:sinfo.title,
					imageUrl:sinfo.imgURL,
					query:""
				});
			},
			fail:(res?:any)=>{console.log("wx.updateShareMenu fail", res);},
			complete:(res?:any)=>{console.log("wx.updateShareMenu complete", res);}
		});
	}


	static getSharedQuerys(){
		return (wx.getStorageSync("sharedQuerys") || []) as any[];
	}
	static setSharedQuerys(querys:any[]){
		wx.setStorageSync("sharedQuerys", querys);
	}
	static addSharedQuery(query:string, prescene_note:string, startTime:number, endTime:number){
		let sharedQuerys = Util.getSharedQuerys();
		sharedQuerys.push({ query:query, prescene_note:prescene_note, startTime:startTime, endTime:endTime });
        Util.setSharedQuerys(sharedQuerys);
	}
	static req(url:string, data:any, back:(res:any)=>void, thisobj:any, isJson:boolean = true){
		let req = new egret.HttpRequest();
        req.open(url);
        let onOK = ()=>{
            doit();
        }
        let onErr = ()=>{
            doit();
        }
        let doit = ()=>{
            req.removeEventListener(egret.Event.COMPLETE, onOK, this);
            req.removeEventListener(egret.IOErrorEvent.IO_ERROR, onErr, this);
			back.call(thisobj, isJson ? JSON.parse(req.response) : req.response);
        }
        req.addEventListener(egret.Event.COMPLETE, onOK, this);
        req.addEventListener(egret.IOErrorEvent.IO_ERROR, onErr, this);
		data = data || {};
		data.localUID = Util.localUID;
        req.send(data);
	}
	private static rewardVideoAD:any;
	private static onRewardVideoErr:()=>void;
	private static onRewardVideoEnd:()=>void;
	private static rewardVideo_thisObj:any;
	static createRewardVideoAD(videoUnitID:string){
		if(!wx["createRewardedVideoAd"]){
			console.log("not support reward video");
			return;
		}
		let vid = Util.rewardVideoAD = wx["createRewardedVideoAd"]({ adUnitId:videoUnitID });
        vid.onError(err => {
            console.log("videoAD err",err);
			Util.onRewardVideoErr.call(Util.rewardVideo_thisObj);
        });
        vid.onLoad(() => {
            console.log('videoAD loaded');
        });
        vid.onClose(res => {
            // 用户点击了【关闭广告】按钮
            console.log("videoAD end", res);
            if (res && res.isEnded || res === undefined) {
                // 正常播放结束，可以下发游戏奖励
                Util.onRewardVideoEnd.call(Util.rewardVideo_thisObj);
            }else {
                // 播放中途退出，不下发游戏奖励
            }
        });
	}
	/**
	 * 播放激励视频
	 * @param onEnd 完整播放完成处理函数
	 * @param onErr 播放失败处理函数
	 * @param thisObj 回调函数的this的指向对象
	 * */
	static showRewardVideoAD(onEnd:()=>void, onErr:()=>void, thisObj:any){
		Util.onRewardVideoEnd = onEnd;
		Util.onRewardVideoErr = onErr;
		Util.rewardVideo_thisObj = thisObj;
		if(Util.rewardVideoAD){
			Util.rewardVideoAD.show().then().catch(err=>{
                console.log("rewardVideoAD failed,", err);
                Util.onRewardVideoErr.call(Util.rewardVideo_thisObj);
            })
		}else{
			Util.onRewardVideoErr.call(Util.rewardVideo_thisObj);
		}
	}
}