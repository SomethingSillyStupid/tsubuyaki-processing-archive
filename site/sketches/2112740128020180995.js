//最近流行りのキャラクターの目 #つぶやきProcessing #p5js
t=0
draw=_=>{
createCanvas(W=(w=200)*2,W)
strokeWeight(8)
fill(0)
circle(w,w,w)
fill(W)
ellipse(w,250,w*.6,w/3)
ellipse(w,180,w*.9,w*.6)
++t}