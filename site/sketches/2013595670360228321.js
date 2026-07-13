t=0
draw=_=>{t++||createCanvas(W=720,W)
background(0)
stroke(W)
strokeWeight(2)
for(y=0;y<W;y+=20)for(x=0;x<W;x+=4)line(x,(N=noise((X=x+t)/30,y/30)>.5)?y+(noise(X/W,y/W,t/W)*99%20):y,x+8,N?y:y+(noise(X/W,y/W,t/W)*99%20))}