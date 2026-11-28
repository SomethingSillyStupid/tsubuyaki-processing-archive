//#つぶやきProcessing #p5js
t=0,d=20
draw=_=>{
createCanvas(W=(w=200)*2,W)
background('slateblue')
strokeWeight(d/2)
colorMode(HSB)
for(x=i=0;x<W;x+=d,i++)
for(y=j=0;y<W;y++,j++)
stroke(['green','orange'][int(i*j)%2]),
point(x+d*abs(sin((i+j)/31+1.6*(x%71<t%97?-3:2))),y)
++t}