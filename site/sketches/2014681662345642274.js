t=0
draw=_=>{t++||createCanvas(W=720,W)
background(0)
X=Y=360
for(i=0;i<200;i++)stroke(80,99,255-i/2)+line((X+=cos(A=noise((i-t)/99)*9))+cos(B=A+PI/2)*(L=30*sin(i/63)**(i/30)+i%9*2+5),(Y+=sin(A)*3)+sin(B)*L,X-cos(B)*L,Y-sin(B)*L)+circle(X,Y,i%5?0:5-i/50)}