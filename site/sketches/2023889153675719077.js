//#つぶやきProcessing #p5js
t=0,P=[]
draw=_=>{r=random
t||createCanvas(W=(w=200)*2,W)+colorMode(HSB)
P.push([r(W),0])
a=0;for(F of P)a+=F[1]/P.length,stroke(a%W,a,w),point(F[0]+=5*r(-(T=W-t)/a,T/a),F[1]+=r(-1,3))
t++}