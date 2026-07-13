//#つぶやきProcessing #p5js
t=i=0,d=50
draw=_=>{r=random
t++||createCanvas(W=(w=200)*2,W)+colorMode(HSB)+(x=y=w)+strokeWeight(4)
d=(w-mag(x-w,y-w)**2/w)/5+9
X=x+r(-d,d),Y=y+r(-d,d)
;(M=mag(X-w,Y-w))%d/2?(stroke(M,w,w),i++%2?(x=X,y=Y):line(x,y,x=X,y=Y)):i++
i=i>9?(x=w,y=w,0):i}