//#つぶやきProcessing #p5js
t=0,N=M=""
draw=_=>{
createCanvas(W=(w=200)*2,W)
S="プラトン".split('')
T=shuffle([0,1,2,3])
N=T.reduce((a,c)=>a+S[c],"")
textSize(90)
;(int(t/100)+1)%2?(U=T,text(M=N,20,w)):(text(M,20,w),U.join('')=="2130"?text("残念！",100,100):0)
t++}