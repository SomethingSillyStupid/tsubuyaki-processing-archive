//WIP再帰関数で円を描く #つぶやきProcessing #p5js
t=0
draw=_=>{
r=random
createCanvas(W=(w=200)*2,W)
strokeWeight(9)
colorMode(HSB);
(F=(R,T)=>R>w?0:(T>TAU?F(R+8,0):(stroke(R,W,W),point(R*cos(U=T+t/w*.15*sin(R/20+T*3))+w,R*sin(U)+w),F(R,T+.3))))(0,0)
++t}