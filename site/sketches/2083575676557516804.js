f=0
draw=_=>{f++||createCanvas(W=600,W)
background(0)
noStroke()
for(n=W*4;n--;circle(W/2+a*sin(c=PI/6*n)+b*sin(d=PI/7*(n/6|0)),180+a*cos(c)+b*cos(d)+t,n/W+1))t=(n/90+f)%120,a=log(t/9+1)*60,b=log(max(t/6-9,1))*30,fill(W-t*5)}