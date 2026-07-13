//ポアンカレの円盤2 #つぶやきProcessing #p5js
draw=_=>{E=TAU,s=sin,c=cos
createCanvas(W=(w=200)*2,W)
circle(w,w,W)
for(t=0;t<6;t++)for(P=0,N=2**t,H=PI/N;P<E;P+=E/(2*N+1))for(T=0;T<E;T+=.01)mag(X=(R=40*(t+1))*(c(T)*tan(H)+c(P)/c(H)),Y=R*(s(T)*tan(H)+s(P)/c(H)))<w?point(X+w,Y+w):0}