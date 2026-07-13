//#つぶやきProcessing #p5js
t=0
draw=_=>{H=PI/2,Q=H/2,D=TAU
t||createCanvas(W=(w=200)*2,W)
f=(F,V,S)=>(F==0?1:1-V/Q)*(int(S/PI)%2?-1:1)*99
g=(C,P)=>(F=int((S=T+P)/H)%2,V=S%H,stroke(C),point(t,w-(R=f(F,V,S))),stroke(0),R)
T=t*D/W
point(g('blue',Q)+w,g('red',Q+H)+w)
t=++t%W}