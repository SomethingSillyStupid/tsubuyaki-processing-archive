//#つぶやきProcessing #p5js
t=0
draw=_=>{
createCanvas(W=(w=200)*2,W)+(P=2*W,Q=3*W,R=P+P)+noFill()
A=t=>(T=t%R)<0?A(T+R):T<W?T:T<P?W:T<Q?(Q-t):0
for(i=0;i<320;i+=80)
triangle(A(U=(t+i)%R),A(U-P),A(U+W),A(U),A(U+P),A(U+W))
++t}