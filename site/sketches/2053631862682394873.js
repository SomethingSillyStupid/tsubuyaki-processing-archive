//#つぶやきProcessing #p5js
t=0
draw=_=>{
r=random
t++%200||createCanvas(W=(w=200)*2,W)
I=int(r(3))
C=color(['darkslateblue','orangered','#6495ED'][I])
strokeWeight(J=I*2+3)
for(i=0,x=r(W),y=r(W);i<w;i++)
C.setAlpha(w-i),
stroke(C),
point(x+=r(E=-J,-E),y+=r(E,-E))
}