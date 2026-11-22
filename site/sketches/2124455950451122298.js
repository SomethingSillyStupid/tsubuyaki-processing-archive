//#つぶやきProcessing #p5js
R=t=0
draw=_=>{
r=random
R||createCanvas(W=(w=200)*2,W)+colorMode(HSB)+(D=1,i=9,B=r(360))
strokeWeight(50-i/9)
point(R*cos(T=D*t/i*TAU)+w,R*sin(T)+w)
stroke(abs(B+R+T*20+i)%360,w,w,.3)
t=t%i?t:(R+=20,i+=20,0)
D=r()<.1?-D:D
R=R>w?0:R
++t
}