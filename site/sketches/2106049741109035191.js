function setup() {
createCanvas(600,200,WEBGL);
}
f=0;
function draw() {
rotateX(-0.3);
g=(f%60)/60;
h=(((f%480)/60)|0)-4;
background('teal');
translate(100*h+50,50,0);
rotateZ((PI/2)*g);
translate(-50,-50,0);
box(100);
f++;
}