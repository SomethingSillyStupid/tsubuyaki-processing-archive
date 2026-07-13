t=0,setup=_=>{createCanvas(w=400,w)}
draw=_=>{background(220),translate(w/2,w/5)
t<5?t+=.01:t=0 //#つぶやきProcessing #p5js
for(i=w;i>0;i-=5){beginShape()
for(j=TAU;j>0;j-=PI/16){//uprise
vertex(a=w/PI%i*cos(j^t)*59, b=PI%i*sin(j%t)*129)
fill(a%b,b^a,w-a%b)}endShape(CLOSE)}}