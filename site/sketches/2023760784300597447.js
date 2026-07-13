t=12,setup=_=>{createCanvas(w=400,w)}
draw=_=>{background(220),t+=.005
for(i=w;i>0;i-=8){beginShape()
for(j=TAU;j>0;j-=PI/4,"#つぶやきProcessing #p5js"){
vertex(a=i*i-cos(w/t/j)*79,b=i*i+sin(w/t*j)*79)
fill(a/i,a*j,w-i)+stroke(i*j)
}endShape(CLOSE)}}