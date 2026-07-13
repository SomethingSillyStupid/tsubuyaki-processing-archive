// #つぶやきProcessing #p5js
t=0,d=23
draw=_=>{
t||createCanvas(W=(w=(h=25)*8)*2,W)
H=(t,n=1)=>n>9?0:(sin(t*n)+H(t,n+1))/n
for(x=0;x<W;x+=d*2)
for(y=0;y<W;y+=d*2)
stroke((C=d*H((t-x)/w))*h,(S=d*H((t-y)/w-1.6))*h,S*C*h,U=S+C),
strokeWeight(U),
point(C+x,S+y)
++t}