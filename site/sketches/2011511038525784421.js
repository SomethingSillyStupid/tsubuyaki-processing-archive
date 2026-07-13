f=0
draw=_=>{createCanvas(w=400,w)
Q=++f/99|0
colorMode(HSB)
for(i=0;i<12;i++){fill((i%2?12-i:i)*30,w,w)
T=(i%2?-1:1)*PI/6
circle(D(cos),D(sin),25)}};D=F=>50*(4+F(t=T*(i+Q))+F(u=t+T)+F(v=t+T/2+PI/2+(f%99/99)**4*PI*(Q%2?-1:1))*2*sin(-T/2))