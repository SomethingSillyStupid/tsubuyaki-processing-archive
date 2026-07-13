setup=_=>{createCanvas(W=720,W)
background(A=360)
F=a=>(((abs(X=x-A)%3)*(abs(Y=y-A)%3)^tan((X%Y+sin(x/9^y/9)*9)/20))*noise(x/99,y/99,a)*mag(X,Y)/99)%2*A
loadPixels()
for(y=0;y<W;y++)for(x=0;x<W;x++)[0,1,2].map(p=>pixels[y*W*4+x*4+p]=F(p))
updatePixels()}