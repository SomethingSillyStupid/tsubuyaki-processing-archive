f=0
draw=_=>{f++||createCanvas(W=500,W)
background(0)
stroke(W)
for(x=0;x<1e3;x+=20)for(y=(Y=-f*noise(x)*5)%50;y<1e3;y+=50){
p=(a,b)=>[a+(a-250)*(W-b)/W,b]
strokeWeight(max(1,y/50))
line(...p(x,y),...p(x+(90*(noise(x,y-Y)-.5)/20|0)*20,y-50))}}