//#つぶやきProcessing #p5js
t=0,d=110
draw=_=>{
r=random
t||createCanvas(W=(w=200)*2,W)
t++%9||noStroke(I=int(r(3)))
S=T=>sin(y+T)
for(y=0,T=W*sin(t);y<W;y++)
fill([r(T)%w,r(w),y,.1].map((_,i,a)=>a[(i+I)%3])),
rect((w+d*I*S(T))*S(T+1.6)+w,(w+d*I*S(1.6-T))*S(-T)+w,r(9))}