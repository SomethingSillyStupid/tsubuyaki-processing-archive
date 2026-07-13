//いわゆる悪魔の曲線 #つぶやきProcessing #p5js
t=-3
draw=_=>{
createCanvas(W=(w=200)*2,W)
strokeWeight(4)
for(x=-2;x<2;x+=.02)
for(y=-2;y<2;y+=.02)
abs(D=y**4-x**4-1.4*y*y+t*x*x)<.03?stroke(W):stroke(D*w,w*tan(D),y/tan(D)),
point(x*w/2+w,y*w/2+w)
t=(t+=.05)>3?-3:t}