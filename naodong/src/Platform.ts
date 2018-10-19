/** 
 * 平台数据接口。
 * 由于每款游戏通常需要发布到多个平台上，所以提取出一个统一的接口用于开发者获取平台数据信息
 * 推荐开发者通过这种方式封装平台逻辑，以保证整体结构的稳定
 * 由于不同平台的接口形式各有不同，白鹭推荐开发者将所有接口封装为基于 Promise 的异步形式
 */
var {Query,User} = AV;
declare interface Platform {
  //开放数据域
    openDataContext:any;

    shareCloud():Promise<any>;
    testShare():Promise<any>;
    getAVUserInfo(): Promise<any>;//得到用户信息
    shareAppMessage():Promise<any>;//分享功能

    shouAD():Promise<any>;//看广告
    showVideoAD():Promise<any>;//看视频



}



if (!window.platform) {
    window.platform = new WeChatPlatform();
}



declare let platform: Platform;

declare interface Window {

    platform: Platform
}





