//#つぶやきProcessing #p5js
t=0
draw=_=>{r=_=>random([-7,-5,5,7])
t++||createCanvas(W=(w=200)*2,W)
colorMode(HSB)
strokeWeight(3)
f=(x,y,n)=>n<1?0:(stroke(abs(t*d*e-n)%360,w,w,.4),point(x,y),f(x+d,y,n-1),f(x,y+e,n-1))
for(x=0;x<W;x+=29)for(y=0;y<W;y+=29)d=r(),e=r(),f(x,y,10)}