//疑似乱数の実験2 #つぶやきProcessing #p5js
t=0
draw=_=>{
t||createCanvas(W=(w=200)*2,W)+(X=Y=w)
background(w,W,w,.1)
colorMode(HSB)
blendMode([OVERLAY,DIFFERENCE][t%2])
noStroke()
fill((t*31+17)%360,W,W)
circle(X=(X*41+23)%W,Y=(Y*37+19)%W,(t*17+7)%191)
++t}