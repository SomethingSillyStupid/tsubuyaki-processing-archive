//#つぶやきProcessing #p5js
t=0,h=.02
draw=_=>{
createCanvas(W=(w=200)*2,W)
d=(x,y)=>(x-.4)**2+(y-.4)**2
for(x=-1;x<1;x+=h)
for(y=-1;y<1;y+=h)
strokeWeight((z=exp(d(x,y)))),
stroke(int(x*y*z)%2?'lime':'green'),
point(x*w*cos(U=t/w+z)+w,y*w*sin(U)+w)
t++}