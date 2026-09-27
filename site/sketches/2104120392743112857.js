//#つぶやきProcessing #p5js
t=0
draw=_=>{
createCanvas(W=(w=200)*2,W)
if(!(t++%65))for(x=0,P=[];x<W;x+=9)for(y=0,P[x]=[];y<W;y+=9)P[x][y]=int(random(w)+1)
for(x=9;x<W-9;x+=9)for(y=9;y<W-9;y+=9)
stroke((P[x][y]=(abs(P[x][y-9]*y+P[x][y+9]))%9+1)*40),
text(P[x][y].toFixed(0),x,y)}