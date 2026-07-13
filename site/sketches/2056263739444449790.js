//#つぶやきProcessing #p5js
t=0,w=200
async function draw(x=w,y=w,R=120,n=4){
t||n<4||createCanvas(W=w*2,W)+(M=random(2,5))
if(n<1){stroke(x,t,y,w);strokeWeight(9);point(x,y);t=++t%w;return}
for(let T=0;T<TAU;T+=TAU/M)
await draw((Q=R+t/M)*cos(U=T+R)+x,Q*sin(U)+y,R/M,n-1)
}