//#つぶやきProcessing #p5js
t=0,d=5
draw=_=>{
createCanvas(W=(w=200)*2,W)
colorMode(HSB)
S=(h,f)=>(stroke(255*h(t/w),w,w,79),strokeWeight(abs(A*f(A*A-sin(TAU*t/w)))),point(x,y))
for(x=0;x<W;x+=d)
for(y=0;y<W;y+=d)
A=(w-(P=mag(x-w,y-w)))/w*17,
S(cos,x=>asin(x%3)),
S(sin,cos)
++t}