//#つぶやきProcessing #p5js
t=0
draw=_=>{createCanvas(W=(w=200)*2,W)
colorMode(HSB)
L=(x=0,y=0)=>x>W?0:y>W?L(x+9,0):(fill(eval(S),W,W,.4),rect(...eval(P),8),L(x,y+9))
S=w,P='[x,y]',L()
S='W*abs(cos(x*y+t/w))',P='[(D=mag(x-w,y-w))*cos(T=t/91+atan2(y-w,x-w))+w,D*sin(T)+w]',L()
++t}