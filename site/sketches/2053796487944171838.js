//#つぶやきProcessing #p5js
t=0
draw=_=>{
t++%600||createCanvas(W=(w=200)*2,W)+(N=random(255))
colorMode(HSB)
strokeWeight(3)
translate(w,w)
rotate(t/41)
for(T=0;T<TAU;T+=.01)
point(X=(W^(t%W*cos(U=T*N)))-W,Y=(W^(t%W*sin(U)))-W),
stroke(abs(X+Y+N)%255,w,w)
}