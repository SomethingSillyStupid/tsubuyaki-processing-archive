t=1,setup=_=>{createCanvas(w=400,w)}
draw=_=>{background(220),t+=.001,translate(w/2,w/3)
for(i=w;i>0;i-=6){beginShape()
for(j=TAU;j>0;j-=PI/16,"#つぶやきProcessing #p5js"){
vertex(a=i*j/cos(j*t), b=i*j/sin(j%t))
fill(w/a,w%b,a*b*b)}endShape()}} //Abyssal