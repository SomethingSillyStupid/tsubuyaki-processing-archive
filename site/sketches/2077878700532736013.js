//#つぶやきProcessing #p5js
t=0
draw=_=>{
createCanvas(W=(w=300)*2,W)+stroke(0,W,w,99)
background(9,9,99)
F=(x,y,d,n)=>(random()<.1||n<1)?(fill(W,W,n*7),circle(x,y,8)):(line(x,y,x+=(N=n%2)*d*2,y-=d),F(x,y,d*=.8,n-1),line(x,y,x-=d*3,y-=(N+.1)*d),F(x,y,d*=.9,n-1))
F(w,W,66,18)
++t}