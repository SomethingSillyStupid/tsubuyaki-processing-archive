//#つぶやきProcessing #p5js
t=0,d=3
draw=_=>{
createCanvas(W=(w=200)*2,W)
colorMode(HSB)
strokeWeight(d)
for(x=-w;x<w;x+=d)for(y=-w;y<w;y+=d)
stroke(abs(M=mag(x,y)*sin((x*y/71+t)/13))%360,w,w),
M<W*sin(t/29)?point(x+w,y+w):0
++t}