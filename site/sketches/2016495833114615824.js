t=0
draw=_=>{t++||createCanvas(W=720,W,WEBGL)
if(t%60==1){
background(W)
blendMode(SUBTRACT)
X=Y=0
for(r=0;r<TAU;r+=.005)stroke(random(30),random(90),random(180))+line(X,Y,X=cos(r)*(L=random(150)*((noise(sin(r*99),t)*2)**1.2)),Y=sin(r)*L)}}