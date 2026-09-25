// #つぶやきProcessing #p5js
t=0
draw=_=>{
createCanvas(W=(w=200)*2,W)
strokeWeight(4)
for(F=0;F<1.5;F+=.01)
for(y=0;y<1;y+=.008)
M=mag((X=y*F*sqrt(1-y)*w),Y=y*W),
stroke(w*sin(t/44),W*(sin((M+X)%53+t/17)),89*F),
point(X+w,Y),
point(w-X,Y)
++t}