//WIP再帰関数で円を描く #つぶやきProcessing #p5js
t=0
draw=_=>{
r=random
createCanvas(W=(w=200)*2,W)
strokeWeight(5)
colorMode(HSB);
(F=(R,T)=>R>w?0:(T>TAU?F(R+8,0):(stroke(R,8+r(T*t%250),r(w,W)),point(R*cos(T)+w,R*sin(T)+w),F(R,T+.1))))(0,0)
++t}