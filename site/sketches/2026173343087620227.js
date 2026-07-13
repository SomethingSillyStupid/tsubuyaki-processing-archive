//#つぶやきProcessing #p5js
t=0
draw=_=>{
t||createCanvas(W=(w=200)*2,W)+colorMode(HSB)+(P=[2,3],t=5)
P.reduce((a,c)=>a&&(t%c!=0),1)?P.push(t):0
for(i=p=1;i<(L=P.length);i++)
stroke(i*3,w,w),
line((i-1)*W/L,-(I=i%2?-1:1)*P[i-1]%w+w, i*W/L,I*P[i]%w+w)
++t
}