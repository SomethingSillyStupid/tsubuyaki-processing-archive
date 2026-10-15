//#つぶやきProcessing #p5js
t=0
draw=_=>{
createCanvas(W=(w=200)*2,W)
noStroke()
colorMode(HSB)
beginShape()
D=sin(t/w)+1.01
for(T=0;T<=TAU;T+=D)
vertex(w*cos(T)+w,w*sin(T)+w),
vertex(99*cos(T+D/2)+w,99*sin(T+D/2)+w)
fill(360*sin(t/W*D),w,w)
endShape()
++t}