//#つぶやきProcessing #p5js
setup=_=>{
createCanvas(W=(w=200)*2,W)
D=(y,m,d)=>(m<3?(--y,m+=12):0,365*y+(y>>2)-(C=int(y/100))+(C>>2)+((m*979-1033)>>5)+d-366)
S=E=>sin((D(2026,2,d)-714985)/E*TAU)
for(d=1;d<30;d+=.1)
point(T=d*W/30,S(23)*w+w),
point(T,S(28)*w+w),
point(T,S(33)*w+w)}