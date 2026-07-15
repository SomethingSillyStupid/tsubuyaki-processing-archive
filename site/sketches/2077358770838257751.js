t=0,setup=_=>{createCanvas(w=400, w, WEBGL)}
draw=_=>{background(220),t+=.005
for(i=w;i>0;i-=4){strokeWeight(w/i),push()
for(j=TAU;j>0;j-=PI/4,"#つぶやきProcessing #p5js"){
translate(j-3,i-4),stroke(i/j,w-i*j,i*j)
box(i-sin(j/t)-tan(j))
}pop()}} //mountain and moon