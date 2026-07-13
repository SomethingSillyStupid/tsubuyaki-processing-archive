t=0
draw=_=>{t++||createCanvas(W=720,W)
colorMode(HSB)
F=a=>noise((x+t)/(i<5?W:i%5?i%6?i:200:360),i)*(i<5?300:i%5?i*i*3:400)
for(i=0;i<9;i++)for(x=0;x<W;x++)stroke(i<5?230:i%5?i%6?120:220:30,90,i<5?i*12:i%5?i*4:9)+line(x,(Y=i*90)-F(0),x,Y+F(.01))}