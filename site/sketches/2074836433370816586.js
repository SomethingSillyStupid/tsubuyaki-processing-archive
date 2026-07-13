t=0
draw=_=>{background(0,t++?30:!createCanvas(W=720,W)+W)
noFill()
stroke(W,90)
filter(BLUR)
R=(x,y,z,a)=>z>1?circle(x+=cos(A=a+t/W)*z,y+=sin(A)*z,z-5)+[b=30*sin(t/W+noise(z,t/W)),-b].map(A=>R(x,y,z-11,a+A)):0
for(i=6;i--;)R(360,360,89,i*PI/3)}