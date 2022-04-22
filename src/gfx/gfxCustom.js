const Canvas = require("canvas");

module.exports = class customGfx2 {

    constructor() {
        this.bg = "https://app.finvxl.rf.gd/file/0JCws4X5OY2O.jpg";
        this.text1 = "lingz";
        this.text2 = "knights";
        
    }
    setText1(value) {
        this.text1 = value;
        return this;
    }
    setText2(value) {
        this.text2 = value;
        return this;
    }
    async toAttachment() {
        const canvas = Canvas.createCanvas(600, 600);
        const ctx = canvas.getContext("2d");
          
        let iyga = await Canvas.loadImage(this.bg);
        ctx.drawImage(iyga, 0, 0, 600, 600);
        
    ctx.save();
	ctx.beginPath();
    let usrname = this.text1;
    let name = usrname.length > 5 ? usrname.substring(0, 5) + "" : usrname;
    ctx.globalAlpha = 1;
    ctx.textAlign = 'center';
    ctx.font = "115px Unitalic";
    ctx.fillStyle = "#FF00EF";
    ctx.shadowBlur = 6;
    ctx.shadowColor = "black";
    ctx.fillText(name, 300, 540);
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.strokeText(name, 300, 540);
	ctx.restore();
        
    ctx.save();
	ctx.beginPath();
    ctx.shadowBlur = 4;
    ctx.shadowColor = "black";
    let uname = this.text2;
    let nama = uname.length > 5 ? uname.substring(0, 5) + "" : uname;
    ctx.font = "bold 62px Unitalic";
    ctx.textAlign = 'center';
    ctx.fillStyle = "#ffffff";
    ctx.fillText(nama, 320, 590);
    ctx.lineWidth = 2;
    ctx.fillStyle = "#000000";
    ctx.strokeText(nama, 320, 590);
	ctx.restore(); 
	
        return canvas;
    }
};
