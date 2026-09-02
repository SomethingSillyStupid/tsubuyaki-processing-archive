t=0,setup=_=>{createCanvas(w=400,w,WEBGL)}
draw=_=>{background(220),t+=.01
for(i=0;i<=w;i+=6,"#つぶやきProcessing #p5js"){
for(j=0;j<TAU;j+=.6){translate(a=i*cos(j++*t),b=i*sin(j*t))
circle(0,0,i*j/4),stroke(b,b,a,a)
fill(a*i,j*i,b*i,b*b)}}} //Bubbling