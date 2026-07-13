t=2,setup=_=>{createCanvas(w=400,w)}
draw=_=>{background(220),t<12?t+=.01:t=2,translate(w/2,w/2)
for(i=w;i>0;i-=3){beginShape()
for(j=TAU;j>0;j-=PI/24,"#つぶやきProcessing #p5js"){
vertex(w*j*cos(i%t)/2, w/j*sin(i%t)/.8)}endShape()
}} //page flipping