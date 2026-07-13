t=1,setup=_=>{createCanvas(w=400, w)}
draw=_=>{background(220),t<2?t+=.002:t=1,translate(w/2,w/2)
for(i=0;i<w;i+=5,"#つぶやきProcessing #p5js"){beginShape()
for(j=0;j<TAU;j+=PI/4){rotate(t*.1)
vertex(a=w/i*tan(j/t), b=-w/i*cos(j/t))
fill(w-a*b,a-b,b-a)}endShape()}}