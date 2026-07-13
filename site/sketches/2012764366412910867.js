//#genuary #つぶやきProcessing #p5js
t=0
draw=_=>{
t||createCanvas(W=(w=200)*2,W)+(x=y=w)
strokeWeight(4)
P=random(-4,4)
stroke(w*cos(y),w*sin(x),w*sin(t))
X=x,Y=y
t%2?(x+=t*P,x=(x<0?-x:x>W?(W*2-x):x)):(y+=t*P,y=(y<0?-y:y>W?(W*2-y):y))
line(X,Y,x,y)
t=++t%w}