//#つぶやきProcessing #p5js
t=0,d=40
draw=_=>{
createCanvas(W=(w=200)*2,W)
background('slateblue')
strokeWeight(d/2)
for(x=i=0;x<W;x++,i++)
for(y=j=0;y<=W;y+=d,j++)
stroke(C=(i/3+j*2+t/9)%255,abs(255*cos(C/31)),9),
point(x,y+d-d*abs(sin((i+j)/91+((i+j)%2?1.6:sin(t/w)))))
++t}