f=0
draw=_=>{
f++||createCanvas(W=500,W)+background(0)
stroke(W)
for(n=0;n<60;n++)
  line(x=1e3*noise(f,n/9)-250,y=1e3*noise(f,n/9,9)-250,x+30*cos(i=TAU*3*noise(x/999,y/999)),y+30*sin(i))
}