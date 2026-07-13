t=3,setup=_=>{createCanvas(w=400,w)}
draw=_=>{background(220),t>6?t=3:t+=.01
for(i=w;i>0;i-=5){beginShape()
for(j=TAU;j>0;j-=PI/24,"#つぶやきProcessing #p5js"){
vertex(i^j*cos(w+j%t)*19,i%j*sin(w+j*t)*39)
fill(w/cos(i), w/sin(i),w/tan(j))+stroke(i*j)
}endShape()}}