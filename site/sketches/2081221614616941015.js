t=0,setup=_=>{createCanvas(w=400, w, WEBGL)}
draw=_=>{background(220),t+=.01
for(i=w;i>0;i-=4){push(),strokeWeight(w/i)
for(j=TAU;j>0;j-=PI/4,"#つぶやきProcessing #p5js"){
stroke(w/i/j),point(0,i/cos(t/j)*sin(j),0)}pop()
}} // Ups and Downs