//#つぶやきProcessing #p5js
t=0,d=4
draw=_=>{
createCanvas(W=(w=200)*2,W)
stroke('darkorchid')
for(x=0;x<W;x+=d)for(y=0,p=x,q=0;y<W;y+=d)line(p,q,p=x+(e=(D=mag(x-w,y-w)**2/W*abs(U=cos(t/w)))%37<19?D/7*sin(U+x+y):0),q=y-e)
t++}