t=1.7,setup=_=>{createCanvas(w=400,w,WEBGL)}
draw=_=>{background(220),t<4.7?t+=.01:t=1.7,rotateX(t)
for(i=w;i>0;i-=5){beginShape()//#つぶやきProcessing #p5js
for(j=TAU;j>0;j-=PI/12){
vertex(a=w/i*cos(i*j/t)*2, b=w/i*sin(i*j%t)*2)
fill(b-a*2,b,a)}endShape(CLOSE)}} //camp fire