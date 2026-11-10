//Ely Cathedral #つぶやきProcessing #p5js
t=0
draw=_=>{
createCanvas(W=(w=200)*2,W)
U=TAU/16
C=(R,T)=>R*cos(T+t/w)+w
V=(R,T)=>vertex(C(R,T),C(R,T-1.6))
for(R=0;R<w;R+=40,endShape())
for(i=0,beginShape();i<16;i+=2)
V(w,T=i*U),V(R,T+=U),V(w,T+=U),fill(R,330-R*1.5,0,90)
++t}