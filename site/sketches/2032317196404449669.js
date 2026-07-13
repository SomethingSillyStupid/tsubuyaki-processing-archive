//大阪の管 #つぶやきProcessing #p5js
t=0
draw=_=>{
createCanvas(W=(w=200)*2,W)
L=w*sin(t/w)**2
fill('cyan')
rect(0,w,W,w)
fill(2*cos(t/w)*sin(t/w)>0?'lightblue':W)
rect(150,w,100,L)
noFill()
rect(150,L,100,w)
++t}