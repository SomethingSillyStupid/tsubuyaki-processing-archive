f=0
draw=_=>{f++||createCanvas(W=500,W)
background(0)
stroke(W)
for(r=50;r<W;r+=4){for(i=0;i<TAU;i+=PI/4){strokeWeight(r/50)
p=$=>[250+r*cos(I=(f+9e3)*noise(r)/30)+$*cos(I+i+f/50+r),250+r*sin(I)+$*sin(I+i+f/30)]
line(...p(r/9),...p(r/3))
}}}
