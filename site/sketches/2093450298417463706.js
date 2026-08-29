//#つぶやきProcessing #p5js
t=0,s=0
draw=_=>{
r=random
t||createCanvas(W=(w=200)*2,W)+noFill()
colorMode(HSB)
strokeWeight(3)
stroke(H=abs(360*sin(s/3)),w,w,.3),
r()>0.4?arc(w,w,T=H%W,T*cos(s*t),s,s+=r(.5)):0
++t}