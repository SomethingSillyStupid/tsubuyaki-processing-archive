t=0
draw=_=>{background(y=0,t++?30:!createCanvas(W=720,W)+W)
stroke(W*cos(T=t/99)**2)
noFill()
filter(BLUR)
P=PI/6
for(;y<740;y+=27)for(x=y%54?0:16;x<740;x+=32)arc(x,y,48,48,(R=int(noise(x/W,y/W,int((T+P*3)/PI))*W)%6*P*2-P)-(M=(1-sin(T)**8)*P*3),R+M+.01,PIE)}