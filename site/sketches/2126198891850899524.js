//A Homage to Hofstadter #つぶやきProcessing #p5js
t=0
draw=_=>{c=cos,s=sin
createCanvas(W=(w=200)*2,W)
for(x=0,R=20,U=.9;x<W;x+=40)for(y=0;y<W;y+=40)
for(i=1,D=sin((x+y+t)/71);i<=7;i++)
triangle(R*c(T=(i-1)*U)+x,R*s(T)+y,X=R*c(T=i*U)+x,Y=R*s(T)+y,R*D*c(T+D)+x,R*D*s(T+D)+y)
++t}