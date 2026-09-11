//TOKYO TODAY #つぶやきProcessing #p5js
t=0
draw=_=>{
r=random
t++||createCanvas(W=(w=200)*2,W)
background(W,1)
D=(x,y,r)=>{for(T=0,beginShape();T<TAU;T+=.1)
vertex(r*sin(T)*sin(T/2)**1.4+x,y-r*cos(T))
endShape()}
noStroke()
fill(r(9),r(99,w),r(w,W),88)
D(r(W),r(W),r(50))}