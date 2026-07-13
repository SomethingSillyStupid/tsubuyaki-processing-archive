//#つぶやきProcessing #p5js
t=0
draw=_=>{
t||createCanvas(W=(w=200)*2,W)+(f=1)+colorMode(HSB)
h=(x,n)=>n<2?(n<1?1:2*x):2*x*h(x,n-1)-2*n*h(x,n-2)
for(x=-9,f*=2*t+1;x<9;x+=.001)
point((R=x*30)*sin(T=h(x,t)/sqrt(f)*exp(-x*x/2)*11)+w,R*cos(T)+w),
stroke(abs(R*T+x)%255,w,w)
t=++t%20}