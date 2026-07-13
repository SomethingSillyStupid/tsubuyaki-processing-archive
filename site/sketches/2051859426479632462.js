//WIP #つぶやきProcessing #p5js
t=0,D=255
draw=_=>{
r=random
createCanvas(W=(w=200)*2,W)+colorMode(HSB)
t||(C=D,D=color(r(w),w,w))
fill(t<w?C:D)
rect(t,0,w-t,W)
t=(t+=20)%W
}