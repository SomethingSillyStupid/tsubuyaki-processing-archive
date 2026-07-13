t=0,setup=_=>{createCanvas(w=400,w)}
draw=_=>{t+=.005 //#つぶやきProcessing #p5js
for(i=w;i>0;i-=5){n=noise(w*tan(i/t),
w*atan(i,t)),beginShape()
for(j=TAU;j>0;j-=PI/8){strokeWeight(4^n)
vertex(i+i/cos(w*j)*t*n,i+i^sin(i)*t*n)
+stroke(w/i/j,w*i/j,w*i*j)}endShape()}}