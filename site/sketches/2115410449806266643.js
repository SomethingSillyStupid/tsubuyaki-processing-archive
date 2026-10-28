f=0
draw=_=>{f++||createCanvas(W=500,W)
colorMode(HSB,1)
background(0)
for(z=2,d=PI/5;++z<6;){for(r=0;r<W;r=R){for(i=I=f*noise(r,z)/30;i<I+6;i+=d){fill(noise(i-I,r,z),1,1,.3),quad(...[r,R=r+25*z,R,r].flatMap((a,k)=>[250+a*cos(b=k>1?i+d:i),250+a*sin(b)]))}}}}