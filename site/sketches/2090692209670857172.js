//#つぶやきProcessing #p5js
t=0
draw=_=>{
t||createCanvas(W=(w=200)*2,W)+colorMode(HSB)+circle(w,w,W)
noFill()
stroke(abs(360*cos(t*17)),w,w,.3)
circle(x=(R=99+39*cos(t/7))*cos(T=t/17)+w,y=R*sin(T)+w,dist(x,y,w*cos(T)+w,w*sin(T)+w)*2)
++t}