//#つぶやきProcessing #p5js
t=0,x=y=s=200,d=e=19
draw=_=>{r=random
createCanvas(W=(w=200)*2,W)+colorMode(HSB)
fill(s,w,w)
circle(x,y,50)
x+=r(d),y+=r(e)
d=x>W||x<0?(s=r(255),-d):d
e=y>W||y<0?(s+=r(w),-e):e
++t}