//まだ疑似乱数やってる #つぶやきProcessing #p5js
t=0,R=T=0,X=Y=200
draw=_=>{
t++||createCanvas(W=(w=200)*2,W)+background(0)
strokeWeight(.2)
stroke(W)
line(X,Y,X=(R=(R*91+23)%199)*cos(T=(t*311+113)%101/101*TAU)+w,Y=R*sin(T)+w)
}