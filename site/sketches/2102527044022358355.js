//WIP #つぶやきProcessing #p5js
t=0
draw=_=>{noLoop()
createCanvas(W=(w=200)*2,W)
colorMode(HSB)
for(F=0;F<1.5;F+=.01)
for(y=0;y<1;y+=.001)
stroke(mag((X=y*F*sqrt(1-y)*w)-w,(Y=y*W)-W),w,w),
point(X+w,Y),
point(w-X,Y)
++t}