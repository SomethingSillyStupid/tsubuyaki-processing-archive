f=0
draw=_=>{f++||createCanvas(W=600,W)
colorMode(HSB),B=blendMode,B(BLEND),background(0),B(ADD)
for(i=W*5;i--;)
t=f%120,r=(noise(1,i/3,f/W)-.1)*log(t/3+1)*90,fill((noise(f/120|0,7)*W*W+i/40)%360,80,90-t),rect(300+r*sin(i),200+r*cos(i)+(t/6)**2,4)}