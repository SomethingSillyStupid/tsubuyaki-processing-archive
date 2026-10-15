//Still WIP #つぶやきProcessing #p5js
t=0
draw=_=>{
r=random
t++||createCanvas(W=(w=200)*2,W)+colorMode(RGB)+strokeWeight(8)
P=(x,y,n,c,N,Y,d=22)=>n>1?(stroke(S=n*59+t,(y/2+abs(x-w)+t/c),c),point(x,y),P(x,Y=y-r(d*2),N=n-1,W),P(x+r(d),Y,N,9),P(x-r(d),Y,N,9)):0
P(w,W,13,w)
}