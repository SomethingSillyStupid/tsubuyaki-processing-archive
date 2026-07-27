//#つぶやきProcessing #p5js
t=0
draw=_=>{
t||createCanvas(W=(w=200)*2,W)+(F=random(9))
P=(x,n)=>(x<0?-1:1)*abs(x)**n
colorMode(HSB)
strokeWeight(8)
for(T=0;T<TAU;T+=9/F)
point(w*((E=t/w)*P(C=cos(U=T+t/F),F)+(D=1-E)*C)+w,w*(E*P(S=sin(U),F)+D*S)+w),
stroke((E*F*W)%360,w,w)
t=++t%W}