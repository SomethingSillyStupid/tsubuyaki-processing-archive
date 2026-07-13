//#つぶやきProcessing #p5js
t=0
draw=_=>{t||createCanvas(W=(w=200)*2,W)+strokeWeight(d=random(3,19))
for(R=0;R<W;R+=d)for(p=t;p<TAU+t;p+=.1)(abs((X=d/t*cos(p+t/w))-(Y=d/t*sin(p+t/w)))<.1)?(stroke(X=abs(d*X+t)%w,Y=abs(Y-R*d)%w,(X+Y)%w),point(R*cos(R+p)+w,R*sin(R+p)+w)):0
t=++t%W}