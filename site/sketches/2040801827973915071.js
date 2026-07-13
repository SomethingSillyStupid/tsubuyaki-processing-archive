t=3,setup=_=>{createCanvas(w=400,w)}
draw=_=>{background(220),translate(w/2,w/5)
t<16?t+=.01:t=3 //#つぶやきProcessing #p5js
for(i=w;i>0;i-=w/t){beginShape()
for(j=TAU;j>0;j-=PI/t){
vertex(a=i*cos(j^t), b=i*sin(j%t))
stroke(b*a,b/a,w/b*a)
}endShape(CLOSE)}}