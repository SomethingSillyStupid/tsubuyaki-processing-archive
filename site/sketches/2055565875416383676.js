//#つぶやきProcessing #p5js
t=0,d=8
draw=_=>{
t++||createCanvas(W=(w=200)*2,W)+colorMode(HSB)
background(0,.1)
strokeWeight(d)
T=t+w*sin(t/91)**2
for(h=t;h<T;h+=d)for(k=t,r=i=0;k<T;k+=d)A=TAU*h*sqrt(k)/T/3,r+=cos(A),i+=sin(A),stroke((A+h)%255,w,w,.8),point(r*30+w,i*30+w)
}