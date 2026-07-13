//パウル・クレーの天使が出てくるのを期待している #つぶやきProcessing #p5js
t=0
draw=_=>{
r=random
t++||createCanvas(W=(w=200)*2,W)
if((t=t%50)>20)return
noFill()
arc(x=r(w),y=r(w),M=(R=mag(x-w,y-w))*R/30,N=(Q=mag(x-w,y-w))*Q/20,S=r(min(R,Q)),S+r(TAU))
arc(W-x,y,M,N,S,S+r(TAU))
}