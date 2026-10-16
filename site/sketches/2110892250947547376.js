//ガオー #つぶやきProcessing #p5js
t=0
draw=_=>{
createCanvas(W=(w=200)*2,W)
V=T=>vertex(150*cos(T-D/2)+w,w-90+150*sin(T-D/2))
colorMode(HSB)
beginShape()
D=.3
for(T=D;T<=PI;T+=D)
V(T),
vertex(w*cos(T)+w,w-t+w*sin(T))
V(PI)
fill(360*sin(t/W*D),w,w)
endShape()
++t}