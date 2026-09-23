// #つぶやきProcessing #p5js
t=0
draw=_=>{
createCanvas(W=(w=200)*2,W)
strokeWeight(8)
for(F=0;F<1.5;F+=.01)
for(y=0;y<1;y+=.01)
M=mag((X=y*F*(1-y)**.5*w)-w,Y=y*W),
T=atan2(W-Y,X),
stroke(71,M+w*cos(T%.2+F-t/17),W*F/1.5),
point(X+w,Y),
point(w-X,Y)
++t}