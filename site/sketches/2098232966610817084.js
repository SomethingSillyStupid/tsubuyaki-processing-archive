//#つぶやきProcessing #p5js
t=0
draw=_=>{createCanvas(W=(w=200)*2,W)
L=x=>(U=x-w,(U<0?-1:1)*(log(abs(cos(t/w)*(w/U)))*log(abs(sin(t/w)*U))))
strokeWeight(7)
stroke('blue')
for(x=0;x<W;x+=8)for(y=0;y<W;y+=8)M=mag(X=L(x),Y=L(y))*40,
point(M*sin(T=atan2(Y,X))+w,M*cos(T)+w)
++t}