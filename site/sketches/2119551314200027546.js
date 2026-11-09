//#つぶやきProcessing #p5js
t=0,P=[]
draw=_=>{c=cos,s=sin
createCanvas(W=(w=200)*2,W)
P.push(t/4)
P.map(x=>{for(R=0;R<W;R+=3)X=(Q=R%(W*s(L=t/w)))*c(x-R),Y=Q*c(x-R+1.6+s(L)),stroke(R%360,X*3,Y*3),point(X*c(L)-Y*s(L)+w,X*s(L)+Y*c(L)+w)})
t>w?P.shift():0
++t}