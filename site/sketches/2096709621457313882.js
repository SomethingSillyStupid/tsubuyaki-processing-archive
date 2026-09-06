//#つぶやきProcessing #p5js
t=0
draw=_=>{
r=random
t||createCanvas(W=(w=200)*2,W)
t++%9||noStroke(x=r(W),y=r(W),d=e=200,s=1)
colorMode(HSB)
blendMode(DIFFERENCE)
R=_=>r()>.5?-1:1
fill((x+y+d+e)%360,w,w)
rect(x+=R()*s*d,y+=R()*s*e,d/=2,e/=2)
}