t=0
draw=_=>{t++||createCanvas(W=720,W)
background(0)
noFill()
stroke(W)
circle(360,360,30)
for(a=-1;a<2;a+=2)for(r=0;r<6+!(D=27)+!(X=Y=360);r+=PI/3)for(d=0;d<350;d+=(D-=1))line(X,Y,X=360+cos(R=r+noise(d/W-t/W)*6*a)*d,Y=360+sin(R)*d)+circle(X,Y,D)}