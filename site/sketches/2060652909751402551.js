t=.5,setup=_=>{createCanvas(w=400,w)}
draw=_=>{background(220),t<3.6?t+=.01:t=.5
translate(w/2,w/2)
for(i=w;i>0;i-=3){beginShape()
for(j=TAU;j>0;j-=PI/8,"#つぶやきProcessing #p5js"){
vertex(a=w/i/cos(j/t), b=w/i/sin(j%t))
fill(a*i*j,b*j,a*j)}endShape()}} //stabilizer