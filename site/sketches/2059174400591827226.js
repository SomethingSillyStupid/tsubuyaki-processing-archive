//#つぶやきProcessing #p5js
t=0,W=400
draw=_=>{
r=random
t++%(W*2)||createCanvas(W,W)+colorMode(HSB)
blendMode(r([EXCLUSION,ADD]))
translate(x=r(W),y=r(W))
rotate(int(r(8))*.8)
fill(r(255),w=W/2,w)
rect(x,y,r(w),r(w))
}