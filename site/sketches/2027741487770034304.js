t=2,setup=_=>{createCanvas(w=400,w)}
draw=_=>{background(220),t+=.01,translate(w/2,w/4)
for(i=w;i>0;i-=w/i){beginShape()
for(j=TAU;j>0;j-=PI/j,"#つぶやきProcessing #p5js"){
vertex(w/i*cos(j*t)*9,w/i*sin(j%t)*9)
fill(w/cos(i), w/sin(i),w/atan(i))+stroke(w/i*j)
}endShape()}}