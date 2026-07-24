setup=_=>createCanvas(400,400)
t = 0;
draw=_=>{
background(240,5);
noFill();
stroke(200,9,60)
beginShape()
for(let i = 0; i<300; i++){
x=cos(i)*i*(.5+noise(t+i))+200+noise(t);
y=sin(i)*i*(.5+noise(t+i))+200+noise(t);
curveVertex(x,y);
}
endShape();
t+=.01;}//#つぶやきprocessing