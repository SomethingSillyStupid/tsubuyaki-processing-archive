t=1,setup=_=>{createCanvas(w=400, w)}
draw=_=>{background(220),t+=2e-5,translate(w/2,w/2)
for(i=0;i<w;i+=3){beginShape()
for(j=0;j<TAU;j+=PI/12,"
vertex(i/j*cos(w/t), i*j/sin(w/t))}endShape()}} // Bellows
