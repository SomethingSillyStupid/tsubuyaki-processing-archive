//#つぶやきProcessing #p5js
t=0,x=y=200
draw=_=>{
r=random
t||createCanvas(W=(w=200)*2,W)
colorMode(HSB)
noFill()
S=(x,y,u,v)=>bezier(x,y,(X=x+u)/3,(Y=y+v)/3+i*20,X*2/3,Y*2/3+i*20,u,v)
stroke(r(360),w,w)
U=r(W),V=r(W)
for(i=-9;i<9;i++)
S(x,y,U,V)
x=U,y=V
if(++t>19)noLoop()}