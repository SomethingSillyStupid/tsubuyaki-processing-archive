//#つぶやきProcessing #p5js
t=y=v=0,x=.2,u=.4,h=.01
draw=_=>{t++||createCanvas(W=(w=200)*2,W)+noStroke()
F=(x,y)=>[x+=(y+(S=sin(t)/W))*h,y-=(x+S)*h]
P=(c,x,y)=>(fill(c),circle(x*w+w,y*w+w,28))
blendMode(ADD)
;[x,y]=F(x-u/w,y-v/w);[u,v]=F(u+x/w,v-y/W)
P('blue',x,y)
P('red',u,v)}