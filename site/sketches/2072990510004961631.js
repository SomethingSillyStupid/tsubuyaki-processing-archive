//疑似乱数 #つぶやきProcessing #p5js
s=0,X=Y=Z=3
draw=_=>{
createCanvas(W=(w=200)*2,W,WEBGL)
camera(800,-900,0)
rotateX(S=s++/71)
rotateZ(S)
noFill()
box(W)
strokeWeight(3)
for(t=0;t<3e3;t++)
T=(t*t*31+17)%359,
point(X=(X*X*37+T)%401-w,Y=(Y*Y*53+T)%401-w,Z=(Z*Z*41+T)%399-w)
}