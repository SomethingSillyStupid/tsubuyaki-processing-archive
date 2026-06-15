t=0
draw=_=>{
createCanvas(W=(w=200)*2,W)+colorMode(HSB)+noStroke()
for(R=abs(w*sin(t/w));R>0;R-=.01)
fill(S=abs(R+t)%255,w,w,.2),
circle(x=R*cos(U=R+S)+w,y=R*sin(U)+w,min(x,y,W-x,W-y)/31)
++t}
