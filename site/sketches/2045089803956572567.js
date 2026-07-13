//ソローモデル #つぶやきProcessing #p5js
t=0
draw=_=>{
t++%9||createCanvas(W=(w=200)*2,W)+(S=random())
for(a=0;a<1;a+=.1)
for(s=0;s<1;s+=.1){
for(i=0,k=S;i<W;i++)
k=(s*k**a-.5*k)*.01+k,
strokeWeight(log(k)*3),
stroke(a*255,s*255,k*255),
point(k*w*cos(i+k)+w,k*w*sin(i+k)+w)}}