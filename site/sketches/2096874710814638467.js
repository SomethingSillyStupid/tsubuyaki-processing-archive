//#つぶやきProcessing #p5js
t=0,P=[]
draw=_=>{
r=random
createCanvas(W=(w=200)*2,W)
stroke('blue')
strokeWeight(20)
t++<W?P.push([r(W),r(W),...r([[99,99],[300,300]])]):0
P.map(B=>(X=B[2],Y=B[3],point(B[0]-=(X-B[1])/(M=mag(B[0]-X,B[1]-Y)/9),B[1]+=(Y-B[0])/M)))}