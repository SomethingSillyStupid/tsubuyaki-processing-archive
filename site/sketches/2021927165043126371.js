t=4,setup=_=>{createCanvas(w=400,w)}
draw=_=>{background(99),t+=9e-4
for(i=w;i>0;i-=3){translate(w-i,w-i),
beginShape(),rotate(t*.3)
for(j=TAU;j>0;j-=PI/24,"#つぶやきProcessing #p5js"){
vertex(a=i*j*atan(i,j),b=w/i*j*sin(i/j))
+fill(w/a,b,w/b/a)+stroke(a/b)
}endShape()}}