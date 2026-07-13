//#つぶやきProcessing #p5js
t=0,R=0
draw=_=>{r=random
t++||createCanvas(W=(w=200)*2,W)+colorMode(HSB)
R||(P=[],p=0,d=99,R=1,c=r(255))
fill(r(255),w,w,.3)
P.push(R*cos(p+=r(-1,1))+w,R*sin(p)+w)
P.length>7?(quad(...P),P.shift(),P.shift()):0
--d<0?(R=(R+=r(20,40))>w?0:R,d=99):0
}