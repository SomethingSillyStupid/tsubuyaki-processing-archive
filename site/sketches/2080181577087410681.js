//#つぶやきProcessing #p5js
t=0
draw=_=>{
r=random
t||createCanvas(W=(w=200)*2,W)
F=(x,y,n)=>n<1?(fill('yellow'),circle(x,y,D=r(9,23)),fill(0),circle(x,y,D/4)):(stroke('green'),line(x,y,X=x+40*cos(T=r(PI)),Y=y+40*sin(-T)),F(X,Y,n-1))
F(w,W,r(10))
++t}