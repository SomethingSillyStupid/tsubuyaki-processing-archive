//おやすみ #つぶやきProcessing #p5js
t=0
draw=_=>{
createCanvas(W=(w=200)*2,W,WEBGL)
rotateX(t/17)
rotateY(t/9)
V=(u,v)=>vertex((U=1+v/2*cos(u/2))*cos(u)*w,U*sin(u)*w,v/2*sin(u/2)*w)
for(u=0;u<TAU;u+=.1)
beginShape(QUADS),V(u,-1),V(u,1),V(u+.1,1),V(u+.1,-1),endShape()
++t}