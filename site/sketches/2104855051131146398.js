//1/f noise #つぶやきProcessing #p5js
//https://t.co/24LebCeSaV
t=0
draw=_=>{createCanvas(W=(w=200)*2,W)
noFill()
colorMode(HSB)
for(n=1;n<40;n++,stroke(R%360,w,w),endShape(CLOSE))for(T=0,beginShape();T<TAU;T+=.01)
vertex((R=(w-n*5+w/(n+1)*sin(T+n*t/W)))*cos(T)+w,R*sin(T)+w)
++t}