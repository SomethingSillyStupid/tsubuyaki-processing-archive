t=0
draw=_=>{
t||createCanvas(W=(w=200)*2,W)+noFill()
background(0,9)
for(R=abs(w*sin(t/w));R>0;R-=1)
stroke(9,S=(44*abs(R*cos(t/w))+199)%255,99,80),
circle(x=R*cos(U=R+S)+w,y=R*sin(U)+w,min(x,y,W-x,W-y))
++t}
