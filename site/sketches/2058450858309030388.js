//#つぶやきProcessing #p5js
t=0
draw=_=>{createCanvas(W=(w=200)*2,W)+noStroke(s=sin,c=cos)
F=(r,n=50)=>n<1?w/R:(vertex((R=r+r/7*s((U=n*.13)*7))*c(U+r)+x,R*s(U+r)+y),F(r,n-1))
for(T=0;T<TAU;T+=.01)beginShape(),x=(R=t%w)*c(S=T+c(t))+w,y=R*s(S)+w,fill(R,0,w,F(50)),endShape()
++t}