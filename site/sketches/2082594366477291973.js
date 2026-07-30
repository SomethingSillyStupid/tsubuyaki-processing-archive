//#つぶやきProcessing #p5js
t=0
draw=_=>{
createCanvas(W=(w=200)*2,W)+colorMode(HSB)+noFill()
for(R=0;R<w;R+=18)for(T=0;T<TAU;T+=.1)
translate(x=R*cos(U=T+t/41)+w,y=R*sin(U)+w),
rotate(t/R+U),
stroke(D=min(x,y,W-x,W-y)*2,w,w,9),
ellipse(0,0,D,D/2),
resetMatrix()
++t}