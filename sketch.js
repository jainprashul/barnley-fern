let x = 0;
let y = 0;

function setup() {
    createCanvas(600,600);
    background(51);

}

function nextP() {
    let r = random(1);
    let xnext , ynext;

    if (r < .01){
        // 1
        xnext = 0;
        ynext = 0.16* y;
    } else if ( r < .86) {
        //2
        xnext = 0.85 * x + 0.04 * y;
        ynext = -0.04 * x + 0.85 * y + 1.6;
    } else if (r < .93) {
        //3
        xnext = 0.2 * x - 0.26 * y;
        ynext = 0.23 * x + 0.22 * y + 1.6;
    } else {
        //4
        xnext = -0.15 * x + 0.28 * y;
        ynext = 0.26 * x + 0.24 * y + 0.44;
    }
    x = xnext;
    y = ynext;
    console.log(x , y);

}

function drawP() {
   // translate(width/2,height/2);
    stroke(255);
    strokeWeight(2);
    let px = map(x, -2.1820,2.1820, 0 ,width);
    let py = map(y , 0,9.9983, height , 0);
    point(px,py);
}

function draw() {
    for (let i = 0; i < 100; i++) {
        drawP();
        nextP();
    }

}