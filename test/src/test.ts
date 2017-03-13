var canvas = document.getElementById("app") as HTMLCanvasElement;
var stage = engine.run(canvas);
var bitmap = new engine.Bitmap("wander-icon.jpg");
stage.addChild(bitmap);
let speed = 190;

engine.Ticker.getInstance().register((deltaTime) => {
    console.log("aaa");
    speed += 1;
    bitmap.setWidth(500);
});

