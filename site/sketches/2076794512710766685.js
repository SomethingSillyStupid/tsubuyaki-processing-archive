//#つぶやきProcessing #p5js
t=0,N=50
draw=_=>{createCanvas(W=(w=200)*2,W)
colorMode(HSB)
background(w,99,W)
for(i=k=0;i<N;i++)for(j=X=0,A=Y=i*W/N;j<N;j++,k++)stroke((X+Y+i+j)%50+100,w,w),strokeWeight((i+j)%5),line(X,Y,X=j%N*W/N+(T=w*sin(t/17))*sin(K=k/3+T),Y=A+T*cos(K))
t+=.01}