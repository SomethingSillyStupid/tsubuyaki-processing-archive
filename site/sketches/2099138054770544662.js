f=0
draw=_=>{f++||createCanvas(W=500,W)
background(0)
strokeWeight(5)
for(x=0;x<=W;x+=50){for(y=0;y<=W;y+=50){
stroke(W,(x+y+f)%255)
circle(x,y,5)
for(i=0;++i<5;)line(x+9*cos(I=i/2*PI+f/30+x+y),y+9*sin(I),x+50*cos(I),y+50*sin(I))}}}