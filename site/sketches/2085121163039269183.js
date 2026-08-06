//Frozen #つぶやきProcessing #p5js
t=s=0
draw=_=>{
t||createCanvas(W=(w=200)*2,W)+(O=random(W))
colorMode(HSB)
for(i=2,p=w,q=w;i<=t*3;i+=2)
line(p,q,p=(R=t*cos((t+i)/O))*cos(T=(R+t+O)*TAU)+w,q=w-R*sin(T)),
stroke(abs(R*tan(i*s))%80+O,w,w,.1)
t=min(s,w)
s=++s>W?0:s}