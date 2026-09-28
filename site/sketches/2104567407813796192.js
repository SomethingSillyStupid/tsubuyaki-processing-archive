t=0,setup=_=>{createCanvas(w=400, w)}
draw=_=>{translate(w/2,w/4),t+=.0001
for(i=0;i++<w/4;){beginShape()
for(j=0;j<w/6;j+=3,"#つぶやきProcessing #p5js"){
rotate(t),vertex(i*4*cos(1+j%t),i*2*sin(1-j/t))
}endShape()}} //Whirlwind