//#つぶやきProcessing #p5js
t=0,P=[]
draw=_=>{
createCanvas(W=(w=200)*2,W)
strokeWeight(4)
P.push([U=t/3,U])
P.map(B=>{for(R=0;R<w;R+=2)stroke(R),point(...B.map((x,i)=>R|w*cos((x+R)+i*2*sin(t/w))+w))})
t>w?P.shift():0
++t}