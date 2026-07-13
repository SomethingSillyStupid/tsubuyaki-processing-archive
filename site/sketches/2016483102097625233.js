t=3,setup=_=>{createCanvas(w=400,w)}
draw=_=>{background(220),t+=.001
for(i=w;i>0;i-=5){beginShape()
for(j=TAU;j>0;j-=PI/12,"#つぶやきProcessing #p5js"){
vertex(i/j*cos(t/j/i),i*sin(t/j%w))
fill(w%i*j,w%i+j,w/i*j)+stroke(190)
}endShape(CLOSE)}} //Trench