t=0,p=0
draw=_=>{
frameRate(3)
createCanvas(W=(w=200)*2,W)
textSize(20)
text("DON'S SAWTOOTH WAVE",10,30)
D="MTWTFSS".split('')
for(i=0;i<7;i++)
text(D[(i+t)%7],x=i*57,60),
line(x-50,p,x,p=360-(i+t)%7*40)
++t}
