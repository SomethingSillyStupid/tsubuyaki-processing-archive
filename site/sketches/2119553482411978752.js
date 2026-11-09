//#つぶやきProcessing #p5js
t=0,P=[]
draw=_=>{
createCanvas(W=(w=200)*2,W)
strokeWeight(4)
P.push([U=t/4,U])
P.map(B=>{for(R=0;R<W;R+=3)point(...B.map((x,i)=>(stroke((U*22)%w,x%w,R),R&(t*sin(t/w))*cos((x-R)+i*1.6+sin(t/w)))))})
t>w?P.shift():0
++t}