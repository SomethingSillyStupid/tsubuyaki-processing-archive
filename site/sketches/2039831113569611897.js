//#つぶやきProcessing #p5js
t=0
draw=_=>{
t||createCanvas(W=(w=200)*2,W)+(P=[2,3],t=5,F=random(9))
T=P.reduce((a,c)=>a&&(t%c!=0),1)?P.push(t):0
p=x=>(x<0?-1:1)*abs(x)**.75
stroke(A=random(255),255-A,W)
strokeWeight(T?8:3)
point(t/5*p(cos(t/F))+w,t/5*p(sin(t/F))+w)
t=++t%1000
}