//blendModeとfilterのテスト #つぶやきProcessing #p5js
t=0
draw=_=>{
t++||createCanvas(W=(w=200)*2,W)+noStroke(r=random)
fill(...shuffle([X=r(W),Y=r(W),R=r(W)]),77)
blendMode(r([OVERLAY,EXCLUSION]))
ellipse(X,Y,R,r(w))
filter(r([DILATE,ERODE,DILATE,OPAQUE]),99)
}