//#つぶやきProcessing #p5js
t=0
draw=_=>{
createCanvas(W=(w=200)*2,W)
colorMode(HSB,100)
for(y=0;y<W;y++)
for(x=0;x<W;x++)
stroke(50-y/25,S=86-y/20,w),
strokeWeight(E=cos(x/71+y/31+x*y+t/17)>.999?(stroke(S-13,W,W),22):1),
point(x,y),
E>1?point(x,y+6):0
++t}