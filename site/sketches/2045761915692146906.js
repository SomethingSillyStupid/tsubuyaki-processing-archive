//あえてB/Wにする WIP再帰関数で円を描く #つぶやきProcessing #p5js
t=0
draw=_=>{
r=random
createCanvas(W=(w=200)*2,W)
strokeWeight(9)
;(F=(R,T)=>R>w?0:(T>TAU?F(R+2,0):(stroke(T*20),point(R*cos(U=R/w+T+t/71*.15*sin(R/20))+w,R*sin(U)+w),F(R,T+.3/R*50))))(1,0)
++t}