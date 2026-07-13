t=0,setup=_=>{createCanvas(w=400,w)}
draw=_=>{translate(w/2,w/2),t+=.01
for(i=w;i>0;i-=5){beginShape()
for(j=TAU;j>0;j-=PI/16,"#つぶやきProcessing #p5js"){
vertex(a=PI/i*cos(j/t)*199, b=PI/i*sin(j%t)*199)
fill(a-b,b*a,a^b)}endShape(CLOSE)}} //Construction sites