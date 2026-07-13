t=0
draw=_=>{t||createCanvas(W=720,W)
t+=.01
colorMode(HSB)
background(0,.05)
blendMode(ADD)
for(r=0;r<TAU*6;r+=.03)fill(noise(r/4,t)*W%360,80,W,(T=tan(r*4+t))/6)+circle(cos(R=r+noise(r-t))*(D=r*8+sin(r*3-t)*20)+360,sin(R)*D+360,9/T*sin(r*9)**3)}