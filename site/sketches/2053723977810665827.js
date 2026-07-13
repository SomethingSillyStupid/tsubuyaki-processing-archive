//#つぶやきProcessing #p5js
t=0
draw=_=>{r=random
t++||createCanvas(W=(w=200)*2,W)
background(W,1)
F=(r,x,y,n=50)=>n<1?0:(vertex((R=r+r/5*sin((T=n*.13)*5))*cos(T+r)+x,R*sin(T+r)+y),F(r,x,y,n-1))
beginShape()
x=r(W),y=r(W)
mag(x-w,y-w)<150?F(r(30),x,y):0
fill(r(W),9,w)
endShape()}