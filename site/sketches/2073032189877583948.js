//シャドウ・マスクとトリニトロン #つぶやきProcessing #p5js
t=0
draw=_=>{createCanvas(W=(w=200)*2,W)+background(0)
C=['green','red','blue']
S=m=>stroke(C[int(x/m)%3])
strokeWeight(9)
for(y=0;y<W;y+=9)for(x=0;x<w;x+=9)S(9),point(x+(y%2)*9,y)
for(x=w;x<W;x+=10)S(10),line(x,0,x,W)}