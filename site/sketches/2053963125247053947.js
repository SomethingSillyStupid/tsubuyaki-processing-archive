//#つぶやきProcessing #p5js
t=0
draw=_=>{
t||createCanvas(W=(w=200)*2,W)
t++%600||(N=random(255))
colorMode(HSB)
strokeWeight(3)
translate(w,w)
rotate(t/N*2)
for(T=0;T<TAU;T+=.01)
point(X=((R=w+t%w)&(t%W*cos(U=T+N)))-W,Y=(R&(t%W*sin(U)))-W),
stroke(abs(X/Y*N)%255,w,w,.1)
}