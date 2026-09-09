//#つぶやきProcessing #p5js
t=0
draw=_=>{createCanvas(W=(w=200)*2,W)
colorMode(HSB)
L=x=>(U=x-w,(U<0?-1:1)*log(abs(U)+w*sin(t/w)))
strokeWeight(18)
for(x=0;x<W;x+=4)for(y=0;y<W;y+=4)M=mag(X=L(x),Y=L(y))*25,stroke(M,w,w),point(M*sin(X+Y)+w,w-M*cos(X-Y))
++t}