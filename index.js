var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

var html = document.getElementById("html");
var a = document.getElementById("a");
html.style.color = "gold";
a.style.color = "gold";

vkBridge.send("VKWebAppInit", {});
vkBridge.send("VKWebAppStorageGet", {"keys": ["best"]});

var score = 0;

var back = new Image();

back.src = "bg.png";

var speed = 3;
var xCube = 160;
var yCube = 180;
var yBlock = -130;
var xBlock = 550;
var grav = 5;
var gap = 90;

function draw() {

if(xBlock < -5) {
    yBlock = 0-(Math.random()*280), xBlock =405, score++, speed +=(score/60), grav +=(score/100)
};

context.drawImage(back, 0, 0);
context.fillRect(xBlock, yBlock, 16, 300);
context.fillRect(xBlock, yBlock + 300 + gap, 16, 300);
context.fillRect(xCube, yCube, 16, 16);

context.font = "14px font";
context.textAlign = "left";
context.textBaseline = "bottom";
context.fillText("SCORE  "+score, 2, 400); //текст

context.font = "14px font";
context.textAlign = "right";
context.textBaseline = "bottom";
context.fillText("BEST  "+best, 396, 400); //текст

if(yCube > 0 && yCube < 381) {
    yCube += grav;
};

xBlock -=speed;
requestAnimationFrame(draw);
if(xBlock >= xCube && xBlock < xCube+16) {
    if(yCube < yBlock + 300) {
        if(score > best) {best = score,
        vkBridge.send("VKWebAppStorageSet", {"key": "best", "value": best});
        };   // сохранение
        location.reload();
    };
    if(yCube > yBlock + 300 + gap - 16) {
        if(score > best) {best = score,
        vkBridge.send("VKWebAppStorageSet", {"key": "best", "value": best});
        };   // сохранение
        location.reload();
    };
};

};

var ACT = 1

function drawEnd() {
    context.drawImage(back, 0, 0);
    context.font = "16px font";
    context.textAlign = "center";
    context.textBaseline = "moddle";
    context.fillText("TAP TO START", 202, 210);

    context.font = "14px font";
    context.textAlign = "center";
    context.textBaseline = "moddle";
    context.fillText("BEST "+best, 202, 230);
    context.fillStyle = "gold";
    requestAnimationFrame(drawEnd);
};

drawEnd();

document.querySelector("canvas").addEventListener("touchstart", change);
document.querySelector("canvas").addEventListener("mousedown", change);


function change() {
    if(yCube <= 0 || yCube >= 381) {
        yCube -=grav;
    };
    if(yCube > 0 || yCube < 381) {
        grav *=-1;
    };
    if(ACT != 0){
        ACT = 0,
        cancelAnimationFrame(drawEnd),
        context.clearRect(0, 0, canvas.width, canvas.height),
        draw();
    };
};
var best = keys[1];
