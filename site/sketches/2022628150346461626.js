//#つぶやきProcessing #p5js
t=0,d=.03
draw=_=>{r=random
t++||createCanvas(W=(w=200)*2,W)+(R=r(2))
G=_=>int(r(-5,5))
A=G(),B=G(),U=G(),V=G()
for(x=-5;x<5;x+=d)
for(y=-5;y<5;y+=d)
stroke(W*sin(D=mag(A-x,U-y)),W*sin(E=mag(B-x,V-y)),W*(A+B)),
abs(D/E-R)<1/w?point(x*40+w,y*40+w):0
}