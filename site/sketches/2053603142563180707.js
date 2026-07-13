//#つぶやきProcessing #p5js
t=0
draw=_=>{
t%1400||createCanvas(W=(w=200)*2,W)+(D=random(255))
colorMode(HSB)
B=(a,b,c,X)=>a*(X=1-x)*X+x*(b*2*X+c*x)
for(x=0;x<1;x+=.001)
F=B(w,V=W*cos((t+x*w)/177)+w,w),
stroke((F/V+D)%255,w,w),
point(F*sin(U=x*TAU)+w,F*cos(U)+w)
t+=7}