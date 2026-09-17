//自分でdraw()を未定義にする
//#つぶやきProcessing #p5js
t=0
draw=_=>{
createCanvas(W=(w=200)*2,W)
text('t='+t+' HUMAN',150,w)
if(random()<.001){background(0);fill(W);text('EXTINCT',150,w);draw=undefined}
++t}