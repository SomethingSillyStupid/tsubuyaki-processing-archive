//drawの自己書き換え #つぶやきProcessing #p5js
t=0
draw=_=>{r=random
t++||createCanvas(W=(w=200)*2,W)
colorMode(HSB)
strokeWeight(4)
R=w
stroke(r(360),w,w)
for(T=0;T<TAU;T+=.01)
point(R*cos(T)+w,R*sin(T)+w)
draw=eval(draw.toString().replace(/R=(\w+)/,"R="+int(r(w))))
}