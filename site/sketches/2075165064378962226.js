t=0
draw=_=>{
E=TAU,s=sin,c=cos
t++||createCanvas(W=(w=200)*2,W)
for(P=0,N=2**t,H=PI/N;P<E;P+=E/(2*N+1))for(T=0;T<E;T+=.01)point(X=(R=25*(t+1))*(c(T)*tan(H)+c(P)/c(H))+w,Y=R*(s(T)*tan(H)+s(P)/c(H))+w)
t=++t%7}
