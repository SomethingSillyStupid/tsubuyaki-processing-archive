f=0
draw=_=>{
f++||createCanvas(W=500,W)
background(0,20)
stroke(W)
for(n=0;n<99;n+=3)for(d of[0,PI]){
r=(f+9e3)*noise(n)*3%W
i=n/50+d+r/100
t=min(r,50)
strokeWeight(5)
line(x=250+r*cos(i),y=250+r*sin(i),x+t*cos(I=i+f/30),y+t*sin(I))
}
}