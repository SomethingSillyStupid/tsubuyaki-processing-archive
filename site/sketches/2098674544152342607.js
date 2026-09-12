//#つぶやきProcessing #p5js
t=0
draw=_=>{createCanvas(W=(w=200)*2,W)
colorMode(HSB)
L=x=>(U=x-w,(U<0?-1:1)*log(abs(w/U*(V=sin(t/w))+U*(1-V))))
for(x=0;x<W;x+=4)for(y=0;y<W;y+=4)M=mag(X=L(x),Y=L(y))*44,
strokeWeight((X*Y)*sin(M)*3),
point(M*sin(T=atan2(Y,X))+w,M*cos(T)+w)
++t}