//#つぶやきProcessing #p5js
t=0
draw=_=>{
t||createCanvas(W=(w=200)*2,W)
;(T=t++%W)||(F=random(9))
P=(x,y,z)=>(stroke(abs(x),abs(y),abs(z),30),strokeWeight(30),point(x*sin(t/w+z)+w,y*cos(t/w+z)+w))
P(T,C=T*cos(U=T/W*F),W-T)
P(W-T,S=T*sin(U),T)
P(C,T,S)
P(C,W-T,T)
}