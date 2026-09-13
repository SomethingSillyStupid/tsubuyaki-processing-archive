//#つぶやきProcessing #p5js
t=0
draw=_=>{
createCanvas(W=(w=200)*2,W)
colorMode(HSB)
for(R=0;R<w;R+=3)
for(T=0;T<TAU;T+=.1)
strokeWeight(min(20,M=12*cos(T+R+t/44)**(20*sin(t/99)))),
stroke((M*w)%360,w,w),
point(R*cos(T)+w,R*sin(T)+w)
++t}