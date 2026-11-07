//#つぶやきProcessing #p5js
t=0,P=[]
draw=_=>{
createCanvas(W=(w=200)*2,W)
strokeWeight(4)
P.push([U=t/5,U])
P.map(B=>{for(R=0;R<W;R+=3)stroke(W,R,9),point(...B.map((x,i)=>R%W*cos((x+R)+i*2+sin(t/w))+w))})
t>w?P.shift():0
++t}