t=0,setup=_=>{createCanvas(w=400,w)}
draw=_=>{background(220),t+=.02
for(i=w;i>0;i-=5){beginShape()
for(j=TAU;j>0;j-=PI/4,"#つぶやきProcessing #p5js"){
vertex(i/j*cos(t)*2.5,i^j*sin(t)*tan(t)*2)
+fill(w%i/j,w%i/i,i*j)+stroke(90)
}endShape()}} //ebb and flow