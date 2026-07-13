//#つぶやきProcessing #p5js
t=0,D=20
draw=_=>{r=random
createCanvas(W=(w=200)*2,W)
strokeWeight(D)
for(y=0;y<W;y+=D)
for(x=0;x<W;x+=1)
stroke(w*sin(y/w),w*cos(x/w),w),
point(x,(2*D*(int(y/D)%2?-1:1))*sin(x/w*TAU+t/w+y)+y)
++t}