//#つぶやきProcessing #p5js
t=0,C=[]
draw=_=>{
createCanvas(W=(w=200)*2,W)
colorMode(HSB)
M=x=>int(x/9)*9
for(R=1;R<W;R+=9)for(T=0;T<TAU;T+=12/R)
!C[R]?C[R]=[]:0,fill(!C[R][T]?C[R][T]=[abs(360*sin(R+T)),w,w]:C[R][T].map(x=>t%W/w*x)),
rect(R*cos(U=R+T*t/w)+w,R*sin(U)+w,9)
++t}