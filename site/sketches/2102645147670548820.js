//WIP コリウスっぽい #つぶやきProcessing #p5js
t=0,S=.3
draw=_=>{
createCanvas(W=(w=200)*2,W)
for(F=0;F<1.5;F+=.01)
for(y=0;y<1;y+=.005)
M=mag((X=y*F*sqrt(1-y)*w)-w,(Y=y*W)-W),
T=atan2(W-Y,X)-PI/2,
stroke(w*7*(1-F)*abs(sin(T%.3*20))*(W-y)/w,W*F,0),
point(X+w,Y),
point(w-X,Y)
++t}