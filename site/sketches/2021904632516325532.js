//#つぶやきProcessing #p5js
t=0,P=[]
draw=_=>{createCanvas(W=(w=200)*2,W)
blendMode(DODGE)
translate(w,w)
strokeWeight(29)
for(T=0;T<TAU;T+=TAU/7)
for(i=1,rotate(T+t/W);i<P.length;i++)
stroke(...P[i],t%W),
line(...P[i-1],...P[i])
++t}
mousePressed=_=>{P.push([mouseX-w,mouseY-w])}