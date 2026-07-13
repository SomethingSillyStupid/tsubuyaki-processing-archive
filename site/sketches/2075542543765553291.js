//#つぶやきProcessing #p5js
t=0
draw=_=>{a=abs
createCanvas(W=(w=200)*2,W)
for(x=-1;x<1;x+=.1)
for(y=-1;y<1;y+=.1)
z=(x*x+t/W*atan2(y,x)+y*y)/mag(x,y),
strokeWeight(a(z)*3),
stroke(a(y*w),a(x*w),a(z*9),w),
point(cos(z*x)*w+w,sin(z*y)*w+w)
++t
}