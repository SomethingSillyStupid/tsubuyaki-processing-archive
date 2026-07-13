t=3,setup=_=>{createCanvas(w=400,w)}
draw=_=>{background(220),t+=.01
for(i=w;i>0;i-=5){n=noise(t/w,t%i),beginShape()
for(j=TAU;j>0;j-=PI/12*n,"#つぶやきProcessing #p5js"){
vertex(w/2+i*j*cos(t*j*n)*9,w/4+j/sin(j%i*n)*9)
fill(w%i/j,w%i/j,w/i/j,i/j)+stroke(i*j/n)
}}endShape(CLOSE)}