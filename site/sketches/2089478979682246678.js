t=0
draw=_=>{
t++||createCanvas(W=(w=200)*2,W)
background(0,.1)
colorMode(HSB,w)
blendMode([ADD,EXCLUSION][t%2])
S="#つぶやきProcessing #p5js".split('')
textSize(w)
textAlign(C=CENTER,C)
textStyle(BOLD)
fill(random(w),w,w)
text(S[t%S.length],w*cos(t*3)+w,w*sin(t)+w)
}