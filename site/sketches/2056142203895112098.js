//#つぶやきProcessing #p5js
t=0
draw=_=>{
t||createCanvas(W=(w=200)*2,W)+colorMode(HSB)+(B=random(255),t=5,P=[2,3])
C=x=>x*cos(x)+w
P.reduce((a,c)=>a&&(t%c!=0),1)?P.push(t):0
https://t.co/zuB9SSxcnY(n=>(stroke((B+n)%255,w,w,.4),line(x,y,x=C(U=n+t/77),y=C(U-1.6))),x=y=w)
t=++t%W}