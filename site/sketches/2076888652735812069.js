//Joyeux 14 juillet!#つぶやきProcessing #p5js
t=0
draw=_=>{t||createCanvas(W=(w=200)*2,W)
background(9,13)
strokeWeight(8)
;[R,y]=t<250?[2,W-t]:[t-250,150]
for(T=0;T<TAU;T+=.1)
stroke(["#002395","#ffffff","#ed2939"][int(T*2)%3]),
point(R*cos(T)+w+random(-2,2),R*sin(T)+y)
t=++t%W}