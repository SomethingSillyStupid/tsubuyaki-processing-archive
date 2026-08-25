//#つぶやきProcessing #p5js
t=0
draw=_=>{
createCanvas(W=(w=200)*2,W)
C=(H,T)=>(stroke(H,w,w),circle(R*cos(T)+w,R*sin(T)+w,R*sin(d)))
colorMode(HSB)
blendMode(EXCLUSION)
noFill(d=TAU/12)
strokeWeight(12)
R=150
for(T=0;T<TAU;T+=d)
C(H=T/TAU*360,T),
C(360-H,T+d/2+t/w)
t++}