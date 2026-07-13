//#つぶやきProcessing #p5js
t=0
draw=_=>{
r=random
createCanvas(W=(w=200)*2,W)
colorMode(HSB)
strokeWeight(9)
;(F=(R,T)=>R>w?0:(T>TAU?F(R+T/6,0):(stroke(w*sin(T*55+R/55),w,w),point(R*cos(U=R/w+T+t/71*.15/sin(R/10))+w,R*sin(U)+w),F(R,T+.3))))(1+abs(w*cos(t/71)),6*sin(t/17))
++t}