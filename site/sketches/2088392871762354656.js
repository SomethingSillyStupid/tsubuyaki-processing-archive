//#つぶやきProcessing #p5js
t=0,P=[]
draw=_=>{r=random
t++||createCanvas(W=(w=200)*2,W)
colorMode(HSB)
noStroke()
P.push([r(W),r(W),r(300)])
P.map(B=>(fill(C=B[2],w,w,.01),mag((x=B[0]+=sin(T=r(TAU)))-w,(y=B[1]+=cos(T))-w)<w?circle(x,y,C/3):0))
t>99?P.shift():0
}