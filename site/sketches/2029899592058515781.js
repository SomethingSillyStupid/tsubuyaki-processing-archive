//偶にアブナイ言葉がでる #つぶやきProcessing #p5js
t=0
draw=_=>{
frameRate(2)
createCanvas(W=(w=200)*2,W)
T="サエナクトーン".split('')
S=shuffle(T)
textSize(60)
textAlign(CENTER,CENTER)
text(S.join(''),w,w)
}