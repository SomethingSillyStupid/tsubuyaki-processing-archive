//#つぶやきProcessing #p5js
t=0
draw=_=>{r=random
t||createCanvas(W=(w=200)*2,W)+colorMode(HSB)
D=(x,y,R,n)=>{if(n>0)for(let T=t,X,Y;T<TAU+t;T+=.2){point((X=R*cos(U=T%TAU)**5)+x+w,(Y=R*sin(U)**5)+y+w),stroke(180+(X*Y),W,W),D(X,Y,R*.6,n-1)}}
D(r(-w,w),r(-w,w),w,3)
++t}