f=0
draw=_=>{f++||createCanvas(W=500,W)
background(0)
stroke(W)
noFill()
for(y=0;y<W;y+=3){beginShape()
for(t=0;++t<200;endShape()){c=3e3*noise(y)%250
vertex(x=(f*6+9e3)*noise(y,9)%900-200+t,x<c?y:x>W-c?W-y:y+(x-c)*(W-2*y)/(W-2*c))}}}