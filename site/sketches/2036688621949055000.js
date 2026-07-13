//#つぶやきProcessing #p5js
t=0
draw=_=>{e=ellipse,c=circle,C=100,D=50,F=300,G=180
createCanvas(W=(w=200)*2,W)
translate(0,W-t%W*2)
quad(D,D+(T=(t%5*2-1)*9),C,80,C,C,D,C)
quad(350,D+T,F,80,F,C,350,C)
e(w,G,F,w)
e(w,w,C,D)
fill(0)
c(G,w,9)
c(220,w,9)
c(150,G,9)
c(250,G,9)
t++}