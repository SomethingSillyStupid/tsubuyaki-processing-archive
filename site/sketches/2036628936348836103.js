//桜散る #つぶやきProcessing #p5js
t=0
draw=_=>{r=random
t++||createCanvas(W=(w=200)*2,W)
S=(x,n)=>n<1?0:sin(n*x)/n-S(x,n-1)
fill(W,w,w+r(-30,30))
stroke(99)
beginShape(x=r(W),y=r(W),R=r(30),d=r(7))
for(s=0;s<W*7;s++)vertex((Q=S(s/80,19)*R)*cos(U=s/99+d)+x,Q*sin(U)+y)
endShape()}