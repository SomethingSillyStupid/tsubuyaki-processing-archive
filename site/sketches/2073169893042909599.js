//疑似乱数でπ #つぶやきProcessing #p5js
t=0,S=0
draw=_=>{
t||createCanvas(W=(w=200)*2,W)+(X=Y=w)
strokeWeight(3)
T=(t*31+17)%359
X=(X*37+T)%401
Y=(Y*53+T)%401
mag(X-w,Y-w)<w?point(X,Y):S++
fill([0,W,W][t%3])
textSize(30)
t%100?text((4-S/t*4).toFixed(2),20,380):0
++t}