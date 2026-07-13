//#つぶやきProcessing #p5js
t=0,x=y=200
draw=_=>{t++||createCanvas(W=(w=200)*2,W)+colorMode(HSB)+strokeWeight(4)
C=x=>9*cos(x)
A=x=>x<0?x=-x:x>W?W*2-x:x
for(h=1,d=t&1;t>=h;h*=2)(!(t&h)&&(t&(h*2)))?d+=2:0
stroke(abs(30*C(t)),w,w)
line(x,y,x+=C(D=d*1.6),y+=C(D-1.6))
x=A(x),y=A(y)
}