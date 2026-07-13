t=0,setup=_=>{createCanvas(w=400,w)}
draw=_=>{background(220),t+=.01,translate(w/2,w/2)
for(i=w;i>0;i-=3){beginShape()
for(j=TAU;j>0;j-=PI/24,"#つぶやきProcessing #p5js"){
vertex(a=i*j/cos(j*t),b=i*j/sin(j*t))
fill(b*b,w/a^b,a*a)}endShape()}}//Four-sided