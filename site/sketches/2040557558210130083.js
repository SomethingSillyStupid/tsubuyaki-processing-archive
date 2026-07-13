//#つぶやきProcessing #p5js
t=0,a=1,b=.2,c=.8,d=.08
draw=_=>{
createCanvas(W=(w=200)*2,W)
T="HAPPY EASTER!".split('')
textSize(2/d)
for(x=-2,i=0;x<2;x+=d)
for(y=-2;y<2;y+=d)
fill(A=w*sin((x+y+t/w)*9),w-A,w),
(x/a)**2+(y/(b*x+c))**2<1?text(T[i++%T.length],y*w+w,x*w+w):0
++t}