//#つぶやきProcessing #p5js
t=0
draw=_=>{r=random
t||createCanvas(W=(w=200)*2,W)
colorMode(HSB)
noStroke()
L=(x,y,s,T=0,u=r(w))=>T>TAU?0:(vertex((R=s+s/5*sin(T/u))*cos(U=T+u)+x,y-R*sin(U)),L(x,y,s,T+.01))
beginShape()
L(r(W),r(W),r(44))
fill(abs(360*cos(t)),w,w)
endShape()
++t}