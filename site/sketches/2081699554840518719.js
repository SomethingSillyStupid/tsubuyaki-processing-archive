//#つぶやきProcessing #p5js
t=0
draw=_=>{
t++%400||createCanvas(W=(w=200)*2,W)+(F=random(w))
colorMode(HSB)
strokeWeight(4)
for(T=0;T<TAU;T+=2/F)
stroke(abs(E=1.2*sin(t/F+T))*360,w,w),
point(w*(E*cos(T)+(1-E)*cos(T)**9)+w,w*(E*sin(T)+(1-E)*sin(T)**9)+w)
}