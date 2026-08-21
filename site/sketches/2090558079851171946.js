//#つぶやきProcessing #p5js
t=0
draw=_=>{t++||createCanvas(W=(w=200)*2,W)
colorMode(HSB)
strokeWeight(3)
f=(x,y,n)=>n<1?0:(stroke(abs(x*d+y*n*(t%9))%360,w,w,.4),point(x,y),f(x+d*sin(t/n),y,n-1),f(x,y+d*cos(t/n),n-1))
for(x=0;x<W;x+=29)for(y=0;y<W;y+=29)d=random([-7,7]),f(x,y,10)}