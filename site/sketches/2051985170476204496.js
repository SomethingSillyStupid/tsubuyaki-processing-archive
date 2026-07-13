t=1,setup=_=>{createCanvas(w=400, 400)}
draw=_=>{background(220),t<3?t+=.001:t=1
translate(w/2,w/2)
for(i=w;i>0;i-=5-t){beginShape()
for(j=0;j++<4;"#つぶやきProcessing #p5js"){
vertex(a=i*j/cos(j*t), b=i*j/sin(j%t)),fill(b,a,a/b)
}endShape(CLOSE)}} // Slopes