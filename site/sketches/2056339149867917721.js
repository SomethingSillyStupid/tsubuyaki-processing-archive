t=0,setup=_=>{createCanvas(w=400,w)}
draw=_=>{background(220),t+=.01,translate(w/2,w/2)
for(i=w;i>0;i-=3){beginShape()
for(j=TAU;j>0;j-=PI/32,"#つぶやきProcessing #p5js"){
vertex(w/j*cos(w/i^t), w/j*sin(w/i/t))
}endShape()}} //collapsing line effects