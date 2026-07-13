//#つぶやきProcessing #p5js
t=0
draw=_=>{r=random,U=TAU
t||createCanvas(W=(w=200)*2,W)
D=(x,y,r,n)=>{if(n>0)for(let T=t,X,Y;T<U+t;T+=.1){stroke((X=(R=r+noise(t)*19)*cos(T%U))*w,(Y=R*sin(T%U))*w,99),point(X+x+w,Y+y+w),D(X,Y,r*.9,n-1)}}
D(r(-w,w),r(-w,w),w,3)
++t}