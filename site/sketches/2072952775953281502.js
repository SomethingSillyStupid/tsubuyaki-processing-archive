//#つぶやきProcessing #p5js
t=0
draw=_=>{
t||createCanvas(W=(w=200)*2,W)+(T=X=Y=S=w)
colorMode(HSB)
blendMode([ADD,MULTIPLY][(t*17+3)%2])
textAlign(CENTER,CENTER)
fill((t*31+17)%359,W,W,.6)
textSize((S=(S*57+11)%391))
text(T=(T*71*91)%101,X=(X*37+17)%401,Y=(Y*53+11)%401)
++t}