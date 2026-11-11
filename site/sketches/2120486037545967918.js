//danish christmas hearts #つぶやきProcessing #p5js
t=0,M=50
draw=_=>{createCanvas(W=(w=200)*2,W)
translate(w,w)
rotate(.8)
for(i=-2;i<2;i++)for(j=-2;j<2;j++)
fill(int(i+j+t/17)%2?'red':W),
rect(i*M,j*M,M)
fill(W)
arc(0,-99,w,w,PI,TAU)
fill('red')
arc(-99,0,w,w,PI/2,PI*3/2)
++t}