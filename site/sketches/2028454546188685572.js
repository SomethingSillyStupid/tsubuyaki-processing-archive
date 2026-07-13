t=0
draw=_=>{t++||createCanvas(W=720,W,WEBGL)
colorMode(HSB)
blendMode(SUBTRACT)
background(W)
for(F=.5,r=0;r<6.2;r+=PI/12)for(X=Y=0,F++,i=0;i<90;i++)fill((t+(F%4>1?90:0))%360,60,99-i/4,.05)+circle(X+=cos(A=r+(F%4-2)*noise(i/9-t/9)*i/5)*5,Y+=sin(A)*5,45-i)}