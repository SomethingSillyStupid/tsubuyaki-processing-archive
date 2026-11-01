//ノウハウ 画面の隅を移動する点 #つぶやきProcessing #p5js
t=0
draw=_=>{
createCanvas(W=(w=200)*2,W)+(P=2*W,Q=3*W,R=P+P)
A=t=>(T=t%R)<0?A(T+R):T<W?T:T<P?W:T<Q?(Q-t):0
strokeWeight(20)
point(A(t),A(t-W))
++t}