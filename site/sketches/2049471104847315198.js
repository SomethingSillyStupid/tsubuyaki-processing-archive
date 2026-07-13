//#つぶやきProcessing #p5js
t=0
draw=_=>{P=1.6
t||createCanvas(W=(w=200)*2,W)+noFill()+strokeWeight(.1)+background('darkslateblue')
C=(R,T)=>R*cos(T)+w
stroke('aquamarine')
bezier(C(50,t/71),C(50,t/71-P),C(99,t/7),C(99,t/7-P),C(150,t/17),C(150,t/17-P),C(w,t/37),C(w,t/37-P))
++t}