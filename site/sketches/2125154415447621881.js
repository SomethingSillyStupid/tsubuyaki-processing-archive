//#つぶやきProcessing #p5js
t=0
draw=_=>{t||createCanvas(W=(w=200)*2,W)
Q=x=>sqrt(abs(x)),N=int(++t)/3,T=3
for(x=-T;x<T;x+=.01){for(i=1,s=x*PI,X=x*x,c=1;i<N;i++)s*=1-X/i/i,c*=1-X/(i-.5)**2
S=Q(s),C=Q(c)
stroke(N*5,S*w,C*w)
point(X=x*w/T+w,240-(S+C)*N)
point(X,240-(S-C)*N)}
t=t%W}