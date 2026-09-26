// #つぶやきProcessing #p5js
t=0,d=9
draw=_=>{
createCanvas(W=(w=200)*2,W)
C=T=>R*cos(T)+w
strokeWeight(4)
for(x=0;x<W;x+=d)for(y=0;y<W;y+=d)
R=mag(X=x-w,Y=y-w),
T=atan2(Y,X),
stroke((V=sqrt(R/(w-R)))*w,R,255-R),
line(C(U=R/w*sin(V*t/w)+T),C(U-1.6),(R=(R+d),C(U)),C(U-1.6))
++t}