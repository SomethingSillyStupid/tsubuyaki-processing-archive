setup=_=>{createCanvas(W=800,W,WEBGL)
C=circle
s=240
background(0)
rotate(PI/4)
translate(o=-270,o)
for(i=9;i--;)noStroke(fill(165)),rect(x=i*60+26,0,8,540),rect(0,x,540,8);
for(i=9;i--;)fill`#つぶやきProcessing`,C(i%3*s+30,~~(i/3)*s+30,9),i<4&&C(i%2*s+150,~~(i/2)*s+150,9);}