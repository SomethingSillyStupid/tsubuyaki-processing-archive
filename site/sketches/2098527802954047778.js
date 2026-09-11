//#つぶやきProcessing #p5js
t=0
draw=_=>{createCanvas(W=(w=200)*2,W)
L=x=>(U=x-w,(U<0?-1:1)*(log(55-abs(w/U*(F=sin(t/W))+U*sin(t/W-.4)))))
strokeWeight(7)
stroke('blue')
for(x=0;x<W;x+=4)for(y=0;y<W;y+=4)M=mag(X=L(x),Y=L(y))*44,
point(M*sin(T=atan2(Y,X)+t/M/3)+w,M*cos(T)+w)
++t}