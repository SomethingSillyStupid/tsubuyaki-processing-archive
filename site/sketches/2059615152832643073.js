setup=_=>{createCanvas(W=720,W)
background(0)
F=a=>tan(noise(x/99,y/99,a/9)*9)*99^sin(x/15)*99|sin(random(2)+int(x/30)*30+y/30)*2&tan(noise(x/9^x/4,y/9^y/4)*99)*W
loadPixels()
for(y=W;y--;)for(x=W;x--;)[0,1,2].map(p=>pixels[y*W*4+x*4+p]=F(p))
updatePixels()}