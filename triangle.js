var canvas = document.getElementById('canvasid');
var ctx = canvas.getContext('2d');

//3 points
ctx.fillRect(0,0,1,1);
ctx.fillRect(800,0,1,1);
ctx.fillRect(400,800,1,1);

var x4 = randomnumber(0, 800);
var y4 = randomnumber(0, 800);

function midpoint(a, b, h, i){
    var nx = (a + h)/2
    var ny = (b + i)/2
    return [nx, ny];
};

function randomnumber(min, max) {  
    return Math.random() * (max - min) + min; 
};

function randomchoice(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
};


for (let times = 0; times < 100000; times++){
    var rpy = 0
    var rpx = randomchoice([0,800,400])
    if (rpx == 0 || rpx == 800){
        rpy = 0;
    } else {
        rpy = 800;
    };
    var [x4, y4] = midpoint(rpx, rpy, x4, y4)
    ctx.fillRect(x4,y4,1,1);
};
