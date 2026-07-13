t=0,setup=_=>createCanvas(w=400,w)
draw=_=>{background(220),t<6?t+=.01:t=0,translate(w/2,w/3)
for(i=w;i>0;i-=w/i){beginShape()
for(j=TAU;j>0;j-=PI/j,"#つぶやきProcessing #p5js"){
vertex(w/i*cos(j/t)*6,w/i*sin(j*t)*6)
fill(w*cos(i/j),w*sin(i%j),w*tan(j))+stroke(i*j)
}endShape()}}