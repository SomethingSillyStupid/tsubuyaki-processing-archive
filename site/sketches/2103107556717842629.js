t=0
draw=_=>{t++||createCanvas(W=720,W)
colorMode(HSB,A=25)
noStroke()
background(F=1)
for(i=0;i<A;i++)for(r=0;r<6+!(F=-F);r+=PI/4)for(d=!(X=i%5*144+72,Y=int(i/5)*144+72);d++<A;)fill(i*9%A,d,W,A-d)+circle(X+=cos(N=r+F*noise(i,d/99-t/W)*99)*3,Y+=sin(N)*3,9-d)}