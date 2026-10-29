//#つぶやきProcessing #p5js
t=0
draw=_=>{
createCanvas(W=(w=200)*2,W)
strokeWeight(8)
for(F=0;F<1.5;F+=.05)
for(y=0;y<1;y+=.01)
stroke(t,max(0,mag((X=y*F*sqrt(1-y)*w)+w,((Y=y*W)-W))-t)*55*(atan2(W-Y,X)%.1),9,80),point(X+w,Y),point(w-X,Y)
++t}