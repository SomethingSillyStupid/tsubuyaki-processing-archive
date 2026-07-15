//#つぶやきProcessing #p5js
t=0
draw=_=>{
createCanvas(W=(w=200)*2,W)
colorMode(HSB)
strokeWeight(4)
a=45*sin(t/w)
for(u=-2;u<2;u+=.02)
for(v=-2;v<2;v+=.02)
stroke((Y=a*Math.cosh(u-v)-w*cos(u+v))%30+w,w,W),
point((a*Math.sinh(u-v)-w*sin(u+v))*sin(U=u*v+t/71)+w,w-Y*cos(U))
++t}