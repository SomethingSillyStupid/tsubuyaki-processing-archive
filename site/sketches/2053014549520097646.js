//#つぶやきProcessing #p5js
t=0
draw=_=>{
t++%30||createCanvas(W=(w=200)*2,W)+(N=random(2,6))
background('orange')
S=(o,s)=>(strokeWeight((z=sin((t+o)/N)*6)),stroke(abs(z)<N?'red':'blue'),point(s*z*3+x,y))
for(x=0;x<W;x+=2)
for(y=0;y<W;y+=3)
S(x+y/3,1),S(x-y/3,-1)
}