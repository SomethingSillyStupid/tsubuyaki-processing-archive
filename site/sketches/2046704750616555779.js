//#つぶやきProcessing #p5js
t=0,x=y=w=200,D=0,F=20
draw=_=>{r=random;P=PI
t||createCanvas(W=w*2,W)+colorMode(HSB,3)+strokeWeight(8)
d=r([-P/2,0,P/2])
D=D+d>P*3/2?d-=P:d
stroke(abs(D+x+y)%3,3,3)
line(x,y,x+=F*cos(d),y+=F*sin(d))
x<=0?x=W-F:x>=W?x=F:0
y<=0?y=W-F:y>=W?y=F:0
t=++t%W}