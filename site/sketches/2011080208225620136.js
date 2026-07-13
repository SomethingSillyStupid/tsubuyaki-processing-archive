t=0,setup=_=>{createCanvas(w=400,w)}
draw=_=>{t+=.1
for(i=w;i>0;i-=5){translate(w/2,w/2)
beginShape(),n=noise(t/w,t%i)
for(j=TAU;j>0;j-=PI/12*n,"#つぶやきProcessing #p5js")
rotate(t),vertex(i*cos(t*j*n)*9,i*sin(j%i*n)*9),
fill(w-i*t,i*i*t,w*j*t)+noStroke()
}endShape(CLOSE)}