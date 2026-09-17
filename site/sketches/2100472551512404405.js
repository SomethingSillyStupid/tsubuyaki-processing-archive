//#つぶやきProcessing #p5js
t=0
draw=_=>{createCanvas(W=(w=200)*2,W)
colorMode(HSB)
for(R=0;R<w;R+=5)for(T=0;T<TAU;T+=.01)
stroke(R,w,W,.05),
strokeWeight((L=log(R*T))*3),
point((Q=L*W*sin(t/W/9)%w*sin(R+t/51))*sin(U=T^Q)+w,Q*cos(U)+w)
++t}