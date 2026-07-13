//#つぶやきProcessing #p5js
t=0
draw=_=>{r=random
t||createCanvas(W=(w=200)*2,W)+colorMode(HSB)+noStroke()
background(0,.01)
C=(x,y,R,n)=>n<1?(fill((R+n+t)%255,w,w,.6),rect(x,y,r(9))):[0,1,2,3,4,5].map(i=>C(R*cos(i+t)+x,R*sin(i+t)+y,R*(t%W)/W,n-1))
C(w,w,w,4)
++t}