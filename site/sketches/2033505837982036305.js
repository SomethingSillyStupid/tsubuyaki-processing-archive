t=0,setup=_=>{createCanvas(w=400,w)}
draw=_=>{background(220),translate(w/2,w/3)
t+=.01,rotate(7.85)
for(i=w;i>0;i-=5){beginShape()
for(j=TAU;j>0;j-=PI/16,"#つぶやきProcessing"){
vertex(a=PI/i*cos(j/t)*199, b=PI/i*sin(j*t)*199)
fill(b%a,a^b,b%a)}endShape(CLOSE)}}