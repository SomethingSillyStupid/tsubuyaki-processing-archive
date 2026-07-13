//#つぶやきProcessing #p5js
t=0
draw=_=>{r=random
t++||createCanvas(W=(w=200)*2,W)+noStroke()
blendMode(r([DIFFERENCE, OVERLAY]))
x=r(W),y=r(W),u=x+r(-w,w),v=y+r(-w,w)
fill(r(x+v),r(y+u),r(u+v))
for(i=0,h=dist(x,y,u,v)/99;i<99;i++)
rect(X=i*h+x,(v-y)/(u-x)*(X-x)+y,r(19))
}