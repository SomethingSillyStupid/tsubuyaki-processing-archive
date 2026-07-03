t=0
draw=_=>{
t||createCanvas(W=(w=200)*2,W)+(X=Y=w)
strokeWeight(3)
colorMode(HSB)
stroke(T=(t*31+17)%359,W,W)
point(X=(X*37+T)%401,Y=(Y*53+T)%401)
++t}
