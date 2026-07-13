//#つぶやきProcessing #p5js
t=0
draw=_=>{
t++||createCanvas(W=(w=200)*2,W)
colorMode(HSB)
for(T=0;T<TAU;T+=.05)
point(x=(R=w*sin(T*19+t/w))*cos(U=R/71+T+t/w)+w,y=R*sin(U)+w),
stroke(hue(get(x,y))/5^255*sin(U),w,w,U/W/2),
strokeWeight(R/2)
}