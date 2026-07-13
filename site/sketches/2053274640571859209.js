//#つぶやきProcessing #p5js
t=0
draw=_=>{
r=random
t++||createCanvas(W=(w=200)*2,W)
background(0,0,w,1)
stroke('gold')
fill(w,0,w,w)
arc(w+r(-9,9),w+r(-9,9),R=r(W),R,S=r(TAU),S+r(PI/2),CHORD)
textSize(50)
textAlign(CENTER)
text("HAPPY MOTHERS' DAY",0,99,W)
}