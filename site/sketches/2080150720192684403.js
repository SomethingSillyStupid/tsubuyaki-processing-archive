//#つぶやきProcessing #p5js
t=0,B=99
draw=_=>{t||createCanvas(W=(w=200)*2,W)
colorMode(HSB)
L=(a,b)=>a*x+b*(1-x)
X=w*cos(U=random(TAU))+w,Y=B*sin(U)+w
T=atan2((w-X)*B*B,(Y-w)*w*w)
for(x=0;x<1;x+=.01)
stroke((X+Y+T)%360,w,w),
point(L(X+(D=B*cos(T)),X-D),L(Y+(D=B*sin(T)),Y-D))
++t}