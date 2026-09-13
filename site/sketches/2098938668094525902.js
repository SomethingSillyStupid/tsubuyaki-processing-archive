//#つぶやきProcessing #p5js
t=0,P=[]
draw=_=>{
r=random
createCanvas(W=(w=200)*2,W)
strokeWeight(8)
P.push([r(W),r(W)])
P.map((B,i)=>(P.map((C,j)=>j!=i?((D=dist(...B,...C))<50?(B[0]+=(C[1]-B[1])/D,B[1]-=(C[0]-B[0])/D):0):0),point(...B)))
++t}