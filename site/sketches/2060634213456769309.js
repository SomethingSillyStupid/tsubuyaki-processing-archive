//#つぶやきProcessing #p5js
draw=_=>{
p=point
createCanvas(W=(w=200)*2,W)
strokeWeight(30)
L=(a,b,x)=>a*x+b*(1-x)
translate(0,10)
scale(0.9)
for(x=0;x<=1;x+=(abs(x-.5)/3+.09))
p(L(200,341,x),L(0,200,x)),
p(L(59,341,x),L(200,200,x)),
p(L(59,200,x),L(200,0,x))
p(w,120)
p(w,400)}