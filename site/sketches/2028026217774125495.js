//#つぶやきProcessing #p5js
t=0
draw=_=>{
createCanvas(W=(w=200)*2,W,WEBGL)
t||(g=createGraphics(W,W),g.colorMode(HSB).noStroke(L=random(4)))
for(x=0;x<TAU;x+=1/W)
g.fill((X=x*W/TAU)-(Y=w*sin(X*L)),w,w),
g.rect(X,Y+w,5)
rotateX(t/91)
texture(g)
noStroke()
sphere(w)
t=++t%w}