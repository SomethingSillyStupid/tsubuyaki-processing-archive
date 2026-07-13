//#つぶやきProcessing #p5js
t=0
draw=_=>{r=random
t++||createCanvas(W=(w=200)*2,W)
blendMode(r([DODGE,BURN]))
stroke(r([[w,0,w,99],[w,w,0,99],[0,w,w,99]]))
strokeWeight(37)
line(x=w*cos(t)+w,y=w*sin(t)+w,x+r(-20,20),y+(y>w?-r(y*1.2-w):r(w*1.2-y)))
}