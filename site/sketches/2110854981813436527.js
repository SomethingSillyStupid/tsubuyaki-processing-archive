//Still WIP #つぶやきProcessing #p5js
t=0
draw=_=>{
r=randomGaussian//←
createCanvas(W=(w=200)*2,W)
P=(x,y,n,c,N,Y,d=11)=>n>1&&c<30?(stroke(S=(n+c)*5+t,G=(y/2+abs(x-w)-c),G/c,88),strokeWeight(c/3),point(x,y),P(x,Y=y-r(0,2*d),N=n-1,c+1),P(x+r(0,d),Y,N,c+2)):0
P(w,W,20,0)
++t}