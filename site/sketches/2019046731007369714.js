f=0
draw=_=>{f++||createCanvas(W=500,W)
background(0)
stroke(W)
noFill()
for(y=-99;y<600;y+=50)for(x=-99;x<W;x+=9){beginShape()
for(i=0;i<TAU;i+=TAU/3){t=50*noise(x,y)-10
vertex(x+t*cos(I=f/30+i+x),y+t*sin(I)+50*cos(f*noise(x,y)/30))}endShape(CLOSE)}}