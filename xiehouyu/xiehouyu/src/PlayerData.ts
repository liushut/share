// TypeScript file
class PlayerData
{
   
    public getMD()
    {
        let milestone = egret.localStorage.getItem("MD");
        if(milestone == "" || milestone == null)
        {
            milestone = "1";
        }
        return parseInt(milestone);
    }

    public setMD(MD:number)
    {
        egret.localStorage.setItem("MD",MD.toString());
    }
}