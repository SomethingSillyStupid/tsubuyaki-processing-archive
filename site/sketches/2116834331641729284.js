//ワープってこんな感じかも #つぶやきProcessing #p5js
t=0,d=3
draw=_=>{createCanvas(W=(w=200)*2,W)
for(x=0;x<W;x+=d)for(y=0,p=x,q=0;y<W;y+=d)
stroke(D=mag(x-w,y-w),x,w),line(p,q,p=x+(D<w*abs(U=sin(t/w))?D/9*sin(U*w+(x*y)/w):0),q=y)
t++}