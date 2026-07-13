t=0,setup=_=>{createCanvas(w=400,w)}
draw=_=>{background(120),t+=.01
translate(w/2,w/2)//#つぶやきProcessing #p5js
for(i=w;i>0;i--){beginShape()
for(j=TAU;j>0;j-=PI/24){
vertex(a=w%j/cos(i/t), b=w%j/sin(i%t))
stroke(w/b)}endShape()}}