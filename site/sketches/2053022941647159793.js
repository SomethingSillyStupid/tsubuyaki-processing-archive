//#つぶやきProcessing #p5js
t=0
draw=_=>{
t++%30||createCanvas(W=(w=200)*2,W)+(N=random(2,6))
background('lime')
S=(o,s)=>(strokeWeight((z=sin((t/7+o)/N)*13)),stroke(s*z<N?'red':'blue'),point(s*z+x,y-s*z))
for(x=0;x<W;x+=13)
for(y=0;y<W;y+=31)
S(x+y/N,1),S(x-y/N,-1)
}