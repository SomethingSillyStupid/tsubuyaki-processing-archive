//#つぶやきProcessing #p5js
t=0
draw=_=>{
t||createCanvas(W=(w=200)*2,W)+(f=1)+colorMode(HSB)
h=(x,n)=>n<2?(n<1?1:2*x):2*x*h(x,n-1)-2*n*h(x,n-2)
for(x=-9,f*=2*t+1;x<9;x+=.001)
point((R=h(X=x/77,t)/sqrt(f)*exp(-X*X/2)*w)*sin(x)+w,R*cos(x)+w),
stroke(abs(R*x)%255,w,w)
t=++t%20}