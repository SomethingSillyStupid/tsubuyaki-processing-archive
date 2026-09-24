//arcsin（赤）はtan（青）に似ている。黒は誤差 #つぶやきProcessing #p5js
t=0
draw=_=>{noLoop()
createCanvas(W=(w=200)*2,W)
strokeWeight(4)
P=(y,c)=>(stroke(c),point(x*w+w,y))
for(x=-1;x<1;x+=.01)
P(abs(tan(x)-asin(x))*w+w,0),
P(asin(x)*w+w,'red'),
P(tan(x)*w+w,'blue')
++t}