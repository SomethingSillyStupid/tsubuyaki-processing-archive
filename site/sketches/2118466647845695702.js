//#つぶやきProcessing #p5js
t=0,P=[]
draw=_=>{
createCanvas(W=(w=200)*2,W)+colorMode(HSB)
strokeWeight(4)
P.push([U=t/61,U])
P.map(B=>{for(R=0;R<w;R+=3)stroke(R,...B.map(x=>(x*w)%W)),point(...B.map((x,i)=>R*sin((R-x)+i*1.6)+w))})
t>140?P.shift():0
++t}