f=0
draw=_=>{f++||createCanvas(W=500,W)
stroke(W)
strokeWeight(3)
for(n=0;n<6;n+=PI/2){for(i=-PI/2;i<PI/2;i+=PI/80){stroke(n<3?0:W)
P=r=>[250+W*cos(n)+r*cos(n+PI+i),250+W*sin(n)+r*sin(n+PI+i)]
line(...P(c=(f*3+(n+i)*200)%1e3),...P(c+200))
}}}