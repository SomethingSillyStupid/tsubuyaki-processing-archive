//#つぶやきProcessing #p5js
draw=_=>{
createCanvas(W=8*132,H=8*66)
for(x=-2;x<2;x+=4/132)
for(y=-1;y<1;y+=2/66)
V=abs(cos(x/8*TAU)*cos(y/4*TAU))*1e3,
abs((E=V%100)-5)<10?text(int(E).toFixed(0),(x+2)/4*W,(y+1)/2*H):0}