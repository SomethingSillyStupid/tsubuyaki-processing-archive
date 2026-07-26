//#つぶやきProcessing #p5js
t=0,B=-1,C=.5
setup=_=>{
for(i=0,X=[];i<100;i++)
X.push(random(-1,1))
}
draw=_=>{
t||createCanvas(W=(w=200)*2,W)
colorMode(HSB)
for(i=0,x=X[t%100],y=B*x;i<W*4;i++)
stroke((i/360+t)%360,w,w),
x1=x,
point((x=1+y-C*abs(x))*w+150,(y=B*x1)*w+300)
++t}