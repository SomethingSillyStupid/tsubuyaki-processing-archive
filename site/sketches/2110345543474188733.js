//Still WIP #つぶやきProcessing #p5js
t=0
draw=_=>{
r=random
t++||createCanvas(W=(w=200)*2,W)+colorMode(RGB)+strokeWeight(8)
P=(x,y,n,N,Y,d=22)=>n>1?(stroke(S=n*59+t,(y+abs(x-w)+t/w),S/9),point(x,y),P(x,Y=y-r(d*2),N=n-1),P(x+r(d),Y,N),P(x-r(d),Y,N)):0
P(w,W,13)
}