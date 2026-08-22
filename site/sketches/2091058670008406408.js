//Still WIP #つぶやきProcessing #p5js
t=0,d=20
draw=_=>{
createCanvas(W=(w=200)*2,W)
F=(x,y,r,R,T,C=cos(T),S=sin(T))=>circle(X=r*R*C+x,Y=r*R*S+y,dist(X,Y,r*C+x,r*S+y)*2)
for(x=i=0;x<W;x+=d,i++)for(y=0;y<W;y+=d,i++)fill(i%2?W:w),circle(x,y,d),fill(i%2?w:W),F(x,y,d/2,.5,t/41)
++t}