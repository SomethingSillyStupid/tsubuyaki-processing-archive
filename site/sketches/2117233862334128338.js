//#つぶやきProcessing #p5js
t=0,d=4
draw=_=>{
createCanvas(W=(w=200)*2,W)
stroke('blue')
for(x=0;x<W;x+=d)for(y=0,p=x,q=0;y<W;y+=d)line(p,q,p=x+(e=(D=mag(x-w,y-w)/3)%15<13*abs(U=sin(t/91+atan2(Y=y-w,X=x-w)/19))?D/9*sin(U*(X^Y)/29):0),q=y-e)
t++}