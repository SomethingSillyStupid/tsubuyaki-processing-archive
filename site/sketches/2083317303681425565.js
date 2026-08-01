// #つぶやきProcessing #p5js
t=0,d=4
draw=_=>{
t||createCanvas(W=(w=200)*2,W)+colorMode(HSB)+noStroke()
S=(a,b)=>w*(sin(t/w+x/a)+tan(t/w-y/b))
for(x=0;x<W;x+=d)
for(y=0;y<W;y+=d)
fill(abs(A=S(w,99))%80+w,w,w,.1),
circle(S(A,x),S(y,A/3),d)
++t}