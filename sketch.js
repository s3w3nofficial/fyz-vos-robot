let anchor = [500, 500];

let alfa1 = 70;
let alfa2 = 30;
let alfa3 = 90;

function changeAngleA1(value) {
    recalc()
    alfa1 = value;
}
function changeAngleA2(value) {
    recalc()
    alfa2 = value;
}

a1 = () => +alfa1 + +180;
a2 = () => +alfa2 + +270;

function setup() {
    createCanvas(800, 600);
}

function draw() {

    background(240);
    let anchor2 = calcSinCos(anchor, a1(), 120);
    let pre_res = calcSinCos(anchor2, a2() - 180, 120);
    let res = calcSinCos(pre_res, 180, 130);


    drawLine(anchor, anchor2);
    drawLine(anchor2, pre_res);
    drawLine(pre_res, res);


    drawPoint(anchor);
    drawPoint(anchor2);
    drawPoint(pre_res);
    drawPoint(res);

    drawAxis([500, 0], [500, 600]);
    drawAxis([0, 500], [800, 500]);

}

function drawPoint(coords) {
    stroke('crimson')
    strokeWeight(10);
    point(coords[0], coords[1]);
}

function drawLine(point1, point2) {
    strokeWeight(3);
    stroke('black')
    line(point1[0], point1[1], point2[0], point2[1]);
}

function drawAxis(point1, point2) {
    strokeWeight(1);
    stroke('black')
    line(point1[0], point1[1], point2[0], point2[1]);
}

calcSinCos = (point, angle, radius) => [point[0] + radius * cos(toRadians(angle)), point[1] + radius * sin(toRadians(angle))]
toRadians = (angle) => angle * (Math.PI / 180);

function recalc() {
    let resultSpan = document.getElementById('resultSpan');

    let anchor2 = calcSinCos(anchor, a1(), 120);
    let pre_res = calcSinCos(anchor2, a2() - 180, 120);
    let res = calcSinCos(pre_res, 180, 130);

    let textRes = `<div>X: ${res[0].toFixed(2)}</div>`
    let textResY = `<div>Y: ${res[1].toFixed(2)}</div>`
    resultSpan.innerHTML = textRes + textResY
}
