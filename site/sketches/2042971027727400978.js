t=2,setup=_=>{createCanvas(w=400,w)}
draw=_=>{background(220),t+=.0001,translate(w/2,w/2)
for(i=w;i>0;i-=5){beginShape()
for(j=TAU;j>0;j-=PI/12,"#つぶやきProcessing #p5js"){
vertex(a=i*cos(i/j/t), b=i*sin(i*j%t))
fill(w/b+a,a,a*b)
}endShape(CLOSE)}}