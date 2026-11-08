//#つぶやきProcessing #p5js
t=0,P=[]
draw=_=>{c=cos,s=sin
createCanvas(W=(w=200)*2,W)
strokeWeight(4)
P.push(t/7)
P.map(x=>{for(R=0;R<W;R+=3)X=R&(Q=W*s(V=t/w))*c(T=x-R+s(V)),Y=R&Q*c(T+1.6+s(t/w)),point(X*c(U=T+V)-Y*s(U)+w,X*s(U)+Y*c(U)+w)})
t>w?P.shift():0
++t}