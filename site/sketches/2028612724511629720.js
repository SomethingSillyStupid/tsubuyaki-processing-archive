//#つぶやきProcessing #p5js
t=0,d=100
draw=_=>{r=random
t++||createCanvas(W=(w=200)*2,W)+(x=y=w)
d=w-mag(x-w,y-w)**2/w+10
X=x+r(-d,d),Y=y+r(-d,d)
mag(X-w,Y-w)<w?line(x,y,x=X,y=Y):0}