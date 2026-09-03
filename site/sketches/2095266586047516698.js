//#つぶやきProcessing #p5js
t=0,d=3
draw=_=>{
createCanvas(W=(w=200)*2,W)
colorMode(HSB)
for(y=i=0;y<W;y+=d,i++)
for(x=0;x<W;x++)
S=(i%2?-1:1)*5*d*sin(t/17+x/91+y/7),
stroke(mag(x-w,y-w)%360,S*90,w),
point(x,y+S*sin(T=x/13+y/7))
++t}