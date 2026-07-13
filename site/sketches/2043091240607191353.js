//#つぶやきProcessing #p5js
t=0
draw=_=>{
createCanvas(W=(w=200)*2,W)
strokeWeight(6)
for(x=-9;x<9;x+=.1)
for(y=-9;y<9;y+=.1)
stroke(w*cos(U=x+y+t/W),w*sin(U),w*tan(U)),
(M=abs(x*x-y*y+2*x*y*t/W/W)%1)<.1?point(w/9*(x*cos(V=M+t/w)-y*sin(U))+w,w-w/9*(x*sin(V)+y*cos(V))):0
++t}