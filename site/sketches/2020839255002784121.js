t=2,setup=_=>{createCanvas(w=400,w)}
draw=_=>{background(220),t+=5e-4
for(i=w;i>0;i-=3){beginShape(),rotate(t*.3)
for(j=TAU;j>0;j-=PI/8/t,"#つぶやきProcessing #p5js"){
vertex(a=i*j*atan(i,j),b=w/i*j*sin(i/j))+fill(w/a,w/b,w/a*b)
}endShape(CLOSE)}}