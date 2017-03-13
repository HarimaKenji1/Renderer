var canvas = document.getElementById("app") as HTMLCanvasElement;
var stage = engine.run(canvas);
var bitmap = new engine.Bitmap();
engine.RES.getRes("wander-icon.jpg").then((value) => {
    bitmap.texture = value;
    bitmap.setWidth(bitmap.texture.width);
    bitmap.setHeight(bitmap.texture.height);
});
stage.addChild(bitmap);
let speed = 190;

engine.Ticker.getInstance().register((deltaTime) => {
    //console.log("aaa");
    bitmap.setWidth(500);
});

