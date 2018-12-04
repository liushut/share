var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var R = (function () {
    function R() {
    }
    R.webPath = "https://huanle.hn.shqi7.net/njjzw/";
    R.apiPath = "https://huanle.hn.shqi7.net:8082/njjzw/";
    R.url_code = R.apiPath + "code";
    return R;
}());
__reflect(R.prototype, "R");
