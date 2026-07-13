//WIP再帰関数で円を描く #つぶやきProcessing #p5js
t=0
draw=_=>{
r=random
createCanvas(W=(w=200)*2,W)
strokeWeight(9)
colorMode(HSB);
(F=(R,T)=>R>w?0:(T>TAU?F(R+2,0):(stroke(T*50,W,W),point(R*cos(U=R/w+T+t/71*.15*[sin,cos][int(T/.3)%2](R/20))+w,R*sin(U)+w),F(R,T+12/R))))(1,0)
++t}