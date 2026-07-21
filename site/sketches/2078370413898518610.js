//ノウハウシリーズ 再帰関数で二重ループ #つぶやきProcessing #p5js
t=0
draw=_=>{
createCanvas(W=(w=200)*2,W)
colorMode(HSB)
strokeWeight(9);
(L=(x=0,y=0,d=9)=>x>W?0:y>W?L(x+d,0,d):(stroke(abs(W*cos(x+y%W*sin(cos(t/W))))%360,w,w),point(x,y),L(x,y+d,d)))()
++t}