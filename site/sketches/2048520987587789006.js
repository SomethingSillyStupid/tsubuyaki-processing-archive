//#つぶやきProcessing #p5js
t=0
draw=_=>{r=random
t||createCanvas(W=(w=200)*2,W)
colorMode(HSB)
M=(x,n)=>n>w?1:M(x,n+1)*(1-(x/n)**2)
stroke(r(255),99,W)
;(C=(x,y,R,n)=>n>w?0:(point(R*(PI*(T=n*2/w)*M(T,1))+x,-R*M(T,.5)+y),C(x,y,R--,n+1)))((Q=r(w))*cos(t)+w,Q*sin(t)+w,w,0)
++t}