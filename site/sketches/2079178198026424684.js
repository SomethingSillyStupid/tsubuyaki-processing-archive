t=0,setup=_=>{createCanvas(w=400,400,WEBGL)}
draw=_=>{t<=6?t+=.01:t=0,translate(w/2,w/2),rotate(t)
for(i=0;i<w;i+=4,"#つぶやきProcessing #p5js"){
for(j=0;j<TAU;j+=PI/5){fill(i,i*j,i*j*4)
circle(i^cos(j/t)*12, i*sin(j*t)*12,t*j)}
}} //night vision