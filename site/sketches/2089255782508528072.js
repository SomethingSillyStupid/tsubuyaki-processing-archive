//#つぶやきProcessing #p5js
t=0
draw=_=>{createCanvas(W=(w=200)*2,W,WEBGL)
colorMode(HSB)
rotateX(t++/19)
V=(u,v)=>vertex((U=1+v/2*cos(u))*cos(u+v)*w,U*sin(u+v)*w,v/2*sin(u/2)*w)
for(u=0;u<TAU;u+=.1)
fill(u*60,w,w),beginShape(QUADS),V(u,-1),V(u,1),V(u+.1,1),V(u+.1,-1),endShape()}