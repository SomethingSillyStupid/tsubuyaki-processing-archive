//A Homage to Piet Mondrian #つぶやきProcessing #p5js
t=0
draw=_=>{
r=random
t||createCanvas(W=(w=200)*2,W)
strokeWeight(6)
x=r(W),y=r(W)
M=mag(x-w,y-w)
M<w?(stroke(r([0,'blue','red','gold'])),line(x,y,x+(D=r(Q=27-M/8)),y),line(X=x+D*r()/2,y-(E=r(Q)),X,y+E)):0
t=++t%W}