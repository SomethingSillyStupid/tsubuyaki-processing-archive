t=0
draw=_=>{t||createCanvas(W=800,W,WEBGL)
noStroke(T=translate)
pointLight(W,0,0,0,z=W*2,z)
specularMaterial(99)
box(z)
T(0,-99,(t+=3)%W)
for(i of[1,-1])push`#つぶやきProcessing`,T(i*85,80),shearX(i/9),pop(cylinder(9,230))
box(260,12)
T(0,-20)
box(20,30,3)
T(0,-20)
box(300,12)}